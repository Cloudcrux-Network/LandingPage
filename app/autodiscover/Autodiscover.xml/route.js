import { NextResponse } from "next/server";

async function autoDiscover(req, res) {
  const rawXML = await req.text();
  const regex = /<EMailAddress>([^<]+)<\/EMailAddress>/;
  const match = rawXML.match(regex);
  const emailAddr = match && match[1] ? match[1] : "";

  return new Response(
    `<?xml version="1.0" encoding="utf-8" ?>
  <Autodiscover xmlns="http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006">
    <Response xmlns="http://schemas.microsoft.com/exchange/autodiscover/outlook/responseschema/2006a">
      <Account>
        <AccountType>email</AccountType>
        <Action>settings</Action>
        <Protocol>
          <Type>IMAP</Type>
          <Server>${process.env.AUTODISCOVER_DOMAIN}</Server>
          <Port>${process.env.AUTODISCOVER_IMAP}</Port>
          <DomainRequired>off</DomainRequired>
          <LoginName>${emailAddr}</LoginName>
          <SPA>off</SPA>
          <SSL>true</SSL>
          <AuthRequired>on</AuthRequired>
        </Protocol>
        <Protocol>
          <Type>SMTP</Type>
          <Server>${process.env.AUTODISCOVER_DOMAIN}</Server>
          <Port>${process.env.AUTODISCOVER_SMTP}</Port>
          <DomainRequired>off</DomainRequired>
          <LoginName>${emailAddr}</LoginName>
          <SPA>off</SPA>
          <SSL>true</SSL>
          <AuthRequired>on</AuthRequired>
        </Protocol>
      </Account>
    </Response>
  </Autodiscover>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
export { autoDiscover as POST, autoDiscover as GET };

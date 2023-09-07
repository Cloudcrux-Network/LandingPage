import { NextResponse } from "next/server";

export async function GET(req) {
  const emailAddr = req.nextUrl.searchParams.get("emailaddress");

  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <clientConfig version="1.1">
    <emailProvider id="cloudcrux.com">
      <domain>cloudcrux.com</domain>
      <displayName>CloudCrux Network</displayName>
      <displayShortName>CloudCrux</displayShortName>
      <incomingServer type="imap">
        <hostname>${process.env.AUTODISCOVER_DOMAIN}</hostname>
        <port>${process.env.AUTODISCOVER_IMAP}</port>
        <socketType>SSL</socketType>
        <authentication>password-cleartext</authentication>
        <username>${emailAddr}</username>
      </incomingServer>
      <outgoingServer type="smtp">
        <hostname>${process.env.AUTODISCOVER_DOMAIN}</hostname>
        <port>${process.env.AUTODISCOVER_SMTP}</port>
        <socketType>STARTTLS</socketType>
        <authentication>password-cleartext</authentication>
        <username>${emailAddr}</username>
      </outgoingServer>
    </emailProvider>
  </clientConfig>
`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}

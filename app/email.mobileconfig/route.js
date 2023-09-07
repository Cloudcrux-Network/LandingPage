import { NextResponse } from "next/server";

export async function GET(req) {
  const emailAddr = req.nextUrl.searchParams.get("email");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>PayloadContent</key>
        <array>
            <dict>
                <key>EmailAccountDescription</key>
                <string>${emailAddr} - CDMON</string>
                <key>EmailAccountName</key>
                <string>${emailAddr}</string>
                <key>EmailAccountType</key>
                <string>EmailTypeIMAP</string>
                <key>EmailAddress</key>
                <string>${emailAddr}</string>
                <key>IncomingMailServerAuthentication</key>
                <string>EmailAuthPassword</string>
                <key>IncomingMailServerHostName</key>
                <string>${process.env.AUTODISCOVER_DOMAIN}</string>
                <key>IncomingMailServerPortNumber</key>
                <integer>${process.env.AUTODISCOVER_IMAP}</integer>
                <key>IncomingMailServerUseSSL</key>
                <true/>
                <key>IncomingMailServerUsername</key>
                <string>${emailAddr}</string>
                <key>OutgoingMailServerAuthentication</key>
                <string>EmailAuthPassword</string>
                <key>OutgoingMailServerHostName</key>
                <string>${process.env.AUTODISCOVER_DOMAIN}</string>
                <key>OutgoingMailServerPortNumber</key>
                <integer>${process.env.AUTODISCOVER_SMTP}</integer>
                <key>OutgoingMailServerUseSSL</key>
                <true/>
                <key>OutgoingMailServerUsername</key>
                <string>${emailAddr}</string>
                <key>OutgoingPasswordSameAsIncomingPassword</key>
                <true/>
                <key>PayloadDescription</key>
                <string>Email autoconfiguration profile</string>
                <key>PayloadDisplayName</key>
                <string>${emailAddr} - Email</string>
                <key>PayloadIdentifier</key>
                <string>com.cloudcrux.autoconfig</string>
                <key>PayloadType</key>
                <string>com.apple.mail.managed</string>
                <key>PayloadUUID</key>
                <string>54ea0cab-0526-4909-8ff1-b3908dc8eee8</string>
                <key>PayloadVersion</key>
                <real>1</real>
                <key>SMIMEEnablePerMessageSwitch</key>
                <false/>
                <key>SMIMEEnabled</key>
                <false/>
                <key>disableMailRecentsSyncing</key>
                <false/>
            </dict>
        </array>
        <key>PayloadDescription</key>
            <string>CloudCrux email autoconfiguration</string>
            <key>PayloadDisplayName</key>
            <string>${emailAddr} - Email</string>
            <key>PayloadIdentifier</key>
            <string>com.cloudcrux.autoconfig</string>
        <key>PayloadOrganization</key>
        <string>CloudCrux Network</string>
        <key>PayloadRemovalDisallowed</key>
        <false/>
        <key>PayloadType</key>
        <string>Configuration</string>
        <key>PayloadUUID</key>
        <string>90677261-b063-42fc-8848-53e2097ea385</string>
        <key>PayloadVersion</key>
        <integer>1</integer>
    </dict>
    </plist>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}

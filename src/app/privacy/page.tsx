import { Column, Heading, Meta, Schema, Table, Text } from "@once-ui-system/core";
import { CustomMDX } from "@/components";
import { baseURL, person } from "@/resources";

const title = `Privacy policy – ${person.name}`;
const description = "What personal data this site collects, why, who receives it, and your rights.";
const path = "/privacy";

const before = `
This is my personal website. This page explains what personal data it collects when you visit, why, and what you can do about it. I've kept it short and only listed what the site actually does.

## Who I am

I'm ${person.name}, an individual based in the UK, and I'm the data controller for this site. If you have any question about your data, email me at [${person.email}](mailto:${person.email}).

## What I collect and why

**Server logs (Vercel).** The site is hosted on Vercel. Like any web server, it receives your IP address, browser and device details, the page you asked for and the referring page with every request, and keeps them in short-lived logs. This is needed to deliver the site and keep it secure. Lawful basis: legitimate interests.

**Umami analytics (cookieless, always on).** I run my own instance of [Umami](https://umami.is) at stats.mavlin.com to count visits. It records the page you visited, the referring site, your browser, operating system, device type, screen size, language and approximate country. It uses no cookies and doesn't store your IP address, so it can't recognise you on a later visit or across sites. Lawful basis: legitimate interests, in understanding which pages people read with as little intrusion as possible.

**Google Analytics (only if you accept).** If you click "Accept" on the cookie banner, the site loads Google Analytics 4. It sets cookies and sends Google the pages you visit, the referring site, your device, browser and operating system, approximate location and a random identifier stored in those cookies. I use it to see in more detail how the site is used. If you reject or ignore the banner, Google Analytics is never loaded. Lawful basis: consent. You can read how Google uses this data at [How Google uses information from sites that use its services](https://policies.google.com/technologies/partner-sites), and you can block it on every site with the [Google Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout).

**Chat widget (Replicant).** Each page loads a chat widget script from replicant.im, so Replicant receives your IP address, browser details and the address of the page you're on. If you open the chat and send messages, Replicant (operated by Selfound Ltd) receives and stores your messages and IP address, and uses OpenAI to generate the replies. Don't share anything sensitive in the chat. Replicant's own [privacy policy](https://replicant.im/privacy) applies to that conversation. Lawful basis: legitimate interests, in offering a way to ask questions about me and my work.

**Email.** If you email me, I receive your email address, your name if you include it, and whatever you write. I use it only to reply. Lawful basis: legitimate interests.

The site has no contact form, newsletter, comments, accounts or embedded videos or posts. The fonts are served from this site, not from Google. The share buttons on blog posts are plain links: nothing is sent to X or LinkedIn unless you click one.

## Cookies and browser storage
`;

const after = `
To change your Google Analytics choice at any time, click "Cookie settings" at the bottom of any page. If you reject, the site stops Google Analytics and deletes its \`_ga\` cookies. You can also clear cookies and site data in your browser settings.

## Who receives your data

- **Vercel Inc.** (USA), which hosts the site and its server logs.
- **The host of my Umami instance**, which stores the cookieless analytics.
- **Google LLC / Google Ireland Limited**, for Google Analytics, only if you accept.
- **Replicant (Selfound Ltd)**, for the chat widget, and **OpenAI**, which Replicant uses to generate chat replies.
- **My email provider**, if you email me.

I don't sell your data or use it for advertising, and I don't share it with anyone else unless the law requires it.

## International transfers

Vercel, Google and OpenAI are based in the USA, so your data may be processed there. Those transfers rely on the UK Extension to the EU–US Data Privacy Framework where the provider is certified, or on Standard Contractual Clauses with the UK Addendum (or the UK International Data Transfer Agreement).

## How long I keep it

- **Server logs:** kept by Vercel for a short period under its own log retention, then deleted.
- **Umami:** anonymous visit records with no IP address or cookie identifier. They aren't linked to you, so I keep them as long-term site statistics.
- **Google Analytics:** cookies last up to 2 years. Google keeps the event data for the retention period set on my account, 14 months at most.
- **Chat:** kept by Replicant as described in its privacy policy.
- **Email:** kept as long as needed to deal with your message, and deleted when no longer needed.
- **Your cookie choice:** kept in your browser for 12 months, after which the banner asks you again.

## Your rights

Under UK GDPR you have the right to:

- **access** the personal data I hold about you;
- have it **corrected** if it's wrong (rectification);
- have it **deleted** (erasure);
- **restrict** how I use it;
- **object** to processing based on legitimate interests;
- receive it in a portable format (**portability**);
- **withdraw your consent** at any time, using "Cookie settings". This doesn't affect processing that happened before you withdrew it.

To use any of these rights, email [${person.email}](mailto:${person.email}). I'll reply within one month. Note that Umami and the server logs hold no identifier I could use to find your data.

## Complaints

If you're unhappy with how I handle your data, please tell me first. You also have the right to complain to the UK Information Commissioner's Office (ICO) at [ico.org.uk](https://ico.org.uk).

## Changes to this policy

If the site starts collecting anything new, I'll update this page and the date below.

**Last updated: 5 October 2026**
`;

const storageRows = [
  ["_ga", "Cookie (Google Analytics)", "Tells visits apart with a random identifier. Set only after you accept.", "2 years"],
  ["_ga_G3MG697W8S", "Cookie (Google Analytics)", "Keeps track of your session. Set only after you accept.", "2 years"],
  ["cookie-consent", "Local storage", "Remembers whether you accepted or rejected Google Analytics, and when.", "12 months"],
  ["data-theme and other data-* keys", "Local storage", "Remembers your light or dark theme and display settings.", "Until you clear it"],
  ["Replicant chat", "Cookies on replicant.im", "May be set by Replicant inside the chat window when you open it.", "See Replicant's policy"],
];

export async function generateMetadata() {
  return Meta.generate({
    title,
    description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Privacy policy")}`,
    path,
  });
}

export default function Privacy() {
  return (
    <Column maxWidth="s" paddingTop="24" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={title}
        description={description}
        path={path}
        image={`/api/og/generate?title=${encodeURIComponent("Privacy policy")}`}
        author={{
          name: person.name,
          url: `${baseURL}${path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading variant="display-strong-s" marginBottom="m">
        Privacy policy
      </Heading>
      <CustomMDX source={before} />
      <Column fillWidth marginY="8">
        <Table
          data={{
            headers: [
              { content: "Name", key: "name" },
              { content: "Purpose and expiry", key: "purpose" },
            ],
            rows: storageRows.map(([name, type, purpose, expires]) => [
              <Column key="name" gap="4">
                <Text variant="label-strong-s">{name}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {type}
                </Text>
              </Column>,
              <Column key="purpose" gap="4">
                <Text variant="body-default-s">{purpose}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  Expires: {expires}
                </Text>
              </Column>,
            ]),
          }}
        />
      </Column>
      <CustomMDX source={after} />
    </Column>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Button, Column, Row, SmartLink, Text } from "@once-ui-system/core";

const GA_ID = "G-G3MG697W8S";
const KEY = "cookie-consent";
const REOPEN = "cookie-consent-reopen";
const MAX_AGE = 365 * 24 * 60 * 60 * 1000; // ask again after ~12 months

type Choice = "granted" | "denied" | null;

function readChoice(): Choice {
  try {
    const [value, ts] = (localStorage.getItem(KEY) || "").split("|");
    if ((value === "granted" || value === "denied") && Date.now() - Number(ts) < MAX_AGE) {
      return value;
    }
  } catch {}
  return null;
}

function stopAnalytics() {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
  // Delete _ga* cookies on this host and every parent domain GA may have used.
  const parts = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/${d}`;
  }
}

export function CookieConsent({ gaEnabled }: { gaEnabled: boolean }) {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(saved === null);
    const reopen = () => {
      setOpen(true);
      requestAnimationFrame(() => ref.current?.focus());
    };
    window.addEventListener(REOPEN, reopen);
    return () => window.removeEventListener(REOPEN, reopen);
  }, []);

  const record = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, `${value}|${Date.now()}`);
    } catch {}
    if (value === "denied") stopAnalytics();
    else (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = false;
    setChoice(value);
    setOpen(false);
  };

  return (
    <>
      {gaEnabled && choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {open && (
        <Column
          ref={ref}
          role="region"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-text"
          tabIndex={-1}
          background="page"
          border="neutral-alpha-medium"
          radius="l"
          padding="16"
          gap="12"
          shadow="l"
          style={{
            position: "fixed",
            left: 16,
            right: 16,
            bottom: 16,
            maxWidth: 400,
            zIndex: 1000001, // above the Replicant chat bubble so it never covers a button
          }}
        >
          <Text id="cookie-consent-title" variant="label-strong-s" onBackground="neutral-strong">
            Analytics cookies
          </Text>
          <Text id="cookie-consent-text" variant="body-default-s" onBackground="neutral-weak">
            May I use Google Analytics to see how this site is used? It sets cookies and sends
            visit data to Google. Nothing is loaded unless you accept. You can change this any
            time via “Cookie settings” at the bottom of the page. See my{" "}
            <SmartLink href="/privacy">Privacy policy</SmartLink>.
          </Text>
          <Row gap="8">
            <Button variant="secondary" size="s" fillWidth onClick={() => record("granted")}>
              Accept
            </Button>
            <Button variant="secondary" size="s" fillWidth onClick={() => record("denied")}>
              Reject
            </Button>
          </Row>
        </Column>
      )}
    </>
  );
}

export function CookieSettingsLink() {
  return (
    <Button
      variant="tertiary"
      size="s"
      onClick={() => window.dispatchEvent(new Event(REOPEN))}
    >
      Cookie settings
    </Button>
  );
}

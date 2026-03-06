import { Metadata } from "next";

import {
  MessageSquare,
  Phone,
  Mail,
  CreditCard,
  ShieldAlert,
  ArrowRight,
  CircleAlert,
  TriangleAlert,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const scams = [
  {
    icon: MessageSquare,
    title: "Fake Package Delivery SMS",
    severity: "Very Common",
    description:
      "You receive an SMS claiming a package is waiting for you, but you need to click a link or pay a small fee to collect it. The link steals your personal information.",
    redFlags: [
      "Unknown sender number",
      "Unexpected package notification",
      "Link to an unfamiliar website",
      "Asks for personal details or payment",
      "Creates urgency: 'Package will be returned in 24 hours'",
    ],
    example:
      '"Dear customer, your package #SL38291 is on hold. Pay Rs. 150 delivery fee to receive it: http://fake-delivery.lk/pay"',
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Impersonation",
    severity: "Very Common",
    description:
      "Someone pretends to be your family member, friend, or a bank official on WhatsApp. They ask for money transfers or personal banking information.",
    redFlags: [
      "New or unfamiliar phone number",
      "Claims to be a relative in emergency",
      "Asks for money urgently",
      "Pressures you not to call and verify",
      "Poor grammar or unusual language",
    ],
    example:
      '"Hi Amma, this is my new number. I lost my phone. Can you send Rs. 10,000 to this account urgently? I will explain later."',
  },
  {
    icon: Phone,
    title: "Fake Bank Phone Calls",
    severity: "Common",
    description:
      "A caller claims to be from your bank and says there is a problem with your account. They ask for your PIN, OTP code, or card details to 'fix' the issue.",
    redFlags: [
      "Bank never asks for PIN or OTP by phone",
      "Caller creates panic about account security",
      "Asks to read back verification codes",
      "Threatens to close your account immediately",
      "Refuses to let you call the bank back",
    ],
    example:
      '"This is the security department of your bank. We have detected suspicious activity on your account. Please provide your OTP to verify your identity."',
  },
  {
    icon: Mail,
    title: "Lottery and Prize Scams",
    severity: "Common",
    description:
      "You receive a message saying you have won a prize or lottery. To claim it, you must pay a processing fee or provide your bank details.",
    redFlags: [
      "You never entered any lottery",
      "Must pay to receive a prize",
      "Asks for bank account information",
      "Uses foreign currency amounts",
      "Email from a free provider like Gmail",
    ],
    example:
      '"Congratulations! You have been selected as the winner of Rs. 500,000. To claim, send Rs. 2,000 processing fee to account #..."',
  },
  {
    icon: CreditCard,
    title: "Online Shopping Scams",
    severity: "Growing",
    description:
      "Fake online shops or social media sellers offer products at very low prices. After payment, you receive nothing or a completely different item.",
    redFlags: [
      "Prices far below market value",
      "No physical address or contact number",
      "Payment only by bank transfer",
      "No return or refund policy",
      "Brand new social media page with few followers",
    ],
    example:
      '"Original iPhone 15 for only Rs. 25,000! Limited stock. Send payment to this account to reserve yours."',
  },
];

function getSeverityColor(severity: string) {
  switch (severity) {
    case "Very Common":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "Common":
      return "bg-amber-600/10 text-amber-600 border-amber-600/20";
    case "Growing":
      return "bg-primary/10 text-primary border-primary/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

export const metadata: Metadata = {
  title: "Common Digital Scams - SafeGuard SL",
  description:
    "Learn to recognise these common tricks used by scammers. Understanding how they work is your best defence.",
};

export default function CommonScamsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="border-b border-border bg-destructive/5 min-h-[30vh] items-center flex">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
              <TriangleAlert className="h-6 w-6 text-destructive" />
            </div>
            <h1 className="text-balance text-4xl font-bold text-foreground lg:text-4xl">
              Common Digital Scams in Sri Lanka
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Learn to recognise these common tricks used by scammers.
              Understanding how they work is your best defence.
            </p>
          </div>
        </div>
      </section>

      {/* Scam Cards */}
      <section className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex flex-col gap-4">
            {scams.map((scam, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-4 border-b border-border bg-muted/20 px-6 py-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <scam.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base font-bold text-card-foreground">
                            {scam.title}
                          </h2>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getSeverityColor(scam.severity)}`}
                          >
                            {scam.severity}
                          </Badge>
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {scam.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                      {/* Example */}
                      <div className="flex-1 border-b border-border p-6 lg:border-b-0 lg:border-r">
                        <div className="flex items-center gap-2 mb-3">
                          <CircleAlert className="h-3.5 w-3.5 text-destructive" />
                          <p className="text-xs font-bold uppercase tracking-widest text-destructive">
                            Example Message
                          </p>
                        </div>
                        <div className="rounded-lg border border-destructive/10 bg-destructive/5 p-4">
                          <p className="text-xs italic leading-relaxed text-card-foreground">
                            {scam.example}
                          </p>
                        </div>
                      </div>

                      {/* Red Flags */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldAlert className="h-3.5 w-3.5 text-safe" />
                          <p className="text-xs font-bold uppercase tracking-widest text-safe">
                            Red Flags
                          </p>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                          {scam.redFlags.map((flag) => (
                            <li
                              key={flag}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Ready to test your knowledge?
            </p>
            <h2 className="text-xl font-bold text-foreground">
              Practice spotting scam messages
            </h2>
            <Button asChild size="lg" className="mt-2 text-sm font-bold gap-2">
              <Link href="/spot-the-trap">
                Try Spot the Trap
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

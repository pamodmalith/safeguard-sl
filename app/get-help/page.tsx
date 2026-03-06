import { Metadata } from "next";

import {
  Phone,
  ShieldCheck,
  CircleAlert,
  Ban,
  Banknote,
  Camera,
  Landmark,
  Megaphone,
  Users,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const emergencyContacts = [
  {
    name: "Sri Lanka Police",
    number: "119",
    description:
      "Call the police emergency hotline to report fraud or any criminal activity.",
    available: "24/7",
  },
  {
    name: "Sri Lanka CERT|CC",
    number: "1919",
    description:
      "Sri Lanka Computer Emergency Readiness Team. Report cyber crimes, hacking, and online fraud.",
    available: "24/7",
  },
  {
    name: "Consumer Affairs Authority",
    number: "1977",
    description:
      "Report unfair trade practices, online shopping fraud, and consumer rights violations.",
    available: "Weekdays",
  },
  {
    name: "Telecom Regulatory Commission",
    number: "+94 112 689 345",
    description:
      "Report fraudulent phone numbers, spam SMS, and telecom-related scams.",
    available: "Weekdays",
  },
];

const steps = [
  {
    icon: Ban,
    title: "Do Not Respond",
    description:
      "Do not reply to the scam message, click any links, or call back any suspicious numbers. Engaging with scammers confirms that your number is active.",
  },
  {
    icon: Banknote,
    title: "Do Not Send Money",
    description:
      "Never transfer money, share OTP codes, or provide personal banking information. A legitimate organisation will never ask for these via SMS or WhatsApp.",
  },
  {
    icon: Camera,
    title: "Save the Evidence",
    description:
      "Take a screenshot of the scam message before deleting it. This evidence will be useful when making a report to the authorities.",
  },
  {
    icon: Landmark,
    title: "Contact Your Bank",
    description:
      "If you shared any banking information or made a payment, call your bank immediately. They may be able to freeze the transaction and protect your account.",
  },
  {
    icon: Megaphone,
    title: "Report to Authorities",
    description:
      "Use the emergency contacts below to report the scam. Reporting helps protect others from the same trick.",
  },
  {
    icon: Users,
    title: "Tell Your Family",
    description:
      "Warn your family and friends about the scam so they do not fall for the same trick. Scammers often target multiple people in the same community.",
  },
];

export const metadata: Metadata = {
  title: "Get Help - SafeGuard SL",
  description:
    "If you think you have been scammed or received a suspicious message, follow these steps and contact the authorities below.",
};

export default function GetHelpPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="border-b border-border bg-amber-400/5 min-h-[30vh] items-center flex">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10">
              <CircleAlert className="h-6 w-6 text-amber-400" />
            </div>
            <h1 className="text-balance text-2xl font-bold text-foreground lg:text-4xl">
              Get Help Now
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              If you think you have been scammed or received a suspicious
              message, follow these steps and contact the authorities below.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
            Step by step
          </p>
          <h2 className="mb-6 text-lg font-bold text-foreground">
            What to Do If You Have Been Scammed
          </h2>
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-border bg-card">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="border-y border-border bg-muted/30 py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <Phone className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              Emergency Contacts
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {emergencyContacts.map((contact) => (
              <Card key={contact.name} className="border-border bg-card">
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-card-foreground">
                        {contact.name}
                      </h3>
                      <Badge variant="outline" className="text-xs gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        {contact.available}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                  <a
                    href={`tel:${contact.number.replace(/\s/g, "")}`}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {contact.number}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Reminder */}
      <section className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Card className="border-green-600/20 bg-green-600/5">
            <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Remember: You Are Not Alone
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Scams can happen to anyone, regardless of age or experience.
                There is no shame in being targeted. The most important thing is
                to act quickly, report the incident, and protect yourself from
                further harm.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

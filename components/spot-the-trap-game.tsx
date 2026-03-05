"use client";

import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  AlertTriangle,
  CircleCheck,
  CircleX,
  Trophy,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface RedFlag {
  id: string;
  text: string;
  explanation: string;
}

interface Scenario {
  id: number;
  senderName: string;
  senderNumber: string;
  messageText: string;
  isScam: boolean;
  redFlags: RedFlag[];
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    senderName: "SL Post",
    senderNumber: "+94 77 123 4567",
    messageText:
      "Dear customer, your package #SL38291 could not be delivered. Pay Rs. 150 re-delivery fee within 24 hours or your package will be returned. Click here: http://sl-post-pay.xyz/fee",
    isScam: true,
    redFlags: [
      {
        id: "1a",
        text: "Unknown mobile number instead of official sender ID",
        explanation:
          "Sri Lanka Post uses official sender IDs, not personal mobile numbers.",
      },
      {
        id: "1b",
        text: "Asks for payment through a suspicious link",
        explanation:
          "Legitimate postal services never ask for payment via text message links.",
      },
      {
        id: "1c",
        text: "Creates urgency with 24-hour deadline",
        explanation:
          "Scammers pressure you to act quickly so you don't have time to think.",
      },
      {
        id: "1d",
        text: "Suspicious website URL (.xyz domain)",
        explanation:
          "Official Sri Lanka Post websites end in .lk, not .xyz or other unusual domains.",
      },
    ],
    explanation:
      "This is a classic fake delivery scam. Sri Lanka Post will never ask you to pay fees through a text message link. If you receive such a message, delete it immediately.",
  },
  {
    id: 2,
    senderName: "Dialog",
    senderNumber: "Dialog",
    messageText:
      "Dear valued customer, your Dialog bill for January is Rs. 2,340. Pay before Feb 15 to avoid late fees. Visit https://www.dialog.lk/pay or dial #678#. Thank you.",
    isScam: false,
    redFlags: [],
    explanation:
      "This is a legitimate message from Dialog. It uses an official sender ID, links to the real Dialog website (dialog.lk), and provides an alternative payment method through a standard USSD code. There is no suspicious urgency or request for personal information.",
  },
  {
    id: 3,
    senderName: "Unknown",
    senderNumber: "+94 71 987 6543",
    messageText:
      "Hi Amma, this is Kasun. I lost my phone and this is my new number. I am in trouble and need Rs. 15,000 urgently. Please send to account 8834012 at People's Bank. Don't call my old number, it's stolen. I will explain everything later.",
    isScam: true,
    redFlags: [
      {
        id: "3a",
        text: "Claims to be a family member from a new number",
        explanation:
          "Scammers pretend to be relatives to exploit your emotions and trust.",
      },
      {
        id: "3b",
        text: "Requests urgent money transfer",
        explanation:
          "Urgency is a key scam tactic. Real emergencies can wait for a phone call to verify.",
      },
      {
        id: "3c",
        text: "Asks you not to call the old number",
        explanation:
          "They don't want you to verify because the real person would deny it.",
      },
      {
        id: "3d",
        text: "Provides a bank account for direct transfer",
        explanation:
          "Sending money to an unknown account is extremely risky and hard to recover.",
      },
    ],
    explanation:
      "This is a WhatsApp impersonation scam. Always call your family member on their known number to verify before sending any money, no matter how urgent it seems.",
  },
  {
    id: 4,
    senderName: "HNB Bank",
    senderNumber: "+94 76 555 1234",
    messageText:
      "ALERT: Your HNB account has been locked due to suspicious activity. Verify your identity immediately by clicking: http://hnb-verify.com/unlock. Failure to act within 1 hour will result in permanent account closure. Reply with your NIC number to speed up the process.",
    isScam: true,
    redFlags: [
      {
        id: "4a",
        text: "Personal mobile number, not official bank sender ID",
        explanation:
          "Banks use official sender IDs or shortcodes, never personal mobile numbers.",
      },
      {
        id: "4b",
        text: "Threatens permanent account closure",
        explanation:
          "Banks never threaten to permanently close your account via a text message.",
      },
      {
        id: "4c",
        text: "Asks for NIC number via SMS",
        explanation:
          "No bank will ever ask for your NIC or personal details through a text message.",
      },
      {
        id: "4d",
        text: "Suspicious URL (hnb-verify.com, not hnb.net)",
        explanation:
          "The official HNB website is hnb.net. Scammers use similar-looking fake domains.",
      },
      {
        id: "4e",
        text: "1-hour urgency to create panic",
        explanation:
          "Extreme time pressure is designed to make you act without thinking.",
      },
    ],
    explanation:
      "This is a bank phishing scam. HNB will never send messages from personal numbers, ask for your NIC via SMS, or threaten to close your account. Always visit your bank branch directly if concerned.",
  },
  {
    id: 5,
    senderName: "Keells",
    senderNumber: "Keells",
    messageText:
      "Thank you for shopping at Keells! You earned 45 Nexus points today. Your total balance is 1,230 points. Visit www.keells.com/nexus for more details.",
    isScam: false,
    redFlags: [],
    explanation:
      "This is a legitimate loyalty programme notification from Keells. It uses an official sender ID, references a real rewards programme (Nexus), links to the official Keells website, and does not ask for any personal information or payment.",
  },
];

type GameState = "playing" | "answered" | "complete";

export function SpotTheTrapGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<
    { correct: boolean; scenarioId: number }[]
  >([]);

  const currentScenario = scenarios[currentIndex];
  const isLastScenario = currentIndex === scenarios.length - 1;
  const progressPercent =
    ((currentIndex + (gameState === "answered" ? 1 : 0)) / scenarios.length) *
    100;

  function toggleFlag(flagId: string) {
    if (gameState !== "playing") return;
    setSelectedFlags((prev) =>
      prev.includes(flagId)
        ? prev.filter((f) => f !== flagId)
        : [...prev, flagId],
    );
  }

  function submitAnswer(isScam: boolean) {
    const correct = isScam === currentScenario.isScam;
    setUserAnswer(isScam);
    setGameState("answered");
    if (correct) setScore((s) => s + 1);
    setResults((r) => [...r, { correct, scenarioId: currentScenario.id }]);
  }

  function nextScenario() {
    if (isLastScenario) {
      setGameState("complete");
    } else {
      setCurrentIndex((i) => i + 1);
      setGameState("playing");
      setSelectedFlags([]);
      setUserAnswer(null);
    }
  }

  function restartGame() {
    setCurrentIndex(0);
    setGameState("playing");
    setSelectedFlags([]);
    setUserAnswer(null);
    setScore(0);
    setResults([]);
  }

  // Complete screen
  if (gameState === "complete") {
    const perfect = score === scenarios.length;
    const good = score >= scenarios.length * 0.6;

    return (
      <Card className="border-border bg-card">
        <CardContent className="flex flex-col items-center gap-6 p-8 text-center lg:p-12">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl",
              perfect
                ? "bg-safe/10"
                : good
                  ? "bg-primary/10"
                  : "bg-destructive/10",
            )}
          >
            {perfect ? (
              <Trophy className="h-8 w-8 text-safe" />
            ) : good ? (
              <Target className="h-8 w-8 text-primary" />
            ) : (
              <AlertTriangle className="h-8 w-8 text-destructive" />
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-card-foreground">
              Simulation Complete
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              You scored{" "}
              <span className="font-bold text-primary">
                {score}/{scenarios.length}
              </span>
            </p>
          </div>

          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-2">
              {results.map((r, i) => (
                <div
                  key={r.scenarioId}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5"
                >
                  <span className="text-xs text-card-foreground">
                    {scenarios[i].senderName}
                  </span>
                  {r.correct ? (
                    <Badge className="bg-safe text-safe-foreground text-xs">
                      Correct
                    </Badge>
                  ) : (
                    <Badge className="bg-destructive text-destructive-foreground text-xs">
                      Wrong
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p
            className={cn(
              "text-xs leading-relaxed",
              perfect
                ? "text-safe"
                : good
                  ? "text-muted-foreground"
                  : "text-destructive",
            )}
          >
            {perfect
              ? "Excellent! You correctly identified every message."
              : good
                ? "Good effort! Review the scams you missed to improve."
                : "Keep learning! Visit Common Scams to study the red flags."}
          </p>

          <Button
            onClick={restartGame}
            size="lg"
            className="text-sm font-bold gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const isCorrect = userAnswer === currentScenario.isScam;

  return (
    <div className="flex flex-col gap-4">
      {/* Progress */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          Message {currentIndex + 1} of {scenarios.length}
        </span>
        <Badge variant="outline" className="text-xs font-bold">
          Score: {score}
        </Badge>
      </div>
      <Progress value={progressPercent} className="h-1.5" />

      {/* Message Card */}
      <Card className="overflow-hidden border-border bg-card">
        <CardContent className="p-0">
          <div className="flex items-center gap-3 border-b border-border px-5 py-3.5 bg-muted/30">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
              {currentScenario.senderName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-card-foreground">
                {currentScenario.senderName}
              </p>
              <p className="text-xs text-muted-foreground">
                {currentScenario.senderNumber}
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="rounded-lg bg-muted/40 p-4">
              <p className="text-sm leading-relaxed text-card-foreground">
                {currentScenario.messageText}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Red Flag Selection (scam messages only) */}
      {currentScenario.isScam && gameState === "playing" && (
        <Card className="border-border bg-card">
          <CardContent className="p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Tap the red flags you spot
            </p>
            <div className="flex flex-col gap-1.5">
              {currentScenario.redFlags.map((flag) => (
                <button
                  key={flag.id}
                  onClick={() => toggleFlag(flag.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all text-xs",
                    selectedFlags.includes(flag.id)
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                      selectedFlags.includes(flag.id)
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/30",
                    )}
                  >
                    {selectedFlags.includes(flag.id) && (
                      <CheckCircle2 className="h-2.5 w-2.5 text-primary-foreground" />
                    )}
                  </div>
                  <span>{flag.text}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Answer Buttons */}
      {gameState === "playing" && (
        <div className="grid grid-cols-2 gap-3">
          <Button
            size="lg"
            onClick={() => submitAnswer(false)}
            variant="outline"
            className="text-sm font-bold gap-2 border-safe/30 text-safe hover:bg-safe/10 hover:text-safe"
          >
            <CircleCheck className="h-4 w-4" />
            Safe
          </Button>
          <Button
            size="lg"
            onClick={() => submitAnswer(true)}
            variant="outline"
            className="text-sm font-bold gap-2 border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <CircleX className="h-4 w-4" />
            Scam
          </Button>
        </div>
      )}

      {/* Feedback */}
      {gameState === "answered" && (
        <Card
          className={cn(
            "border",
            isCorrect
              ? "border-safe/30 bg-safe/5"
              : "border-destructive/30 bg-destructive/5",
          )}
        >
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex items-center gap-2.5">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-safe" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
              <span
                className={cn(
                  "text-sm font-bold",
                  isCorrect ? "text-safe" : "text-destructive",
                )}
              >
                {isCorrect ? "Correct!" : "Not quite right."}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-card-foreground">
              {currentScenario.explanation}
            </p>

            {currentScenario.isScam && currentScenario.redFlags.length > 0 && (
              <>
                <Separator />
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Red flags explained
                  </p>
                  <div className="flex flex-col gap-2">
                    {currentScenario.redFlags.map((flag) => (
                      <div
                        key={flag.id}
                        className="flex items-start gap-2 rounded-md bg-background p-3"
                      >
                        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-destructive" />
                        <div>
                          <p className="text-xs font-bold text-card-foreground">
                            {flag.text}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {flag.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Button
              onClick={nextScenario}
              size="lg"
              className="mt-1 text-sm font-bold gap-2"
            >
              {isLastScenario ? "See Results" : "Next Message"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

"use client";

import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";
import { useMemo, useState } from "react";
import type {
  HTMLInputTypeAttribute,
  KeyboardEvent,
  ReactNode,
} from "react";

type CoachType = "" | "individual" | "firm";
type Severity = "critical" | "warning" | "opportunity";
type ScreenState = number | "loading" | "score" | "thankyou";
type SocialKey =
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube"
  | "tiktok"
  | "twitter";

type ReportIssue = {
  severity: Severity;
  title: string;
  detail: string;
};

type AiReport = {
  headline: string;
  summary: string;
  issues: ReportIssue[];
  callAngle?: string;
};

type FormState = {
  type: CoachType;

  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  countryOther: string;

  cred: string;
  credOther: string;
  firmName: string;
  jobTitle: string;
  teamSize: string;

  niche: string[];
  nicheOther: string;

  websiteStatus: string;
  websiteUrl: string;

  hasSocial: boolean | null;
  socials: SocialKey[];
  socialData: Record<SocialKey, { url: string; followers: string }>;

  challengesIndividual: string[];
  challengesFirm: string[];
  challengeOther: string;

  services: string[];
  servicesOther: string;

  budget: string;
  goal: string;
  notes: string;
  callNote: string;
};

type IconOption = {
  icon: string;
  label: string;
};

const TOTAL_QUESTIONS = 10;

const initialForm: FormState = {
  type: "",

  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  country: "",
  countryOther: "",

  cred: "",
  credOther: "",
  firmName: "",
  jobTitle: "",
  teamSize: "",

  niche: [],
  nicheOther: "",

  websiteStatus: "",
  websiteUrl: "",

  hasSocial: null,
  socials: [],
  socialData: {
    linkedin: { url: "", followers: "" },
    instagram: { url: "", followers: "" },
    facebook: { url: "", followers: "" },
    youtube: { url: "", followers: "" },
    tiktok: { url: "", followers: "" },
    twitter: { url: "", followers: "" },
  },

  challengesIndividual: [],
  challengesFirm: [],
  challengeOther: "",

  services: [],
  servicesOther: "",

  budget: "",
  goal: "",
  notes: "",
  callNote: "",
};

const typeCards = [
  {
    value: "individual" as const,
    icon: "lucide:user-round",
    title: "Individual Coach",
    description:
      "Solo practitioner — ACC, PCC, MCC or ADHD specialist growing your practice",
  },
  {
    value: "firm" as const,
    icon: "lucide:building-2",
    title: "Coaching Firm",
    description:
      "Multi-coach organisation looking for digital presence at scale",
  },
];

const individualNiche: IconOption[] = [
  { icon: "lucide:briefcase-business", label: "Executive Coaching" },
  { icon: "lucide:trending-up", label: "Career Coaching" },
  { icon: "lucide:brain", label: "ADHD Coaching" },
  { icon: "lucide:trophy", label: "Leadership Coaching" },
  { icon: "lucide:sprout", label: "Life Coaching" },
  { icon: "lucide:target", label: "Business Coaching" },
  { icon: "lucide:mic", label: "Interview Coaching" },
  { icon: "lucide:plus", label: "Other" },
];

const firmNiche: IconOption[] = [
  { icon: "lucide:briefcase-business", label: "Executive & Leadership" },
  { icon: "lucide:building-2", label: "Corporate / L&D" },
  { icon: "lucide:brain", label: "ADHD & Neurodiversity" },
  { icon: "lucide:trending-up", label: "Career Transition" },
  { icon: "lucide:globe-2", label: "International / Cross-cultural" },
  { icon: "lucide:plus", label: "Other / Mixed" },
];

const websiteOptions = [
  "No website — not online yet",
  "Yes — DIY builder (GoDaddy, Wix, Squarespace)",
  "Yes — WordPress or Webflow",
  "Yes — Custom / agency built",
  "Currently being rebuilt",
];

const socialPlatforms: { key: SocialKey; icon: string; name: string }[] = [
  { key: "linkedin", icon: "mdi:linkedin", name: "LinkedIn" },
  { key: "instagram", icon: "mdi:instagram", name: "Instagram" },
  { key: "facebook", icon: "mdi:facebook", name: "Facebook" },
  { key: "youtube", icon: "mdi:youtube", name: "YouTube" },
  { key: "tiktok", icon: "ic:baseline-tiktok", name: "TikTok" },
  { key: "twitter", icon: "prime:twitter", name: "X / Twitter" },
];

const individualChallenges: IconOption[] = [
  { icon: "lucide:search-x", label: "Invisible on Google — no one finds me" },
  {
    icon: "lucide:frown",
    label: "Website doesn't reflect my coaching quality",
  },
  {
    icon: "lucide:users",
    label: "Fully reliant on referrals — no online leads",
  },
  {
    icon: "lucide:chart-no-axes-combined",
    label: "Visitors don't book or contact me",
  },
  {
    icon: "lucide:badge-pound-sterling",
    label: "Can't justify charging higher rates",
  },
  {
    icon: "lucide:clock",
    label: "No time to manage my online presence",
  },
  { icon: "lucide:plus", label: "Other" },
];

const firmChallenges: IconOption[] = [
  { icon: "lucide:globe-2", label: "Outdated or weak firm website" },
  { icon: "lucide:users", label: "No unified brand across coaches" },
  { icon: "lucide:clipboard-list", label: "No lead generation system in place" },
  { icon: "lucide:unplug", label: "Fragmented tools that don't connect" },
  {
    icon: "lucide:building-2",
    label: "Can't compete with larger firms digitally",
  },
  { icon: "lucide:bar-chart-3", label: "No way to measure marketing ROI" },
  { icon: "lucide:plus", label: "Other" },
];

const services: IconOption[] = [
  { icon: "lucide:globe-2", label: "Website Build / Rebuild" },
  { icon: "lucide:funnel", label: "Funnel & Lead Magnets" },
  { icon: "lucide:palette", label: "Brand & Visual Identity" },
  { icon: "lucide:smartphone", label: "Social Media Setup" },
  { icon: "lucide:map-pin", label: "Google Presence / SEO" },
  { icon: "lucide:settings", label: "Booking & CRM System" },
  { icon: "lucide:plus", label: "Other" },
];

const budgetOptions = [
  "Exploring — need to see the value first",
  "Ready to invest — up to £1,500",
  "Ready to invest — £1,500–3,500",
  "Ready to invest — £3,500–7,000+",
  "Corporate budget — ROI is what matters",
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scoreColor(score: number) {
  if (score < 35) return "#c0392b";
  if (score < 55) return "#d4810a";
  if (score < 75) return "#c9900c";
  return "#1a7a4a";
}

function scoreLabel(score: number) {
  if (score < 25) return "Critical";
  if (score < 45) return "Needs Work";
  if (score < 65) return "Developing";
  if (score < 80) return "Good";
  return "Strong";
}

function calculateScore(form: FormState) {
  let score = 0;

  if (form.websiteStatus.includes("Custom") || form.websiteStatus.includes("agency")) {
    score += 20;
  } else if (
    form.websiteStatus.includes("WordPress") ||
    form.websiteStatus.includes("Webflow")
  ) {
    score += 15;
  } else if (form.websiteStatus.includes("DIY")) {
    score += 8;
  } else if (form.websiteStatus.includes("rebuilt")) {
    score += 5;
  }

  score += form.hasSocial ? Math.min(12, form.socials.length * 4) : 0;

  if (form.budget.includes("Corporate")) score += 16;
  else if (form.budget.includes("3,500")) score += 14;
  else if (form.budget.includes("£1,500–3,500")) score += 12;
  else if (form.budget.includes("up to £1,500")) score += 8;
  else if (form.budget.includes("Exploring")) score += 3;

  score += form.challengesIndividual.length || form.challengesFirm.length ? 8 : 4;

  score += form.services.length > 2 ? 8 : form.services.length > 0 ? 4 : 0;

  return Math.min(score, 100);
}

function calculateDimensions(form: FormState) {
  const websiteStatus = form.websiteStatus;
  const websiteScore =
    websiteStatus.includes("Custom") || websiteStatus.includes("agency")
      ? 20
      : websiteStatus.includes("WordPress") || websiteStatus.includes("Webflow")
        ? 15
        : websiteStatus.includes("DIY")
          ? 8
          : websiteStatus.includes("rebuilt")
            ? 5
            : 0;

  const investmentScore: Record<string, number> = {
    "Corporate budget — ROI is what matters": 10,
    "Ready to invest — £3,500–7,000+": 10,
    "Ready to invest — £1,500–3,500": 8,
    "Ready to invest — up to £1,500": 5,
    "Exploring — need to see the value first": 2,
  };

  return [
    { label: "Website", score: websiteScore, max: 20 },
    {
      label: "Social Media",
      score: form.hasSocial ? Math.min(12, form.socials.length * 4) : 0,
      max: 12,
    },
    {
      label: "Lead System",
      score: Math.min(10, form.services.length * 2),
      max: 10,
    },
    {
      label: "Investment",
      score: investmentScore[form.budget] || 0,
      max: 10,
    },
  ];
}

function buildFallbackReport(form: FormState, score: number): AiReport {
  const hasWebsite =
    form.websiteStatus && !form.websiteStatus.startsWith("No website");

  const hasLeadSystem =
    form.services.some((item) => item.includes("Funnel")) ||
    form.services.some((item) => item.includes("CRM"));

  return {
    headline: `${form.firstName || "Your"} Digital Audit`,
    summary: hasWebsite
      ? "Your digital presence has a foundation, but the conversion journey needs tightening. The biggest lever is turning visibility into booked calls with clearer positioning, proof, and follow-up."
      : "You have a clear opportunity to build your digital presence from the ground up. The biggest lever is creating a trustworthy website and lead journey that turns interest into booked calls.",
    issues: [
      {
        severity: "critical",
        title: hasLeadSystem ? "Lead flow needs clarity" : "No consistent lead flow",
        detail: hasLeadSystem
          ? "Your lead system exists as an idea, but the user journey still needs to be connected from visit to booked call."
          : "Without a simple funnel or booking journey, warm visitors can leave without taking action.",
      },
      {
        severity: "warning",
        title: form.hasSocial ? "Visibility needs consistency" : "Social presence is weak",
        detail: form.hasSocial
          ? "Your social presence can support trust, but it needs consistency and stronger conversion links."
          : "Low social activity reduces discoverability and makes it harder for new clients to build trust quickly.",
      },
      {
        severity: "opportunity",
        title: "Niche can sell better",
        detail:
          score >= 65
            ? "Your profile has promising signals; stronger messaging can help position you for higher-value clients."
            : "Your expertise can attract better-fit clients when your website, offer, proof, and booking path work together.",
      },
    ],
  };
}

function buildSlots() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = [
    "9:00am",
    "10:30am",
    "12:00pm",
    "2:00pm",
    "3:30pm",
    "5:00pm",
    "6:30pm",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slots: string[] = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);

  for (let index = 0; slots.length < 9; index++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + index);

    if (day.getDay() === 0 || day.getDay() === 6) continue;

    slots.push(
      `${days[day.getDay() - 1]} ${day.getDate()} ${months[day.getMonth()]
      }, ${times[(slots.length + index) % times.length]}`,
    );
  }

  return slots;
}

export default function SalesContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState<FormState>(initialForm);
  const [screen, setScreen] = useState<ScreenState>(1);
  const [loadingMessage, setLoadingMessage] = useState(
    "Analysing your coaching business profile...",
  );
  const [report, setReport] = useState<{
    score: number;
    label: string;
    ai: AiReport;
  } | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [slotPicked, setSlotPicked] = useState("");

  const activeStep = typeof screen === "number" ? screen : TOTAL_QUESTIONS;
  const progress =
    screen === "thankyou" || screen === "score"
      ? 100
      : Math.round(((activeStep - 1) / TOTAL_QUESTIONS) * 100);

  const dimensions = useMemo(() => calculateDimensions(form), [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  function updateSocialData(
    platform: SocialKey,
    field: "url" | "followers",
    value: string,
  ) {
    setForm((previous) => ({
      ...previous,
      socialData: {
        ...previous.socialData,
        [platform]: {
          ...previous.socialData[platform],
          [field]: value,
        },
      },
    }));
  }

  function toggleArray(
    key:
      | "niche"
      | "services"
      | "challengesIndividual"
      | "challengesFirm"
      | "socials",
    value: string,
  ) {
    setForm((previous) => {
      const current = previous[key] as string[];
      const exists = current.includes(value);
      const next = exists
        ? current.filter((item) => item !== value)
        : [...current, value];

      return {
        ...previous,
        [key]: next,
      };
    });
  }

  function toggleMax(
    key: "challengesIndividual" | "challengesFirm",
    value: string,
    max: number,
  ) {
    setForm((previous) => {
      const current = previous[key];
      const exists = current.includes(value);

      if (exists) {
        return {
          ...previous,
          [key]: current.filter((item) => item !== value),
        };
      }

      const next = [...current, value].slice(-max);

      return {
        ...previous,
        [key]: next,
      };
    });
  }

  function validateStep(step: number) {
    if (step === 1 && !form.type) {
      enqueueSnackbar("Please choose Individual Coach or Coaching Firm.", {
        variant: "error",
      });
      return false;
    }

    if (step === 2) {
      if (!form.firstName.trim()) {
        enqueueSnackbar("Please enter your first name.", {
          variant: "error",
        });
        return false;
      }

      if (!form.lastName.trim()) {
        enqueueSnackbar("Please enter your last name.", {
          variant: "error",
        });
        return false;
      }

      if (!form.email.trim() || !form.email.includes("@")) {
        enqueueSnackbar("Please enter a valid email address.", {
          variant: "error",
        });
        return false;
      }

      if (form.type === "firm" && !form.firmName.trim()) {
        enqueueSnackbar("Please enter your firm name.", {
          variant: "error",
        });
        return false;
      }
    }

    return true;
  }

  function goNext() {
    if (typeof screen !== "number") return;
    if (!validateStep(screen)) return;

    if (screen < TOTAL_QUESTIONS) {
      setScreen(screen + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goPrevious() {
    if (typeof screen !== "number") return;

    if (screen > 1) {
      setScreen(screen - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      goNext();
    }
  }

  async function runReport() {
    setScreen("loading");
    setLoadingMessage("Analysing your profile...");

    const score = calculateScore(form);
    const label = scoreLabel(score);
    let ai = buildFallbackReport(form, score);

    // try {
    //   setLoadingMessage("Calculating digital health score...");

    //   const response = await fetch("/api/coach-report", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ form, score, label }),
    //   });

    //   if (response.ok) {
    //     const data = (await response.json()) as { ai?: AiReport };
    //     if (data.ai?.headline && Array.isArray(data.ai.issues)) {
    //       ai = data.ai;
    //     }
    //   }
    // } catch {
    //   ai = buildFallbackReport(form, score);
    // }

    setLoadingMessage("Preparing recommendations...");
    setReport({ score, label, ai });
    setSlots(buildSlots());
    setScreen("score");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function confirmBooking() {
    if (!slotPicked) {
      enqueueSnackbar("Please pick a call time to confirm your booking.", {
        variant: "error",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setScreen("thankyou");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="relative min-h-screen bg-cream text-ink">
      <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-[#e8e8e8]">
        <div
          className="h-full bg-primary-300 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto w-full max-w-[448px] px-4 pb-32 pt-9 sm:px-0">
        {screen === 1 ? (
          <QuestionShell
            number={1}
            title="Who are you?"
            hint="This helps us ask the right questions"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {typeCards.map((card) => (
                <button
                  key={card.value}
                  type="button"
                  onClick={() => update("type", card.value)}
                  className={cn(
                    "rounded-[12px] border-2 border-[#e0e0e0] bg-white p-5 text-left transition-all duration-200 hover:border-[#b8b8b8]",
                    form.type === card.value && "border-ink bg-[#fafafa]",
                  )}
                >
                  <Icon icon={card.icon} className="mb-3 h-7 w-7 text-ink" />
                  <div className="text-[15px] font-black text-ink">
                    {card.title}
                  </div>
                  <p className="mt-2 text-[12px] font-medium leading-5 text-muted">
                    {card.description}
                  </p>
                </button>
              ))}
            </div>

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 2 ? (
          <QuestionShell
            number={2}
            title="What is the best way to contact you?"
            hint="Share your details so our team can reach you easily."
            required
          >
            <TextInput
              label="First name"
              value={form.firstName}
              placeholder="Jane"
              required
              onChange={(value) => update("firstName", value)}
              onKeyDown={handleEnter}
            />

            <TextInput
              label="Last name"
              value={form.lastName}
              placeholder="Smith"
              required
              onChange={(value) => update("lastName", value)}
              onKeyDown={handleEnter}
            />

            <TextInput
              label="Phone number"
              type="tel"
              value={form.phone}
              placeholder="+44 7..."
              onChange={(value) => update("phone", value)}
              onKeyDown={handleEnter}
            />

            <TextInput
              label="Email"
              type="email"
              value={form.email}
              placeholder="name@example.com"
              required
              onChange={(value) => update("email", value)}
              onKeyDown={handleEnter}
            />

            {form.type === "firm" ? (
              <>
                <TextInput
                  label="Firm / company name"
                  value={form.firmName}
                  placeholder="Apex Coaching Group"
                  required
                  onChange={(value) => update("firmName", value)}
                  onKeyDown={handleEnter}
                />

                <TextInput
                  label="Your job title"
                  value={form.jobTitle}
                  placeholder="Managing Director"
                  onChange={(value) => update("jobTitle", value)}
                  onKeyDown={handleEnter}
                />

                <SelectInput
                  label="Number of coaches"
                  value={form.teamSize}
                  onChange={(value) => update("teamSize", value)}
                  options={[
                    "2–5 coaches",
                    "6–15 coaches",
                    "16–50 coaches",
                    "50+ coaches",
                  ]}
                />
              </>
            ) : (
              <>
                <SelectInput
                  label="ICF Credential"
                  value={form.cred}
                  onChange={(value) => {
                    update("cred", value);

                    if (value !== "Other") {
                      update("credOther", "");
                    }
                  }}
                  options={[
                    "ACC — Associate Certified",
                    "PCC — Professional Certified",
                    "MCC — Master Certified",
                    "ADHD Specialist (PAAC/ACO)",
                    "In training / not yet credentialed",
                    "Other",
                  ]}
                />
                {form.cred === "Other" && (
                  <TextInput
                    label="Please specify your credential"
                    value={form.credOther}
                    placeholder="Enter your credential"
                    required
                    onChange={(value) => update("credOther", value)}
                    onKeyDown={handleEnter}
                  />
                )}
              </>
            )}

            <>
              <SelectInput
                label="Country"
                value={form.country}
                onChange={(value) => {
                  update("country", value);

                  if (value !== "Other") {
                    update("countryOther", "");
                  }
                }}
                options={[
                  "United Kingdom",
                  "United States",
                  "Canada",
                  "Australia",
                  "Ireland",
                  "Germany",
                  "Netherlands",
                  "UAE / Middle East",
                  "Other",
                ]}
              />

              {form.country === "Other" && (
                <TextInput
                  label="Please specify your country"
                  value={form.countryOther}
                  placeholder="Enter your country"
                  required
                  onChange={(value) => update("countryOther", value)}
                  onKeyDown={handleEnter}
                />
              )}
            </>

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 3 ? (
          <QuestionShell
            number={3}
            title={
              form.type === "firm"
                ? "What are your firm's coaching specialisms?"
                : "What is your coaching niche?"
            }
            hint="Choose all that apply"
          >
            {/* <div className="grid gap-3 sm:grid-cols-2">
              {(form.type === "firm" ? firmNiche : individualNiche).map((item) => (
                <CheckCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  checked={form.niche.includes(item.label)}
                  onClick={() => toggleArray("niche", item.label)}
                />
              ))}
            </div> */}
            <div className="grid gap-3 sm:grid-cols-2">
              {(form.type === "firm" ? firmNiche : individualNiche).map((item, index) => (
                <CheckCard
                  key={item.label}
                  letter={String.fromCharCode(65 + index)}
                  icon={item.icon}
                  label={item.label}
                  checked={form.niche.includes(item.label)}
                  onClick={() => toggleArray("niche", item.label)}
                />
              ))}
            </div>

            {form.niche.some((item) => item.includes("Other")) ? (
              <TextInput
                label="Other niche"
                value={form.nicheOther}
                placeholder={
                  form.type === "firm"
                    ? "Describe your firm's specialisms..."
                    : "Describe your coaching niche..."
                }
                onChange={(value) => update("nicheOther", value)}
                onKeyDown={handleEnter}
              />
            ) : null}

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 4 ? (
          <QuestionShell number={4} title="Do you have a website?">
            <div className="space-y-3">
              {websiteOptions.map((item, index) => (
                <RadioCard
                  key={item}
                  letter={String.fromCharCode(65 + index)}
                  label={item}
                  selected={form.websiteStatus === item}
                  onClick={() => update("websiteStatus", item)}
                />
              ))}
            </div>

            {form.websiteStatus &&
              !form.websiteStatus.startsWith("No website") ? (
              <TextInput
                label="Website URL"
                type="url"
                value={form.websiteUrl}
                placeholder="https://yourwebsite.com"
                onChange={(value) => update("websiteUrl", value)}
                onKeyDown={handleEnter}
              />
            ) : null}

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 5 ? (
          <QuestionShell
            number={5}
            title="Are you active on social media?"
            hint="Active = posting at least once a month"
          >
            <div className="space-y-3">
              <RadioCard
                letter="A"
                label="Yes — active on at least one platform"
                selected={form.hasSocial === true}
                onClick={() => update("hasSocial", true)}
              />
              <RadioCard
                letter="B"
                label="No — not active on social media"
                selected={form.hasSocial === false}
                onClick={() => {
                  update("hasSocial", false);
                  update("socials", []);
                }}
              />
            </div>

            {form.hasSocial ? (
              <>
                <div className="mt-6 text-[13px] font-bold text-muted">
                  Which platforms? Select all that apply.
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {socialPlatforms.map((platform) => (
                    <button
                      key={platform.key}
                      type="button"
                      onClick={() => toggleArray("socials", platform.key)}
                      className={cn(
                        "rounded-[8px] border border-[#dddddd] bg-white px-3 py-4 text-center transition-all duration-200 hover:border-[#aaaaaa]",
                        form.socials.includes(platform.key) &&
                        "border-ink bg-[#fafafa]",
                      )}
                    >
                      <Icon
                        icon={platform.icon}
                        className="mx-auto h-6 w-6 text-ink"
                      />
                      <span className="mt-2 block text-[12px] font-bold text-muted">
                        {platform.name}
                      </span>
                    </button>
                  ))}
                </div>

                {form.socials.length ? (
                  <div className="mt-5 space-y-3 rounded-[10px] bg-[#f7f7f7] p-4">
                    <p className="text-[12px] font-medium leading-5 text-muted">
                      Share your profile links and approximate following. Both
                      are optional but helpful.
                    </p>

                    {form.socials.map((platform) => {
                      const item = socialPlatforms.find(
                        (social) => social.key === platform,
                      );

                      return (
                        <div
                          key={platform}
                          className="grid gap-2 border-b border-[#eeeeee] pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[120px_1fr_1fr] sm:items-center"
                        >
                          <span className="flex items-center gap-2 text-[12px] font-black text-ink">
                            {item ? (
                              <Icon icon={item.icon} className="h-4 w-4" />
                            ) : null}
                            {item?.name}
                          </span>
                          <input
                            className="underline-input !py-2"
                            type="url"
                            placeholder="Profile URL"
                            value={form.socialData[platform].url}
                            onChange={(event) =>
                              updateSocialData(
                                platform,
                                "url",
                                event.target.value,
                              )
                            }
                          />
                          <input
                            className="underline-input !py-2"
                            type="text"
                            placeholder="Followers e.g. 1,200"
                            value={form.socialData[platform].followers}
                            onChange={(event) =>
                              updateSocialData(
                                platform,
                                "followers",
                                event.target.value,
                              )
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </>
            ) : null}

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 6 ? (
          <QuestionShell
            number={6}
            title="What is your biggest challenge right now?"
            hint="Pick up to 3"
          >
            {/* <div className="space-y-3">
              {(form.type === "firm" ? firmChallenges : individualChallenges).map(
                (item) => {
                  const key =
                    form.type === "firm"
                      ? "challengesFirm"
                      : "challengesIndividual";
                  const selected = form[key].includes(item.label);

                  return (
                    <CheckCard
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      checked={selected}
                      onClick={() => toggleMax(key, item.label, 3)}
                    />
                  );
                },
              )}
            </div> */}
            <div className="space-y-3">
              {(form.type === "firm" ? firmChallenges : individualChallenges).map(
                (item, index) => {
                  const key =
                    form.type === "firm"
                      ? "challengesFirm"
                      : "challengesIndividual";

                  const selected = form[key].includes(item.label);

                  return (
                    <CheckCard
                      key={item.label}
                      letter={String.fromCharCode(65 + index)}
                      icon={item.icon}
                      label={item.label}
                      checked={selected}
                      onClick={() => toggleMax(key, item.label, 3)}
                    />
                  );
                },
              )}
            </div>

            {(form.type === "firm"
              ? form.challengesFirm
              : form.challengesIndividual
            ).some((item) => item.includes("Other")) ? (
              <TextInput
                label="Other challenge"
                value={form.challengeOther}
                placeholder="Describe your challenge..."
                onChange={(value) => update("challengeOther", value)}
                onKeyDown={handleEnter}
              />
            ) : null}

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 7 ? (
          <QuestionShell
            number={7}
            title="What are you looking for help with?"
            hint="Select all that apply"
          >
            {/* <div className="grid gap-3 sm:grid-cols-2">
              {services.map((item) => (
                <CheckCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  checked={form.services.includes(item.label)}
                  onClick={() => toggleArray("services", item.label)}
                />
              ))}
            </div> */}
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((item, index) => (
                <CheckCard
                  key={item.label}
                  letter={String.fromCharCode(65 + index)}
                  icon={item.icon}
                  label={item.label}
                  checked={form.services.includes(item.label)}
                  onClick={() => toggleArray("services", item.label)}
                />
              ))}
            </div>

            {form.services.some((item) => item.includes("Other")) ? (
              <TextInput
                label="Other service"
                value={form.servicesOther}
                placeholder="What else are you looking for help with?"
                onChange={(value) => update("servicesOther", value)}
                onKeyDown={handleEnter}
              />
            ) : null}

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 8 ? (
          <QuestionShell number={8} title="What is your investment readiness?">
            <div className="space-y-3">
              {budgetOptions.map((item, index) => (
                <RadioCard
                  key={item}
                  letter={String.fromCharCode(65 + index)}
                  label={item}
                  selected={form.budget === item}
                  onClick={() => update("budget", item)}
                />
              ))}
            </div>

            <FormActions onNext={goNext} />
          </QuestionShell>
        ) : null}

        {screen === 9 ? (
          <QuestionShell
            number={9}
            title="What does success look like for you in 6 months?"
            hint='E.g. "5 inbound enquiries/month" or "Fully booked at £400/session"'
          >
            <TextareaInput
              label="Goal"
              value={form.goal}
              placeholder="Describe your goal..."
              onChange={(value) => update("goal", value)}
            />

            <FormActions onNext={goNext} showSkip />
          </QuestionShell>
        ) : null}

        {screen === 10 ? (
          <QuestionShell
            number={10}
            title="Anything else you'd like us to know?"
            hint="Previous experiences, specific concerns, or questions"
          >
            <TextareaInput
              label="Notes"
              value={form.notes}
              placeholder="Optional..."
              onChange={(value) => update("notes", value)}
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={runReport}
                className="btn-base btn-size-lg !w-auto !rounded-[6px] !bg-primary-300 !px-5 !py-3 !text-[13px] !font-black !text-ink !shadow-none hover:!bg-primary-500"
              >
                Submit
                <Icon icon="lucide:arrow-right" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={runReport}
                className="text-[13px] font-semibold text-muted underline transition hover:text-ink"
              >
                Skip
              </button>
            </div>
          </QuestionShell>
        ) : null}

        {screen === "loading" ? (
          <QuestionShell title="">
            <div className="py-12 text-center">
              <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#eeeeee] border-t-primary-300" />
              <div className="text-[20px] font-black text-ink">
                Analyzing Your Profile...
              </div>
              <p className="mt-3 text-[14px] leading-6 text-muted">
                {loadingMessage}
              </p>
            </div>
          </QuestionShell>
        ) : null}

        {screen === "score" && report ? (
          <QuestionShell title="Book your free 30-min strategy call">
            {/* <div className="rounded-[14px] bg-ink p-6 text-white">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-primary-300">
                  <span className="text-[30px] font-black text-primary-300">
                    {report.score}
                  </span>
                  <span className="text-[12px] font-bold text-white/45">
                    /100
                  </span>
                </div>

                <div>
                  <span className="mb-3 inline-flex rounded-full bg-primary-300 px-3 py-1 text-[11px] font-black uppercase text-ink">
                    {report.label}
                  </span>
                  <h3 className="text-[20px] font-black leading-tight text-white">
                    {report.ai.headline}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">
                    {report.ai.summary}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {dimensions.map((dimension) => {
                  const percent = Math.round(
                    (dimension.score / dimension.max) * 100,
                  );
                  const color = scoreColor(percent);

                  return (
                    <div
                      key={dimension.label}
                      className="grid grid-cols-[95px_1fr_48px] items-center gap-3"
                    >
                      <span className="text-right text-[12px] font-semibold text-white/45">
                        {dimension.label}
                      </span>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${percent}%`, backgroundColor: color }}
                        />
                      </div>
                      <span
                        className="text-right text-[12px] font-black"
                        style={{ color }}
                      >
                        {dimension.score}/{dimension.max}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {/* <div className="mt-5 space-y-3">
              {report.ai.issues.map((issue) => (
                <IssueCard key={`${issue.severity}-${issue.title}`} issue={issue} />
              ))}
            </div> */}

            <div className="mt-0">
              {/* <div className="flex items-center gap-2 text-[16px] font-black text-ink">
                <Icon icon="lucide:phone-call" className="h-5 w-5" />
                Book your free 30-min strategy call
              </div> */}
              <p className="mt-0 text-[13px] leading-5 text-muted">
                Pick a slot — instant Zoom link sent to your email.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSlotPicked(slot)}
                    className={cn(
                      "rounded-[8px] border border-[#dddddd] bg-white px-3 py-3 text-center text-[13px] font-black text-muted transition-all duration-200 hover:border-ink hover:text-ink",
                      slotPicked === slot && "border-ink bg-primary-300 text-ink",
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              {slotPicked ? (
                <div className="mt-4 rounded-[8px] border border-primary-500 bg-primary-50 px-4 py-3 text-center text-[13px] font-semibold text-primary-800">
                  <Icon icon="lucide:check-circle" className="mr-1 inline h-4 w-4" />
                  <strong>{slotPicked}</strong> — confirm below
                </div>
              ) : null}

              <TextareaInput
                label="Note for your call"
                value={form.callNote}
                placeholder="Anything specific to cover..."
                onChange={(value) => update("callNote", value)}
              />

              <button
                type="button"
                onClick={confirmBooking}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-[6px] bg-ink px-5 py-3 text-[13px] font-black text-primary-300 transition hover:bg-secondary-700"
              >
                <Icon icon="lucide:check" className="h-4 w-4" />
                Confirm Booking
              </button>
            </div>
          </QuestionShell>
        ) : null}

        {screen === "thankyou" ? (
          <QuestionShell title="">
            <div className="py-4 text-center">
              <Icon
                icon="lucide:party-popper"
                className="mx-auto mb-4 h-12 w-12 text-primary-700"
              />
              <h2 className="text-[22px] font-black text-ink">
                You&apos;re booked in, {form.firstName || "there"}!
              </h2>
              <p className="mt-2 text-[14px] leading-6 text-muted">
                Check your inbox for your confirmation and Zoom link.
              </p>

              <div className="mt-7 rounded-[10px] bg-[#f7f7f7] p-5 text-left">
                <h4 className="mb-2 text-[11px] font-black uppercase tracking-[0.08em] text-muted">
                  Booking Details
                </h4>
                <InfoRow label="Name" value={`${form.firstName} ${form.lastName}`} />
                <InfoRow label="Email" value={form.email} />
                {form.type === "firm" && form.firmName ? (
                  <InfoRow label="Firm" value={form.firmName} />
                ) : null}
                <InfoRow label="Call time" value={slotPicked} />
                <InfoRow label="Format" value="Zoom · 30 minutes" />
              </div>

              <div className="mt-4 rounded-[10px] bg-[#f7f7f7] p-5 text-left">
                <h4 className="mb-2 text-[11px] font-black uppercase tracking-[0.08em] text-muted">
                  What Happens Next
                </h4>
                <NextStep
                  number={1}
                  text={`Confirmation & Zoom link sent to ${form.email || "your inbox"}`}
                />
                <NextStep
                  number={2}
                  text="We review your audit before the call — come prepared to talk goals."
                />
                <NextStep
                  number={3}
                  text="30-min call: score walkthrough, specific fixes, clear action plan."
                />
                <NextStep
                  number={4}
                  text="Written report within 24 hours — yours to keep, no obligation."
                />
              </div>
            </div>
          </QuestionShell>
        ) : null}
      </div>

      {typeof screen === "number" ? (
        <div className="fixed bottom-5 right-5 z-40 flex gap-2">
          <button
            type="button"
            onClick={goPrevious}
            disabled={screen <= 1}
            className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-primary-300 text-ink transition-all duration-200 hover:bg-primary-500 disabled:cursor-not-allowed disabled:bg-[#e8e8e8] disabled:text-muted"
            aria-label="Previous question"
          >
            <Icon icon="lucide:chevron-up" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={screen >= TOTAL_QUESTIONS}
            className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-primary-300 text-ink transition-all duration-200 hover:bg-primary-500 disabled:cursor-not-allowed disabled:bg-[#e8e8e8] disabled:text-muted"
            aria-label="Next question"
          >
            <Icon icon="lucide:chevron-down" className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

function QuestionShell({
  number,
  title,
  hint,
  required,
  children,
}: {
  number?: number | string;
  title: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="animate-[fadeUp_0.25s_ease]">
      {title ? (
        <div className="mb-7">
          <h1 className="text-[23px] font-black leading-[1.2] tracking-[-0.02em] text-black">
            {number ? (
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-black align-middle text-[12px] font-black text-white">
                {number}
              </span>
            ) : null}
            {title}
            {required ? <span className="text-red-500"> *</span> : null}
          </h1>
          {hint ? (
            <p className="mt-2 text-[12px] font-medium leading-5 text-muted">
              {hint}
            </p>
          ) : null}
        </div>
      ) : null}

      {children}
    </div>
  );
}

function FormActions({
  onNext,
  showSkip = false,
}: {
  onNext: () => void;
  showSkip?: boolean;
}) {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={onNext}
        className="inline-flex w-fit items-center justify-center gap-2 rounded-[6px] bg-primary-300 px-5 py-3 text-[13px] font-black text-ink transition hover:bg-primary-500"
      >
        OK
        <span className="border-l border-ink/20 pl-2 text-[11px] font-medium opacity-60">
          press Enter ↵
        </span>
      </button>

      {showSkip ? (
        <button
          type="button"
          onClick={onNext}
          className="text-[13px] font-semibold text-muted underline transition hover:text-ink"
        >
          Skip
        </button>
      ) : null}
    </div>
  );
}

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.12em] text-muted">
      {label}
      {required ? <span> *</span> : null}
    </span>
  );
}

function TextInput({
  label,
  value,
  placeholder,
  type = "text",
  required = false,
  onChange,
  onKeyDown,
}: {
  label: string;
  value: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  onChange: (value: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="mt-5 block w-full">
      <FieldLabel label={label} required={required} />
      <input
        className="underline-input"
        type={type}
        value={value}
        required={required}
        aria-required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
      />
    </label>
  );
}

function SelectInput({
  label,
  value,
  options,
  required = false,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-5 block w-full">
      <FieldLabel label={label} required={required} />
      <select
        className="underline-input cursor-pointer"
        value={value}
        required={required}
        aria-required={required}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaInput({
  label,
  value,
  placeholder,
  required = false,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-5 block w-full">
      <FieldLabel label={label} required={required} />
      <textarea
        className="min-h-24 w-full resize-none rounded-[8px] border border-[#dddddd] bg-transparent px-3 py-3 text-[14px] font-medium text-ink outline-none placeholder:text-[#c8cdd7] transition focus:border-ink"
        rows={3}
        value={value}
        required={required}
        aria-required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function RadioCard({
  letter,
  label,
  selected,
  onClick,
}: {
  letter: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-[8px] border border-[#dddddd] bg-white px-4 py-3 text-left text-[14px] font-semibold text-ink transition-all duration-200 hover:border-[#aaaaaa] hover:bg-[#fafafa]",
        selected && "border-ink bg-[#fafafa]",
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] border border-[#cccccc] text-[12px] font-black text-muted",
          selected && "border-ink bg-primary-300 text-ink",
        )}
      >
        {letter}
      </span>
      <span>{label}</span>
    </button>
  );
}

// function CheckCard({
//   icon,
//   label,
//   checked,
//   onClick,
// }: {
//   icon?: string;
//   label: string;
//   checked: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={cn(
//         "flex w-full items-center gap-3 rounded-[8px] border border-[#dddddd] bg-white px-4 py-3 text-left text-[14px] font-semibold text-ink transition-all duration-200 hover:border-[#aaaaaa] hover:bg-[#fafafa]",
//         checked && "border-ink bg-[#fafafa]",
//       )}
//     >
//       <span
//         className={cn(
//           "flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-[#cccccc] text-[11px] font-black text-ink",
//           checked && "border-ink bg-primary-300",
//         )}
//       >
//         {checked ? <Icon icon="lucide:check" className="h-3.5 w-3.5" /> : null}
//       </span>

//       {icon ? <Icon icon={icon} className="h-4.5 w-4.5 shrink-0 text-ink" /> : null}

//       <span>{label}</span>
//     </button>
//   );
// }

function CheckCard({
  letter,
  icon,
  label,
  checked,
  onClick,
}: {
  letter: string;
  icon?: string;
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-[8px] border border-[#dddddd] bg-white px-4 py-3 text-left text-[14px] font-semibold text-ink transition-all duration-200 hover:border-[#aaaaaa] hover:bg-[#fafafa]",
        checked && "border-ink bg-[#fafafa]",
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] border border-[#cccccc] text-[12px] font-black text-muted",
          checked && "border-ink bg-primary-300 text-ink",
        )}
      >
        {letter}
      </span>

      {icon ? (
        <Icon icon={icon} className="h-4.5 w-4.5 shrink-0 text-ink" />
      ) : null}

      <span>{label}</span>
    </button>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-[#eeeeee] py-2 text-[13px] last:border-b-0">
      <span className="w-24 shrink-0 font-semibold text-muted">{label}</span>
      <span className="font-black text-ink">{value || "–"}</span>
    </div>
  );
}

function NextStep({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex gap-3 border-b border-[#eeeeee] py-3 text-[13px] leading-6 text-muted last:border-b-0">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-300 text-[11px] font-black text-ink">
        {number}
      </span>
      <span>{text}</span>
    </div>
  );
}
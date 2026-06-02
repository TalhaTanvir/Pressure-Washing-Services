import Image from "next/image";
import { CheckCircle2, Droplets, Home, ShieldCheck, Sparkles, Store, TimerReset } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";

const services = [
  {
    title: "House Washing",
    description: "Soft-wash safe exterior cleaning for siding, brick, stucco, and painted surfaces.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Driveways & Sidewalks",
    description: "Remove tire marks, oil spots, mold, and grime to restore bright curb appeal.",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Commercial Properties",
    description: "Flexible scheduling for storefronts, parking areas, and HOA community spaces.",
    icon: Store,
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/buildings-1868728_1280.jpg"
  }
];

const faqs = [
  {
    q: "How quickly can you schedule a job?",
    a: "Most residential jobs are booked within 48-72 hours, based on weather and location."
  },
  {
    q: "Are your cleaning solutions safe for pets and plants?",
    a: "Yes. We use biodegradable, eco-conscious detergents and pre-rinse/protect nearby landscaping."
  },
  {
    q: "Do you offer satisfaction guarantees?",
    a: "Absolutely. If any cleaned area needs a touch-up, we return and fix it quickly at no extra charge."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <Droplets className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">PrimeWash</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQs
            </a>
          </nav>
          <Button variant="outline" size="sm">
            Call (555) 123-4567
          </Button>
        </div>
      </header>

      <HeroSection />

      <section id="services" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Tailored Exterior Cleaning Solutions</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <div className="relative h-44 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="mb-3 w-fit rounded-md bg-primary/10 p-2 text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="overflow-hidden rounded-2xl border bg-card">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80"
                alt="Pressure washing driveway"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Professional Standard</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Modern Equipment, Consistent Results</h3>
              <p className="mt-4 text-muted-foreground">
                Every project follows a surface-safe cleaning process with quality checks before completion, so your
                property looks sharp without damage risk.
              </p>
              <Button className="mt-6 w-fit">Request Site Visit</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <MiniValue
            title="Safe Cleaning Process"
            description="Surface-specific techniques to avoid etching, peeling, or water intrusion."
            icon={ShieldCheck}
          />
          <MiniValue
            title="Consistent Results"
            description="Quality checklist and before/after verification on every project."
            icon={CheckCircle2}
          />
          <MiniValue
            title="Fast Turnaround"
            description="Reliable crews that show up on time and finish efficiently."
            icon={TimerReset}
          />
        </div>
      </section>

      <section id="faq" className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQs</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Questions Homeowners Ask Most</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Everything you need to know before scheduling your next pressure washing appointment.
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center rounded-2xl bg-secondary px-8 py-14 text-center text-secondary-foreground">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight">Ready for a Cleaner, Brighter Property?</h2>
          <p className="mt-3 max-w-2xl text-secondary-foreground/80">
            Get your free quote today and see why homeowners and businesses trust PrimeWash for dependable exterior
            cleaning.
          </p>
          <Button className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90">Schedule My Estimate</Button>
        </div>
      </section>

      <footer className="border-t border-border/70 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} PrimeWash Services. All rights reserved.</p>
          <p>Licensed • Insured • Locally Owned</p>
        </div>
      </footer>
    </main>
  );
}

function MiniValue({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="bg-card/90">
      <CardHeader>
        <div className="mb-3 w-fit rounded-md bg-accent/20 p-2 text-accent-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

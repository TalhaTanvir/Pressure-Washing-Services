"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" }
  }
};

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-10 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="w-fit">
              Rated 4.9/5 by 600+ homeowners
            </Badge>
          </motion.div>

          <motion.div className="space-y-5" variants={fadeUp}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Professional Pressure Washing That Makes Your Property Look New Again
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Transform siding, driveways, patios, and commercial exteriors with fast, eco-safe, damage-free cleaning
              from trained local technicians.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
            <Button size="lg">Get Free Estimate</Button>
            <Button size="lg" variant="secondary">
              View Services
            </Button>
          </motion.div>

          <motion.div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3" variants={container}>
            <Stat label="Avg. Response" value="< 15 min" />
            <Stat label="Warranty" value="14 Days" />
            <Stat label="Projects Done" value="4,200+" />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl border bg-card shadow-lg"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1400&q=80"
              alt="Professional exterior house washing"
              width={1000}
              height={700}
              className="h-[380px] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <motion.div
              className="absolute bottom-5 left-5 right-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
            >
              <p className="max-w-md text-sm font-medium text-white/95">
                Clean, safe, and premium exterior detailing for residential and commercial properties.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          >
            <Card className="border-white/50 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle>Book in 60 seconds</CardTitle>
                <CardDescription>Same-day quotes for residential and commercial properties.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Feature label="Licensed & insured professionals" />
                <Feature label="Soft wash + high-pressure equipment" />
                <Feature label="Upfront pricing and no hidden fees" />
                <Button className="mt-2 w-full">Request Fast Quote</Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div className="rounded-lg border bg-card p-4" variants={fadeUp}>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
}

function Feature({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
      <span>{label}</span>
    </div>
  );
}

import {
  ArrowRight,
  Award,
  Bell,
  Building2,
  Calculator,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

function GoldButton({
  children,
  className = "",
  onClick,
  variant = "filled",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "filled" | "ghost";
  [key: string]: unknown;
}) {
  if (variant === "ghost") {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full border border-[#2771F3] text-[#2771F3] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#2771F3] hover:text-white cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full gold-gradient text-white font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#2771F3]/30 hover:scale-[1.03] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home Purchase",
    "Refinance",
    "HELOC",
    "Loan Programs",
    "About",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-2">
        <Building2 className="w-6 h-6 text-[#2771F3]" />
        <span className="font-display text-2xl font-bold tracking-tight">
          lend<span className="gold-text">vio</span>
        </span>
      </div>

      <nav
        className="hidden lg:flex items-center gap-8"
        data-ocid="nav.section"
      >
        {links.map((l) => (
          <a
            key={l}
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            data-ocid="nav.link"
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-3">
        <GoldButton variant="ghost" data-ocid="nav.check_rate.button">
          Check Rate
        </GoldButton>
        <GoldButton data-ocid="nav.talk_expert.button">
          Talk to Expert
        </GoldButton>
      </div>

      <button
        type="button"
        className="lg:hidden text-foreground"
        onClick={() => setOpen(!open)}
        data-ocid="nav.toggle"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-6 flex flex-col gap-4 lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l}
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground py-1"
              >
                {l}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <GoldButton variant="ghost" className="flex-1">
                Check Rate
              </GoldButton>
              <GoldButton className="flex-1">Talk to Expert</GoldButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-luxury-villa.dim_1920x1080.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />

      {/* Blue top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="accent-lime font-sans text-xs tracking-[0.25em] uppercase mb-6 font-medium"
        >
          Premium Mortgage Solutions
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-foreground"
        >
          Your Home is More Than
          <br />
          Just a House
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-display text-xl md:text-2xl italic gold-text mb-8 font-normal"
        >
          It&apos;s Your Most Powerful Financial Tool.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-muted-foreground font-sans text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Luxury mortgage advisory for discerning homeowners. Competitive rates,
          expert guidance, and a seamless path from application to closing.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <GoldButton
            className="px-8 py-4 text-base"
            data-ocid="hero.apply_now.button"
          >
            Apply Now
          </GoldButton>
          <GoldButton
            variant="ghost"
            className="px-8 py-4 text-base"
            data-ocid="hero.see_options.button"
          >
            See Options
          </GoldButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-wrap gap-6 justify-center mt-14 text-muted-foreground"
        >
          {[
            { icon: Shield, label: "Licensed & Insured" },
            { icon: Star, label: "4.9 / 5 Average Rating" },
            { icon: CheckCircle, label: "1,200+ Loans Closed" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <Icon className="w-4 h-4 text-[#2771F3]" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCards() {
  const services = [
    {
      icon: Home,
      title: "Buy a Home",
      desc: "Tailored home loans for first-time buyers and seasoned investors. Competitive rates with expert guidance every step of the way.",
      cta: "Explore Home Loans",
    },
    {
      icon: TrendingUp,
      title: "Use Your Equity",
      desc: "Cash-out refinancing, HELOC, and debt consolidation solutions that put your home's equity to work for your financial goals.",
      cta: "Unlock Your Equity",
    },
    {
      icon: DollarSign,
      title: "Lower Payments",
      desc: "Refinance your existing mortgage to reduce monthly obligations, lower interest costs, and improve your overall financial position.",
      cta: "Start Saving Today",
    },
  ];

  return (
    <section className="section-mid py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-5"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <a
                href="/"
                className="flex items-center gap-1 text-[#2771F3] text-sm font-medium mt-auto group"
              >
                {s.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EquityBanner() {
  return (
    <section className="relative overflow-hidden section-dark py-20 px-6">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2771F3] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#2771F3] blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-4">
            Home Equity
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to unlock your home&apos;s{" "}
            <span className="gold-text">equity</span>?
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-10">
            Tap into the wealth you&apos;ve built. Whether it&apos;s
            renovations, education, or debt consolidation — your home can fund
            your future.
          </p>
          <GoldButton
            className="px-10 py-4 text-base"
            data-ocid="equity.apply_now.button"
          >
            Apply Now
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesStrip() {
  const features = [
    { icon: TrendingUp, label: "Competitive Rates" },
    { icon: Zap, label: "Fast Approvals" },
    { icon: FileText, label: "Simple Online Application" },
    { icon: Users, label: "Experienced Loan Advisors" },
    { icon: Award, label: "Flexible Loan Programs" },
    { icon: Globe, label: "Nationwide Lending" },
  ];

  return (
    <section className="section-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-3">
            Why Choose Lendvio
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Mortgages Made Simple With{" "}
            <span className="gold-text">Lendvio</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              variants={fadeUp}
              custom={i * 0.5}
              className="glass-card gold-border rounded-2xl p-5 flex flex-col items-center gap-3 text-center glass-card-hover"
            >
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-sans font-medium text-foreground leading-snug">
                {f.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LoanOptions() {
  const loans = [
    { icon: Home, title: "Conventional", sub: "Standard purchase & refinance" },
    { icon: Shield, title: "FHA", sub: "Low down payment options" },
    { icon: Award, title: "VA", sub: "Benefits for veterans" },
    { icon: TrendingUp, title: "Jumbo", sub: "High-value property financing" },
    { icon: DollarSign, title: "HELOC", sub: "Revolving home equity credit" },
    { icon: ArrowRight, title: "Cash-Out", sub: "Refinance & access equity" },
    { icon: Building2, title: "DSCR", sub: "Investor property loans" },
    { icon: FileText, title: "Bank Statement", sub: "Self-employed borrowers" },
  ];

  return (
    <section className="section-dark py-20 px-6" id="programs">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-3">
            Loan Programs
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Loan Options For Every <span className="gold-text">Borrower</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {loans.map((loan, i) => (
            <motion.div
              key={loan.title}
              variants={fadeUp}
              custom={i * 0.4}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 cursor-pointer"
              data-ocid={`loans.item.${i + 1}`}
            >
              <div className="w-10 h-10 rounded-xl border border-[#2771F3]/30 flex items-center justify-center">
                <loan.icon className="w-5 h-5 text-[#2771F3]" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold mb-1">
                  {loan.title}
                </h4>
                <p className="text-muted-foreground text-xs font-sans">
                  {loan.sub}
                </p>
              </div>
              <a
                href="/"
                className="text-[#2771F3] text-xs font-medium flex items-center gap-1 mt-auto group"
              >
                Learn More
                <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <GoldButton
            variant="ghost"
            className="px-8 py-3"
            data-ocid="loans.view_all.button"
          >
            View All Loan Programs
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const tools = [
    {
      icon: Calculator,
      title: "Mortgage Calculator",
      desc: "Estimate your monthly payments with real-time rate scenarios.",
    },
    {
      icon: Bell,
      title: "Rate Alerts",
      desc: "Get notified instantly when rates drop to your target threshold.",
    },
    {
      icon: FileText,
      title: "Purchase Process",
      desc: "Step-by-step guides from pre-approval through closing day.",
    },
    {
      icon: Star,
      title: "Client Reviews",
      desc: "See verified testimonials from our satisfied borrowers.",
    },
  ];

  return (
    <section className="section-mid py-20 px-6" id="tools">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-3">
            Resources
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-lg mx-auto leading-tight">
            Tools to Help You Unlock Your Home&apos;s{" "}
            <span className="gold-text">Potential</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              custom={i * 0.5}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col gap-4"
              data-ocid={`tools.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                <t.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-display text-lg font-bold">{t.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {t.desc}
              </p>
              <a
                href="/"
                className="text-[#2771F3] text-xs font-semibold tracking-wider uppercase flex items-center gap-1 group"
              >
                Learn More
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function JourneyTabs() {
  const [active, setActive] = useState(0);

  const tabs = [
    {
      label: "Buy a Home",
      heading: "Find Your Perfect Home Loan",
      body: "Whether you're a first-time buyer or upgrading your family's home, we offer conventional, FHA, VA, and jumbo loans with expert guidance to match your financial profile.",
      bullets: [
        "Pre-approval in 24 hours",
        "Down payment from 3%",
        "Fixed & adjustable rate options",
      ],
    },
    {
      label: "Use Your Equity",
      heading: "Leverage the Wealth in Your Home",
      body: "Your home has likely appreciated significantly. A HELOC or cash-out refinance can fund renovations, investments, or major expenses — at mortgage rates lower than personal loans.",
      bullets: [
        "Access up to 90% LTV",
        "Flexible draw periods",
        "Competitive HELOC rates",
      ],
    },
    {
      label: "Lower Payments",
      heading: "Reduce Your Monthly Obligations",
      body: "Refinancing your mortgage can meaningfully reduce your interest rate and monthly payment. Our advisors analyze your current loan to find the best path forward.",
      bullets: [
        "Rate-and-term refinance",
        "No cash-out options available",
        "Break-even analysis included",
      ],
    },
  ];

  const current = tabs[active];

  return (
    <section className="section-light py-20 px-6" id="journey">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-3">
            Your Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Wherever You Are In Your{" "}
            <span className="gold-text">Homeownership Journey</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div
          className="flex gap-2 justify-center mb-10"
          data-ocid="journey.tab"
        >
          {tabs.map((t, i) => (
            <button
              type="button"
              key={t.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 cursor-pointer ${
                active === i
                  ? "gold-gradient text-white"
                  : "border border-border text-muted-foreground hover:border-[#2771F3]/50 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8"
          >
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {current.heading}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                {current.body}
              </p>
              <GoldButton data-ocid="journey.apply_now.button">
                Get Started
              </GoldButton>
            </div>
            <div className="flex-1 flex flex-col gap-3 justify-center">
              {current.bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground font-sans text-sm">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function HomeEquityBanner() {
  return (
    <section className="section-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-4">
              Home Equity
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Unlock the Power of Your{" "}
              <span className="gold-text">Home Equity</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              The average homeowner has over $200,000 in available equity.
              Whether you want to renovate, invest, consolidate debt, or fund
              major life milestones, Lendvio makes it straightforward.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Our equity advisors work one-on-one with you to find the right
              product — HELOC, cash-out refi, or second mortgage — at the most
              competitive rates available.
            </p>
            <div className="flex gap-4">
              <GoldButton data-ocid="equity_banner.apply_now.button">
                Apply Now
              </GoldButton>
              <GoldButton
                variant="ghost"
                data-ocid="equity_banner.learn_more.button"
              >
                Learn More
              </GoldButton>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/assets/generated/cta-luxury-interior.dim_1400x800.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 glass-card rounded-xl p-4">
                <p className="text-[#2771F3] font-display text-2xl font-bold">
                  $200K+
                </p>
                <p className="text-muted-foreground text-xs font-sans">
                  Average available equity
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Apply Online",
      desc: "Complete our secure digital application in under 10 minutes from any device.",
    },
    {
      num: "02",
      title: "Talk to an Expert",
      desc: "A dedicated loan advisor reviews your profile and guides your options.",
    },
    {
      num: "03",
      title: "Get Approved",
      desc: "Receive conditional approval with clear next steps and transparent terms.",
    },
    {
      num: "04",
      title: "Close Fast",
      desc: "Complete closing remotely or in-person, often in as few as 21 days.",
    },
  ];

  return (
    <section className="section-mid py-20 px-6" id="process">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="accent-lime text-xs tracking-[0.25em] uppercase font-sans mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Simple <span className="gold-text">Mortgage Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="relative glass-card gold-border rounded-2xl p-7 flex flex-col gap-4"
              data-ocid={`process.item.${i + 1}`}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-[#2771F3]/30" />
              )}
              <span className="font-display text-4xl font-bold gold-text leading-none">
                {s.num}
              </span>
              <h4 className="font-display text-xl font-bold">{s.title}</h4>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTABar() {
  return (
    <section className="relative overflow-hidden section-dark py-16 px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2771F3] to-transparent" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Ready To <span className="gold-text">Get Started?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton
              className="px-8 py-3.5"
              data-ocid="cta.apply_now.button"
            >
              Apply Now
            </GoldButton>
            <GoldButton
              variant="ghost"
              className="px-8 py-3.5"
              data-ocid="cta.check_rates.button"
            >
              Check Rates
            </GoldButton>
            <GoldButton
              variant="ghost"
              className="px-8 py-3.5"
              data-ocid="cta.talk_expert.button"
            >
              Talk to an Expert
            </GoldButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: "Home Purchase",
      links: ["Conventional Loans", "FHA Loans", "VA Loans", "Jumbo Loans"],
    },
    {
      heading: "Refinance & Equity",
      links: [
        "Rate & Term Refi",
        "Cash-Out Refi",
        "HELOC",
        "Debt Consolidation",
      ],
    },
    {
      heading: "Company",
      links: ["About Lendvio", "Loan Programs", "Careers", "Contact Us"],
    },
    {
      heading: "Resources",
      links: ["Calculators", "FAQs", "Rate Alerts", "Blog"],
    },
  ];

  return (
    <footer className="section-dark border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-[#2771F3]" />
              <span className="font-display text-xl font-bold">
                lend<span className="gold-text">vio</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6">
              Premium mortgage advisory for discerning homeowners and investors.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="/"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[#2771F3] hover:text-[#2771F3] transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h5 className="font-sans font-semibold text-foreground text-sm mb-4 tracking-wide">
                {col.heading}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#2771F3]" />
            <span className="text-muted-foreground text-xs font-sans">
              Equal Housing Lender · NMLS #000000 · Licensed in all 50 states
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-muted-foreground text-xs font-sans text-center">
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-[#2771F3] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
          <div className="flex gap-4 text-muted-foreground text-xs font-sans">
            <a href="/" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="/" className="hover:text-foreground">
              NMLS Consumer Access
            </a>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-6 flex flex-wrap gap-6 justify-center text-muted-foreground text-xs">
          {[
            { Icon: Phone, text: "(800) 555-0190" },
            { Icon: Mail, text: "hello@lendvio.com" },
            { Icon: MapPin, text: "Licensed Nationwide" },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-[#2771F3]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <EquityBanner />
        <FeaturesStrip />
        <LoanOptions />
        <ToolsSection />
        <JourneyTabs />
        <HomeEquityBanner />
        <ProcessSteps />
        <FooterCTABar />
      </main>
      <Footer />
    </div>
  );
}

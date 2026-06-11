"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Shield,
  Rocket,
  Users,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  TrendingUp,
  Award,
  Handshake,
  Languages,
  Newspaper,
  Calendar,
  Clock,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Licensing", href: "#licensing" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    icon: Globe,
    title: "Global Distribution",
    description:
      "Expand your software reach across 150+ countries through our established international reseller network and distribution channels.",
  },
  {
    icon: Shield,
    title: "Secure Licensing",
    description:
      "Enterprise-grade licensing infrastructure with advanced anti-piracy protection, flexible activation models, and real-time analytics dashboard.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Launch your localized product in new markets within weeks, not months. Our streamlined process handles technical integration and compliance.",
  },
  {
    icon: Users,
    title: "Partner Network",
    description:
      "Access our curated network of 500+ verified resellers and distributors, each with proven track records in their regional markets.",
  },
  {
    icon: Languages,
    title: "Full Localization",
    description:
      "Complete translation and cultural adaptation services for 40+ languages, ensuring your product resonates with local audiences worldwide.",
  },
  {
    icon: Handshake,
    title: "Flexible Agreements",
    description:
      "Custom licensing terms tailored to your business model — exclusive, non-exclusive, volume-based, or revenue-share arrangements available.",
  },
];

const stats = [
  { value: "150+", label: "Countries Served" },
  { value: "500+", label: "Partner Resellers" },
  { value: "40+", label: "Languages Supported" },
  { value: "10M+", label: "Licenses Deployed" },
];

const newsItems = [
  {
    date: "2026-06-10",
    category: "Partnership",
    title: "Strategic Alliance with TechVenture Asia Pacific",
    excerpt:
      "We are excited to announce our new strategic partnership with TechVenture APAC, expanding our distribution network across Southeast Asian markets including Vietnam, Thailand, and Indonesia.",
  },
  {
    date: "2026-05-28",
    category: "Product",
    title: "ZIPCARTCO Licensing Platform v4.0 Released",
    excerpt:
      "Our next-generation licensing platform introduces AI-powered analytics, real-time compliance monitoring, and a redesigned partner portal for streamlined operations.",
  },
  {
    date: "2026-05-15",
    category: "Expansion",
    title: "New Regional Office in Dubai Silicon Oasis",
    excerpt:
      "To better serve our Middle Eastern partners, we have opened a new regional headquarters in Dubai, providing local support in Arabic, Farsi, and Turkish languages.",
  },
  {
    date: "2026-04-30",
    category: "Award",
    title: "Recognized as Top SaaS Distributor 2026",
    excerpt:
      "ZIPCARTCO has been named among the top 10 SaaS distribution companies by Global Tech Insights, marking our third consecutive year on this prestigious list.",
  },
  {
    date: "2026-04-12",
    category: "Product",
    title: "Multi-Currency Payment Gateway Integration",
    excerpt:
      "Our platform now supports seamless transactions in 75+ currencies with automatic tax calculation, making cross-border software sales simpler than ever.",
  },
];

const products = [
  {
    name: "License Manager Pro",
    description:
      "Complete license lifecycle management with activation tracking, renewal automation, and detailed usage analytics for software publishers.",
    badge: "Popular",
  },
  {
    name: "Distributor Connect",
    description:
      "A unified platform connecting software vendors with verified regional distributors, streamlining negotiations and contract management.",
    badge: "New",
  },
  {
    name: "Localize Studio",
    description:
      "End-to-end localization toolkit supporting 40+ languages with AI-assisted translation, cultural adaptation, and quality assurance workflows.",
    badge: "Enterprise",
  },
  {
    name: "Compliance Shield",
    description:
      "Automated regulatory compliance monitoring across jurisdictions, ensuring your software meets local data protection and consumer laws.",
    badge: "Essential",
  },
];

// Base path for GitHub Pages deployment
const basePath = "/SaaS-Marketing-site";

export default function Home() {
  const darkModeRef = useRef(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Read initial theme from localStorage on mount (no setState in effect)
  useEffect(() => {
    const stored = localStorage.getItem("zipcartco-theme");
    if (stored === "dark") {
      darkModeRef.current = true;
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkModeRef.current;
    darkModeRef.current = next;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("zipcartco-theme", next ? "dark" : "light");
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== NAVIGATION ===== */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={`${basePath}/logo.png`}
                alt="ZIPCARTCO Logo"
                className="h-9 w-9 rounded-lg transition-transform group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground leading-none">
                  ZIPCARTCO
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase leading-none mt-0.5">
                  Web Solutions
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Button
                className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                asChild
              >
                <a href="#contact">
                  Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border py-4 animate-fade-in">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 px-4">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href="#contact">
                      Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-background via-background to-brand-light/30"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="animate-fade-in-up">
                  <Badge
                    variant="secondary"
                    className="px-4 py-1.5 text-xs font-medium tracking-wide bg-primary/10 text-primary border-primary/20"
                  >
                    <Rocket className="mr-1.5 h-3 w-3" />
                    Trusted by 500+ Partners Worldwide
                  </Badge>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
                  Global Software{" "}
                  <span className="text-primary">Licensing</span> &
                  Distribution
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up animation-delay-200">
                  Expand your software reach worldwide with our proven licensing
                  platform, international reseller network, and full
                  localization support across 150+ countries.
                </p>

                <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-12 text-base"
                    asChild
                  >
                    <a href="#licensing">
                      Explore Licensing{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-8 h-12 text-base border-border"
                    asChild
                  >
                    <a href="#products">
                      View Products <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 animate-fade-in-up animation-delay-400">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-fade-in-up animation-delay-300 hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src={`${basePath}/hero-image.jpg`}
                    alt="ZIPCARTCO Global Network"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg max-w-[220px] animate-fade-in-up animation-delay-500">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">+42% Growth</div>
                      <div className="text-xs text-muted-foreground">
                        This quarter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section id="about" className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30"
              >
                Why Choose Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Everything You Need to Go Global
              </h2>
              <p className="text-lg text-muted-foreground">
                From licensing infrastructure to cultural adaptation, we provide
                the complete toolkit for international software distribution
                success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card
                  key={feature.title}
                  className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRODUCTS SECTION ===== */}
        <section
          id="products"
          className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30"
              >
                Our Products
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Built for Global Scale
              </h2>
              <p className="text-lg text-muted-foreground">
                Our suite of tools empowers software publishers and resellers to
                manage every aspect of international distribution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <Card
                  key={product.name}
                  className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 text-xs"
                      >
                        {product.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary px-0 hover:bg-transparent group/link"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LICENSING SECTION ===== */}
        <section
          id="licensing"
          className="py-20 lg:py-28 bg-background relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left content */}
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  <Shield className="mr-1.5 h-3 w-3" />
                  Licensing & Reselling
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Become a Licensed Partner in Your Region
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you are interested in licensing or reselling our products
                  in your country, we offer exclusive licensing and reseller
                  volume rates tailored to your marketing approach. Whether you
                  want to distribute a localized version or build a regional
                  sales network, we provide the tools, training, and support
                  you need to succeed.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Award className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">
                        Exclusive Territory Rights
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Secure exclusive distribution rights for your region
                        with protected market boundaries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Globe className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">
                        Localization Assistance
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We assist you in translating and culturally adapting
                        products for your local market.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Users className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">
                        Reseller Volume Rates
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Competitive pricing structures based on volume
                        commitments and market potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-12"
                    asChild
                  >
                    <a href="#contact">
                      Apply for Partnership{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right side - visual card */}
              <div className="relative">
                <Card className="border-border/50 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={`${basePath}/sidebar-image.jpg`}
                        alt="Business partnership"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    </div>
                    <div className="p-6 -mt-20 relative">
                      <Badge className="bg-primary text-primary-foreground mb-3">
                        <Handshake className="mr-1 h-3 w-3" />
                        Partnership Program
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">
                        Join Our Global Network
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Over 500 resellers across 150 countries trust
                        ZIPCARTCO for their software distribution needs. Become
                        our next success story.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-primary" />
                          150+ Countries
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          500+ Partners
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEWS SECTION ===== */}
        <section
          id="news"
          className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary/30"
                >
                  <Newspaper className="mr-1.5 h-3 w-3" />
                  Latest News
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Company Updates & Insights
                </h2>
              </div>
              <Button
                variant="outline"
                className="rounded-xl border-border shrink-0"
              >
                View All News <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.slice(0, 3).map((item, idx) => (
                <Card
                  key={idx}
                  className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(item.date)}
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-2 py-0 h-5 bg-primary/10 text-primary border-0"
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary px-0 hover:bg-transparent text-sm group/link"
                    >
                      Read more
                      <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Remaining news items in compact format */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {newsItems.slice(3).map((item, idx) => (
                <Card
                  key={idx}
                  className="group border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <span>{formatDate(item.date)}</span>
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 h-4 bg-primary/10 text-primary border-0"
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <h4 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors truncate">
                        {item.title}
                      </h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA / CONTACT SECTION ===== */}
        <section
          id="contact"
          className="py-20 lg:py-28 bg-background relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30"
              >
                <Mail className="mr-1.5 h-3 w-3" />
                Get In Touch
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Ready to Expand Globally?
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you are looking for licensing opportunities, reseller
                partnerships, or localization support — our team is here to help
                you succeed in new markets.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <Card className="border-border/50 bg-card text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    partners@zipcartco.com
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    +1 (888) 555-ZIPC
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Global HQ, Tech District
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-10 h-12 text-base"
              >
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-foreground/[0.03] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4">
              <a href="#home" className="flex items-center gap-3">
                <img
                  src={`${basePath}/logo.png`}
                  alt="ZIPCARTCO Logo"
                  className="h-8 w-8 rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-tight leading-none">
                    ZIPCARTCO
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase leading-none mt-0.5">
                    Web Solutions
                  </span>
                </div>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Global software licensing and distribution solutions for the
                modern era. Connecting publishers with markets worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2.5">
                {["Home", "About", "Products", "Licensing", "News", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Services</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  "License Management",
                  "Partner Distribution",
                  "Localization",
                  "Compliance",
                  "Analytics",
                  "Support",
                ].map((service) => (
                  <span
                    key={service}
                    className="text-sm text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Licensing Agreement",
                ].map((legal) => (
                  <span
                    key={legal}
                    className="text-sm text-muted-foreground"
                  >
                    {legal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} ZIPCARTCO. Web Solutions. All
              rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Designed & Developed by</span>
              <span className="font-semibold text-foreground">
                MRF&apos;s ZIPCARTCO. Web Solutions
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

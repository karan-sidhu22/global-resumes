import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe, FileCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Animated glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main container */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ---------- LEFT CONTENT ---------- */}
          <div className="space-y-8 animate-fade-in">
            {/* Small tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Immigration Documents
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
              Build Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dream Career
              </span>{" "}
              Abroad
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Create visa-compliant resumes and cover letters tailored to
              Canada, UK, Australia, and New Zealand immigration programs.
              AI-optimized for Express Entry, Skilled Worker visas, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg h-14 px-8 shadow-lg hover:shadow-primary/30 transition-all"
                onClick={() => navigate("/builder")}
              >
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-primary/50 hover:bg-primary/10"
                onClick={() => navigate("/builder")}
              >
                See Example Resume
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Countries Supported */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">4 Countries</p>
                  <p className="text-sm text-muted-foreground">Supported</p>
                </div>
              </div>

              {/* Visa Compliant */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Visa Compliant
                  </p>
                  <p className="text-sm text-muted-foreground">Templates</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE SECTION ---------- */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroImage}
                alt="Professional resume creation for immigration"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border animate-slide-in">
              <p className="text-sm font-semibold text-primary">🇨🇦 Express Entry</p>
              <p className="text-xs text-muted-foreground">NOC Optimized</p>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border animate-slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-sm font-semibold text-accent">✨ AI Powered</p>
              <p className="text-xs text-muted-foreground">Smart Generation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
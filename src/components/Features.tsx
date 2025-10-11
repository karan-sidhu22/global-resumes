import { Globe2, Sparkles, FileCheck, Zap, Shield, Download } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Advanced AI analyzes your experience and creates visa-compliant documents that pass ATS systems.",
  },
  {
    icon: Globe2,
    title: "Multi-Country Support",
    description: "Tailored templates for Canada, UK, Australia, and New Zealand immigration programs.",
  },
  {
    icon: FileCheck,
    title: "NOC Code Optimization",
    description: "Automatically matches your experience to correct NOC codes for Express Entry applications.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Get your professional resume and cover letter in minutes, not hours.",
  },
  {
    icon: Shield,
    title: "Visa Compliant",
    description: "Documents formatted according to each country's immigration standards and requirements.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Download in PDF or Word format, ready to submit with your application.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed specifically for immigration and visa applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

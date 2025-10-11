import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import CountrySelector from "@/components/CountrySelector";

const Builder = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    targetCountry: "",
    jobTitle: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.targetCountry) {
      toast({
        title: "Country Required",
        description: "Please select your target country for immigration.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "AI Processing Started! 🎉",
      description: "Your visa-compliant resume is being generated. This feature will be powered by AI once Cloud is connected.",
    });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
      <div className="container px-4 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Build Your <span className="gradient-text">Perfect Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered resume generation for your immigration journey
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Country Selection */}
            <CountrySelector
              selectedCountry={formData.targetCountry}
              onCountryChange={(country) => updateField("targetCountry", country)}
            />

            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Personal Information
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name *</label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Phone</label>
                  <Input
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Current Country *</label>
                  <Input
                    required
                    placeholder="India"
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Professional Experience</h2>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold">Current/Recent Job Title *</label>
                <Input
                  required
                  placeholder="Software Engineer"
                  value={formData.jobTitle}
                  onChange={(e) => updateField("jobTitle", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Work Experience *</label>
                <Textarea
                  required
                  placeholder="Describe your work experience, responsibilities, and achievements..."
                  rows={6}
                  value={formData.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Tip: Include specific achievements, technologies used, and years of experience
                </p>
              </div>
            </div>

            {/* Education & Skills */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Education & Skills</h2>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold">Education *</label>
                <Textarea
                  required
                  placeholder="Bachelor's in Computer Science, University Name, 2018"
                  rows={3}
                  value={formData.education}
                  onChange={(e) => updateField("education", e.target.value)}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Key Skills *</label>
                <Textarea
                  required
                  placeholder="JavaScript, React, Node.js, Project Management, etc."
                  rows={3}
                  value={formData.skills}
                  onChange={(e) => updateField("skills", e.target.value)}
                  className="resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg shadow-lg hover:shadow-glow"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate AI Resume
            </Button>
          </form>
        </Card>

        <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground text-center">
            🔒 Your data is secure. We use AI to optimize your resume for immigration success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Builder;

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CountrySelectorProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const countries = [
  { code: "CA", name: "Canada", flag: "🇨🇦", program: "Express Entry / PNP" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", program: "Skilled Worker" },
  { code: "AU", name: "Australia", flag: "🇦🇺", program: "SkillSelect" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", program: "Skilled Migrant" },
];

const CountrySelector = ({ selectedCountry, onCountryChange }: CountrySelectorProps) => {
  return (
    <div className="space-y-4">
      <label className="text-sm font-semibold text-foreground">
        Target Country <span className="text-destructive">*</span>
      </label>
      <div className="grid sm:grid-cols-2 gap-4">
        {countries.map((country) => (
          <Card
            key={country.code}
            className={cn(
              "p-6 cursor-pointer transition-all hover:shadow-md",
              selectedCountry === country.code
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/30"
            )}
            onClick={() => onCountryChange(country.code)}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{country.flag}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{country.name}</h3>
                <p className="text-sm text-muted-foreground">{country.program}</p>
              </div>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  selectedCountry === country.code
                    ? "border-primary bg-primary"
                    : "border-muted"
                )}
              >
                {selectedCountry === country.code && (
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const RegistrationSection = () => {
  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    year: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.department || !formData.year || !formData.mobile || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Mobile validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    const cleanedMobile = formData.mobile.replace(/\D/g, '');
    if (!mobileRegex.test(cleanedMobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    // Password validation (min 6 characters)
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await (supabase as any)
        .from('registrations')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            department: formData.department,
            year_of_study: formData.year,
            mobile_number: cleanedMobile,
            password: formData.password,
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("This email is already registered");
        } else {
          toast.error("Registration failed. Please try again.");
          console.error("Registration error:", error);
        }
        return;
      }

      setRegistered(true);
      toast.success("Registration successful! Please join the WhatsApp group for updates.");
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Register for E.D.I.T.H 1.0
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-sm md:text-base">
          Secure your spot in this technical fest
        </p>

        <div className="bg-gradient-card p-6 md:p-12 rounded-xl md:rounded-2xl border border-border">
          {!registered ? (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="fullName" className="text-sm md:text-base">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="bg-background/50 text-sm md:text-base"
                />
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-background/50 text-sm md:text-base"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="department" className="text-sm md:text-base">Department *</Label>
                  <Select onValueChange={(value) => handleChange("department", value)}>
                    <SelectTrigger className="bg-background/50 text-sm md:text-base">
                      <SelectValue placeholder="Select dept." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CSE">CSE</SelectItem>
                      <SelectItem value="ISE">ISE</SelectItem>
                      <SelectItem value="AIML">AIML</SelectItem>
                      <SelectItem value="CSD">CSD</SelectItem>
                      <SelectItem value="ECE">ECE</SelectItem>
                      <SelectItem value="MECH">MECH</SelectItem>
                      <SelectItem value="CIVIL">CIVIL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="year" className="text-sm md:text-base">Year *</Label>
                  <Select onValueChange={(value) => handleChange("year", value)}>
                    <SelectTrigger className="bg-background/50 text-sm md:text-base">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="mobile" className="text-sm md:text-base">Mobile *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="10-digit number"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  className="bg-background/50 text-sm md:text-base"
                />
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="password" className="text-sm md:text-base">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Min 6 characters"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="bg-background/50 text-sm md:text-base"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-base md:text-lg py-5 md:py-6" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register Now"}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
              <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold">Registration Successful!</h3>
              <p className="text-sm md:text-base text-muted-foreground px-4">
                Join our WhatsApp group for event updates and coordination.
              </p>
              <Button
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2 text-sm md:text-base"
                onClick={() => window.open("https://chat.whatsapp.com/samplegroup", "_blank")}
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                Join WhatsApp Group
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

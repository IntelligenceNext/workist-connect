
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid business email"),
  purpose: z.string({
    required_error: "Please select your purpose",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

const RPOHeroSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      purpose: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would integrate with your form submission service
    console.log(values);
    toast({
      title: "Form submitted successfully",
      description: "We'll be in touch shortly!",
    });
    form.reset();
  }

  return (
    <div className="relative min-h-[600px] py-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Recruitment Process Outsourcing (RPO) Services
            </h1>
            
            <div className="w-20 h-1 bg-accent mb-6" />
            
            <p className="text-lg mb-8">
              Transform your talent acquisition with our comprehensive RPO solutions. 
              We streamline your recruitment process, reduce time-to-hire, and deliver 
              top-tier candidates while optimizing costs.
            </p>

            <div className="mb-6">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Start Hiring Today!
              </Button>
            </div>

            <p className="text-white/90">
              Questions? Send email to:{" "}
              <a 
                href="mailto:info@workistforit.com" 
                className="font-bold hover:text-accent"
              >
                info@workistforit.com
              </a>
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Get Started
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="john@company.com" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>I am...</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your purpose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hiring">Looking to hire</SelectItem>
                          <SelectItem value="seeking">Looking for a job</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the{" "}
                          <a 
                            href="/privacy-policy" 
                            className="text-accent hover:underline"
                            target="_blank"
                          >
                            privacy policy
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPOHeroSection;

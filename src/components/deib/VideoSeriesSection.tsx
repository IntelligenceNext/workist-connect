
import { Users, Play, Video } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  confirmationQuestion: z.enum(["yes", "no"], {
    required_error: "Please confirm your intent",
  }),
});

const VideoSeriesSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmationQuestion: "yes",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Registration successful",
      description: "We'll send you access to the video series shortly!",
    });
    console.log(values);
  }

  return (
    <div className="relative py-24 px-4 bg-gradient-to-br from-[#040842] via-[#040842] to-[#1A1F2C] text-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Statistic */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-white/10 rounded-full">
                <Users className="h-6 w-6 text-[#F97316]" />
              </div>
              <div>
                <span className="text-4xl font-bold text-[#F97316]">76%</span>
                <p className="text-white/90 mt-1">
                  of IT professionals believe DEIB initiatives improve innovation and creativity
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Exclusive DEIB Video Series
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-white/90">
                Join Sarah Anderson, our Chief Diversity Officer, as she shares proven strategies 
                for implementing successful DEIB programs in technology organizations.
              </p>

              <div className="flex items-center space-x-3 text-white/80">
                <Video className="h-5 w-5 text-[#F97316]" />
                <span>6-part video series</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Play className="h-5 w-5 text-[#F97316]" />
                <span>3+ hours of expert content</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h3 className="text-2xl font-semibold mb-6">
              Get Instant Access
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
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
                        <FormLabel>Last name</FormLabel>
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
                      <FormLabel>Work email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmationQuestion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you ready to transform your organization's DEIB initiatives?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yes, I'm ready to start
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              No, I need more information
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-[#F97316] hover:bg-[#F97316]/90">
                  Access Video Series
                </Button>

                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and consent to receive 
                  communications from Workist For IT. You can unsubscribe at any time.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSeriesSection;

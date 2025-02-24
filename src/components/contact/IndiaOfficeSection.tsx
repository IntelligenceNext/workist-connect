
import { Building2, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IndiaOfficeSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map - Placed first for desktop but will show second on mobile */}
          <div className="h-[400px] relative rounded-xl overflow-hidden shadow-xl lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3397777106584!2d78.39856797507825!3d17.493893583003397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91975cc0f6d1%3A0xb4f36b4538c73c92!2sMajeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1710835128435!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="India Office Location"
              className="rounded-xl"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-accent/20 rounded-xl" />
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <h2 className="text-4xl font-bold text-[#1A1F2C] mb-8">
              Our India Office
            </h2>
            <p className="text-lg text-[#403E43] mb-8">
              Our India office is strategically located in Hyderabad, the heart of India's 
              technology hub. Feel free to visit us or contact us for any inquiries.
            </p>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <Building2 className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-2">Address</h3>
                    <p className="text-[#403E43]">
                      PLOT NO: S2, SURVEY NO: 1050, UNIT NO: 704, MAJEERATRINITY CORPORATE,
                      eSeva Ln, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-2">Phone</h3>
                    <p className="text-[#403E43]">
                      040-35880271
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaOfficeSection;


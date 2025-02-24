
import { Building2, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const USOfficeSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F1F0FB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#1A1F2C] mb-8">
              Our USA Office
            </h2>
            <p className="text-lg text-[#403E43] mb-8">
              Visit us at our USA office for personalized assistance and support. 
              Our team is ready to help you with all your IT and workforce solutions needs.
            </p>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <Building2 className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-2">Address</h3>
                    <p className="text-[#403E43]">
                      945 NW 53rd St, Miami, Florida (FL), 33127
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
                      +1 954-416-8830
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] relative rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.0301218542087!2d-80.20721702414726!3d25.82308470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6b8a8cf13f1%3A0x7f65f41b8a499be4!2s945%20NW%2053rd%20St%2C%20Miami%2C%20FL%2033127%2C%20USA!5e0!3m2!1sen!2sin!4v1710835057621!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="USA Office Location"
              className="rounded-xl"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-accent/20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default USOfficeSection;


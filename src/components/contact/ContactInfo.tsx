"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

const ContactInfo = () => {
  const openCalendly = () => {
    window.open(SITE.calendly, '_blank');
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center mb-3">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3" />
            <h3 className="font-semibold text-sm sm:text-base">Reservez un appel</h3>
          </div>
          <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Discutons de votre projet web en 30 minutes
          </p>
          <Button onClick={openCalendly} variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 text-sm">
            Prendre rendez-vous
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Card className="shadow-lg">
          <CardContent className="p-3 sm:p-4 text-center">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1 sm:mb-2" />
            <a href={`tel:${SITE.phone}`} className="text-xs sm:text-sm font-medium hover:text-purple-600 transition-colors" itemProp="telephone">
              {SITE.phoneDisplay}
            </a>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-3 sm:p-4 text-center">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1 sm:mb-2" />
            <a href={`mailto:${SITE.email}`} className="text-xs sm:text-sm font-medium hover:text-purple-600 transition-colors" itemProp="email">
              {SITE.email}
            </a>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-purple-50 border-purple-200 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
          <h3 className="font-bold text-sm sm:text-base mb-2 text-center">Pourquoi nous choisir ?</h3>
          <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
            <li>Developpement 100% sur-mesure</li>
            <li>Design moderne et responsive</li>
            <li>Formation complete incluse</li>
            <li>Support technique garanti</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;

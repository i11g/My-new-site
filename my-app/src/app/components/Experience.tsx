"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  responsibilities: string[];
};

type ExperienceData = {
  [key: string]: Experience[];
};

const experienceData: ExperienceData = {
  DSK: [
    {
      title: "Head of HQ Investment Project, Logistics and Transportation Department",
      company: "DSK Bank",
      companyUrl: "https://dskbank.bg/",
      location: "5 Georgi Benkovski str., Sofia",
      period: "2021 – Present",
      responsibilities: [
        "Management of HQ investment projects focused on modern and digitalized working environments",
        "Planning and organization of utilities and facilities services",
        "OPEX/CAPEX budget preparations and supervision",
        "Car fleet management and organization of logistics and transportation services"
      ]
    },
    {
      title: "Head of Headquarter Administrative Activity Department",
      company: "DSK Bank",
      companyUrl: "https://dskbank.bg/",
      location: "5 Georgi Benkovski str., Sofia",
      period: "2015 – 2021",
      responsibilities: [
        "Management of HQ constructions and investment projects for efficient and advanced office spaces",
        "Organization of facilities and utilities operations",
        "OPEX and CAPEX budget preparation and administration",
        "Archiving, assets, and warehouses operations management with a focus on process efficiency and flexibility"
      ]
    },
  ],
  DZI: [
    {
      title: "Head of Headquarter Administrative Activity Department",
      company: "DSK Bank",
      companyUrl: "https://dskbank.bg/",
      location: "5 Georgi Benkovski str., Sofia",
      period: "2015 – 2021",
      responsibilities: [
        "Management of HQ constructions and investment projects for efficient and advanced office spaces",
        "Organization of facilities and utilities operations",
        "OPEX and CAPEX budget preparation and administration",
        "Archiving, assets, and warehouses operations management with a focus on process efficiency and flexibility"
      ]
    },
  ],
  "The University of Iowa": [
    // Add University of Iowa experiences here
  ]
};

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState("DSK");
  return (
    <section id="experience" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Professional Experience</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {Object.keys(experienceData).map((company) => (
              <TabsTrigger key={company} value={company}>{company}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(experienceData).map(([company, experiences]) => (
            <TabsContent key={company} value={company}>
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="relative overflow-hidden transition-shadow hover:shadow-lg bg-gradient-to-br from-purple-900 to-blue-900 text-white">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl flex items-center">
                          <Briefcase className="mr-2 text-blue-500" />
                          {exp.title}
                        </CardTitle>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2">
                            {exp.company}
                          </a>
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-2">
                          <Calendar size={14} className="mr-1 text-gray-500" />
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
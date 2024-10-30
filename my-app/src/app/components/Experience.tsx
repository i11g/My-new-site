"use client"
import React, { useState } from 'react';
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
      title: "Head of WorkPlace Management and Accomodation Department",
      company: "DSK Bank",
      companyUrl: "https://dskbank.bg/",
      location: "5 Georgi Benkovski str., Sofia",
      period: "2024 – Present",
      responsibilities: [
        "Development of concepts and models for office space based on modern trends and solution",
        "Management of unit distribution and accomodation taking into account their specifities and market trends",
        "Units information and schemes data base management", 
        "OPEX budget preparations and supervision"
      ]
      
    },
    {
      title: "Head of HQ Investment Project, Logistics and Transportation Department",
      company: "DSK Bank",
      companyUrl: "https://dskbank.bg/",
      location: "5 Georgi Benkovski str., Sofia",
      period: "2021 – 2024",
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
      period: "2014 – 2021",
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
      title: "Director, General Services Department",
      company: "Insurance Company “DZI",
      companyUrl: "https://www.dzi.bg/",
      location: "3 Georgi Benkovski str., Sofia",
      period: "2012 – 2013",
      responsibilities: [
        "Management of real estate investment activity, office reconstruction, repairs, and maintenance",
        "Supervision of logistics, security, archiving, and record activities",
        "Organization of facilities and utilities operations",
        "OPEX and CAPEX budget preparation and administration",
        "Procurement organization and management"]
    },
    {
      title: "Director, Procurement and Logistics Department",
      company: "Insurance Company “DZI",
      companyUrl: "https://www.dzi.bg/",
      location: "3 Georgi Benkovski str., Sofia",
      period: "2008 – 2012",
      responsibilities: [
       " Management of real estate, logistics, archiving, and record activities",
       "Procurement organization and management",
        "Organization of facilities and utilities operations",
        "Budget management and administration",        
      ]
    },
    {
      title: "Director, Administration and Facilities Department",
      company: "Insurance Company “DZI",
      companyUrl: "https://www.dzi.bg/",
      location: "3 Georgi Benkovski str., Sofia",
      period: "2008 – 2012",
      responsibilities: [
       " Management of real estate, logistics, archiving, security and record activities",
       "Organization of facilities and utilities operations",
        "Budget management and administration",        
      ]
    },
  ],
  "The University of Iowa & Missuori State University ": [
    {
      title: " Graduate Research Assistant",
      company: "The University of Iowa",
      companyUrl: "https://uiowa.com/",
      location: "305 Chemistry Building, Iowa City, IA 52242-1294",
      period: "2005 – 2007",
      responsibilities: [
       "Research in the fields of supramolecular and organic chemistry",        
      ]
    },
    {
      title: " Graduate Teaching Assistant",
      company: "The University of Iowa",
      companyUrl: "https://uiowa.com/",
      location: "305 Chemistry Building, Iowa City, IA 52242-1294",
      period: "2003 – 2005",
      responsibilities: [
       "Teaching Organic Chemistry I and II",        
      ]
    },
    {
      title: " Graduate Research and Teaching Assistant",
      company: "Missouri State University",
      companyUrl: "https://www.missouristate.edu/",
      location: "901 S National Ave, Springfield, MO 65897 ",
      period: "2002 – 2003",
      responsibilities: [
       "Research in the filed of Metal-Organic Chemistry and teaching Organic Chemistry I and II",        
      ]
    },
    {
      title: " Research Associate, Laboratory and Store Assistant",
      company: "Missouri State University",
      companyUrl: "https://www.missouristate.edu/",
      location: "901 S National Ave, Springfield, MO 65897",
      period: "2000 – 2002",
      responsibilities: [
       "Research in the filed of Metal-Organic Chemistry and assisting in the University chemical store",        
      ]
    },
  ]
};

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState("DSK");
  return (
    <section id="experience" className="py-32  bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">👨‍💻 Professional Experience</h1>        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex mb-6 bg-white rounded-lg overflow-x-auto">
            {Object.keys(experienceData).map((company) => (
              <TabsTrigger 
                key={company} 
                value={company}
                className="flex-1 py-2 px-4 text-[#5F3BB2] hover:bg-purple-100 data-[state=active]:bg-purple-200"
              >
                {company}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(experienceData).map(([company, experiences]) => (
            <TabsContent key={company} value={company}>
              <ScrollArea className="h-[75vh] w-full rounded-md pr-4">
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
                      <div className="flex items-start gap-2 mb-2">
                        <Briefcase className="text-yellow-500 flex-shrink-0 mt-1" size={20}/>
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <div className="text-sm text-green-500 flex items-center mt-0.5">
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                           {exp.company}  </a>                          
                            <MapPin size={12} className="mr-1" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center mt-0.5">
                            <Calendar size={12} className="mr-2 text-[#B19CE0]" />
                            <span className="text-white bg-[#7E5CC5] px-2 py-0.5 rounded text-xs">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc list-outside text-sm text-white ml-6 space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
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
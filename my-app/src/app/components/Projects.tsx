"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Rocket, Building, Archive, Warehouse } from 'lucide-react';
import Image from 'next/image';

type Project = {
  title: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
  category: 'Business' | 'IT' | 'Chemistry';
};

const projectsData: Project[] = [
  {
    title: "Workplace Advisory Project",
    icon: <Building className="mr-2" />,
    details: [
      "Focus: Development of new modern and flexible work environment for all HQ teams",
      "Net Area: 13,800 sq.m., spanning across four HQ buildings"
    ],
    image: "/images/workplace-project.jpg",
    category: "Business"
  },
  {
    title: "Digital Factory Development",
    icon: <Rocket className="mr-2" />,
    details: [
      "Objective: Creation of comfortable and modern office environment with identity and flexibility for agile development teams and tribes",
      "Number of FTE: 500",
      "Reconstructed Area: 3,800 sq.m."
    ],
    image: "/images/digital-factory.jpg",
    category: "Business"
  },
  {
    title: "Centralization of DSK Bank archiving processes and Construction of DSK Bank Centralized Warehous",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Design and implementation of centralized process for archive management aiming process optimization, digitalization, and efficiency",
      "Project Scope: Over of 1,000,000 documents and 300 non-centralized archives",
      "Project Scope: Development of modern and automated central warehouse for close to 800,000 documents with office part for 30 FTE starting from scratch",
      "Development Area: 2,700 sq.m.",
      "Project Goals: Development of centralized process of archive management"
    ],
    image: "/images/dsk-bank-archive.jpg",
    category: "Business"
  },
  {
    title: "Construction of DSK Bank Centralized Warehouse",
    icon: <Warehouse className="mr-2" />,
    details: [
      "Project Scope: Development of modern and automated central warehouse for close to 800,000 documents with office part for 30 FTE starting from scratch",
      "Development Area: 2,700 sq.m."
    ],
    image: "/images/dsk-bank-warehouse.jpg",
    category: "IT"
  },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Business");

  const categories = ['Business', 'IT', 'Chemistry'];

  return (
    <section id="projects" className="pt-32 pb-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white flex items-center justify-center">
          <Rocket className="mr-2" /> Projects
        </h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex mb-6 bg-white rounded-lg overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="flex-1 py-2 px-4 text-[#5F3BB2] hover:bg-purple-100 data-[state=active]:bg-purple-200"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <ScrollArea className="h-[75vh] w-full rounded-md pr-4">
                <div className="space-y-4">
                  {projectsData
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <Card key={index} className="overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
                        <div className="flex flex-col md:flex-row">
                          <div className="flex-grow p-4">
                            <h3 className="text-xl font-semibold flex items-center mb-2">
                              {project.icon}
                              {project.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {project.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="w-full md:w-1/3 p-4 relative h-48">
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              layout="fill"
                              objectFit="cover"
                              className="rounded"
                            />
                          </div>
                        </div>
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

export default Projects;
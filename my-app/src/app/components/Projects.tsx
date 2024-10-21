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
  category: 'Development Projects' | 'Building Processes' | 'IT Projects';
};

const projectsData: Project[] = [
  {
    title: "Workplace and Accomodation Strategy",
    icon: <Building className="mr-2" />,
    details: [
      "Focus: Development of new modern and flexible work environment for all HQ teams",
      "Net Area: 13,800 sq.m., spanning across four HQ buildings",
      "Ongoing"
    ],
    image: "/images/workplace-project1.jpg",
    category: "Development Projects"
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
    category: "Development Projects"
  },
  {
    title: "Construction of DSK Bank Centralized Warehouse",
    icon: <Warehouse className="mr-2" />,
    details: [
      "Project Scope: Development of modern and automated central warehouse for close to 800,000 documents",
      "Development Area:  Office part for 30 FTE starting and total are of 2,700 sq.m."
    ],
    image: "/images/dsk-bank-warehouse.jpg",
    category: "Development Projects"
  },
  {
    title: "Centralization of DSK Bank archiving processes ",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Design and implementation of centralized process for archive management aiming process optimization, digitalization, and efficiency",  
      "Project Goals: Development of centralized process of archive management"
    ],
    image: "/images/archive.jpg",
    category: "Building Processes"
  },
  {
    title: "Team leader in Odessos project as part of integration of DSK Bank and Express Bank ",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Leading the integration of HQ’s buildings and units’ relocations.",  
      "Project Goals: Succsesful units relocation "
    ],
    image: "/images/integration.jpg",
    category: "Building Processes"
  },
  {
    title: "Development and implementation of Centralized Procurement Processes and creation of Budget Responsible Departments ",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Creation of centralized and transparent processes for procurement and assets management.",  
      "Objective: Development of budget management processes on a company level driven by budget responsible departments",  
    ],
    image: "/image/procurement.jpg",
    category: "Building Processes"
  },
  {
    title: "Office Space App ",
    icon: <Archive className="mr-2" />,
    details: [
      "Office space app gives you the tool to manage all of your office space with easy",
      "currently building"  
        
    ],
    image: "",
    category: "IT Projects"
  },
  {
    title: "Real Estate Application ",
    icon: <Archive className="mr-2" />,
    details: [
      "real Estate App ",  
      "currently building",  
    ],
    image: "",
    category: "IT Projects"
  },
  {
    title: "My previous personal page",
    icon: <Archive className="mr-2" />,
    details: [
      "Portfolio page made wiht markdown and Ruby",  
       
    ],
    image: "",
    category: "IT Projects"
  },
  {
    title: "My QA Automation Projects",
    icon: <Archive className="mr-2" />,
    details: [
      "All of my QA automation projects during my study at SoftUni are in i11g",         
    ],
    image: "",
    category: "IT Projects"
  },
];

const Projects: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState("Development Projects");

  const categories = ['Development Projects', 'Building Processes', 'IT Projects'];

  return (
    <section id="projects" className="pt-32 pb-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white flex items-center justify-center">
          <Rocket className="mr-2" /> Projects
        </h1>
        <p className="text-2xl font-italic text-center mb-6 text-white flex items-center justify-center">
        Here you will find a wide array of projects that I have led, created, or played an important role in
        </p>
        
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
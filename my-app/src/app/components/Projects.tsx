"use client"
import React, { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Rocket, Building, Archive, Warehouse, FileText } from 'lucide-react';
import Image from 'next/image';

type Project = {
  title: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
  category: 'Development Projects' | 'IT Projects' | 'Building Processes';
};

const projectsData: Project[] = [
  {
    title: "Workplace and Accomodation Strategy",
    icon: <Building className="mr-2" />,
    details: [
      "Focus: Development of new modern and flexible work environment for all HQ teams",
      "Net Area: 13,800 sq.m., spanning across four HQ buildings",
      "Ongoing",
      "The project aims to enhance employee well-being and productivity by providing modern design elements and flexible workspaces, to foster collaboration, creativity, and a strong sense of community among team members.This initiative will not only improve work efficiency but also strengthen the company's identity and culture."
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
    image: "",
    category: "Development Projects"
  },
  {
    title: "Centralization of DSK Bank archiving processes ",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Design and implementation of centralized process for archive management aiming process optimization, digitalization, and efficiency",  
      "Project Goals: Development of centralized process of archive management"
    ],
    image: "",
    category: "Building Processes"
  },
  {
    title: "Team leader in Odessos project as part of integration of DSK Bank and Express Bank ",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Leading the integration of HQ&apos;s buildings and units&apos relocations.",  
      "Project Goals: Succsessul units relocation "
    ],
        image: "",
    category: "Building Processes"
  },
  {
    title: "Development and implementation of Centralized Procurement Processes and creation of Budget Responsible Departments ",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Creation of centralized and transparent processes for procurement and assets management.",  
      "Objective: Development of budget management processes on a company level driven by budget responsible departments",  
    ],
    image: "",
    category: "Building Processes"
  },
  {
    title: "Office Space App ",
    icon: <Archive className="mr-2" />,
    details: [
      "Office space app gives you the tool to manage all of your office space with easy",
      "currently building"  
        
    ],
    image: "/images/Place.jpg",
    category: "IT Projects"
  },
  {
    title: "Real Estate Application ",
    icon: <Archive className="mr-2" />,
    details: [
      "real Estate App ",  
      "currently building",  
    ],
    image: "/images/Property.jpg",
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
  const categories = ['Development Projects', 'IT Projects', 'Building Processes'];
 
  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-purple-900 to-blue-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Reduced Header Section */}
        <h1 className="text-4xl font-bold text-center mb-4">🚀 Projects</h1>
        <p className="text-lg italic text-center mb-4">
          Here you will find a wide array of projects that I have led, created, or played an important role in
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4 bg-white rounded-lg overflow-hidden">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="py-1.5 px-3 text-sm text-[#5F3BB2] hover:bg-purple-100 data-[state=active]:bg-purple-200"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <ScrollArea className="h-[calc(100vh-180px)] w-full rounded-md">
                <div className="space-y-3 pr-4">
                  {projectsData
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <Card 
                        key={index} 
                        className="bg-gradient-to-br from-purple-800 to-blue-800 text-white border border-purple-300"
                      >
                        <div className="flex flex-col md:flex-row md:min-h-[160px]">
                          {/* Content Section */}
                          <div className="flex-1 p-4">
                            <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                              <span className="w-5 h-5 flex-shrink-0">
                                {project.icon || <FileText className="w-5 h-5" />}
                              </span>
                              <span>{project.title}</span>
                            </h3>
                            <div className="space-y-1.5">
                              {project.details.map((detail, detailIndex) => (
                                <p 
                                  key={detailIndex} 
                                  className="text-sm text-white/90 leading-relaxed"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Image Section */}
                          {project.image && (
                            <div className="relative md:w-1/3 md:max-w-[300px]">
                              <div className="h-[140px] md:h-full relative">
                                <Image 
                                  src={project.image} 
                                  alt={project.title}
                                  layout="fill"
                                  objectFit="cover"
                                  className="rounded-b-lg md:rounded-r-lg md:rounded-l-none"
                                />
                              </div>
                            </div>
                          )}
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

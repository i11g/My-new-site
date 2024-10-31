"use client"
import React, { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Rocket, Building, Archive, Warehouse, FileText,TestTube,ClipboardList, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
  category: 'Development Projects' | 'IT Projects' | 'Building Processes';
  githubLink?: string;
};

const projectsData: Project[] = [
  {
    title: "Workplace and Accomodation Strategy",
    icon: <Building className="mr-2 text-yellow-500" />,
    details: [
      "Purpose: To develop a modern and flexible work environment that unifies all headquarters teams",
      "Scale: The project encompasses 13,800 square meters distributed across eight headquarters buildings, representing a major organizational and optimizational transformation.",
      "Focus: The workspace design prioritizes employee well-being, collaboration, and company culture through modern and flexible solutions that foster creativity, communication, and enhanced productivity.",
    ], 
    image: "/images/workplace-project.jpg",
    category: "Development Projects"
  },
  {
    title: "Digital Factory Development",
    icon: <Building className="mr-2 text-yellow-500"  />,
    details: [
      "Purpose: To create a modern workspace environment that enables effective collaboration and agile development practices for digital factory and retail banking teams",
      "Scale: The project encompasses 3,800 square meters",
      "Focus: The project working zones focus on  flexibility and employee comfort while incorporating essential elements for agile methodology, such as collaboration spaces and adaptable work zones.",
    ],
    image: "/images/digital-factory.jpg",
    category: "Development Projects"
  },
  {
    title: "Construction of DSK Bank Centralized Warehouse",
    icon: <Warehouse className="mr-2 text-yellow-500" />,
    details: [
      "Purpose: To develop a state-of-the-art warehouse facility designed for efficient storage and management of over 1,000,000 documents.",
      "Scale: The project covers 2,700 square meters, strategically designed to maximize document storage and operational efficiency.",
      "Focus: The facility emphasizes modern document management systems and optimized storage solutions to maximazi storage capacity and ensure secure and accessible document archiving.",
    ],
    image: "",
    category: "Development Projects"
  },
  {
    title: "Centralization of DSK Bank archiving processes ",
    icon: <Archive className="mr-2 text-yellow-500" />,
    details: [
      "Purpose: To design and implement a centralized archive management system that streamlines document handling through digital transformation and process optimization.",  
      "Scale: The project encompasses the entire organization's archive management processes, focused on centralizing and standardizing documentation workflows.",
      "Focus: The initiative prioritizes efficiency through digitalization, implementing modern archive management solutions that optimize processes, reduce manual handling, and improve accessibility of archived materials.",
    ],
    image: "",
    category: "Building Processes"
  },
  {
    title: "Team leader in Odessos project as part of integration of DSK Bank and Express Bank ",
    icon: <Rocket className="mr-2 text-yellow-500" />,
    details: [
      "Purpose: To lead and execute the successful integration of DSK Bank and Express Bank through coordinated headquarters and unit relocations as part of the Odessos project.",  
      "Scale: The project encompasses the relocation and integration of multiple headquarters buildings and banking units, requiring careful coordination and planning.",
      "Focus: The initiative prioritizes seamless relocation of teams and units while maintaining operational continuity, ensuring minimal disruption to banking services during the integration process.",
    ],
        image: "",
    category: "Building Processes"
  },
  {
    title: "Development and implementation of Centralized Procurement Processes and creation of Budget Responsible Departments ",
    icon: <ClipboardList className="mr-2 text-yellow-500" />,
    details: [
      "Purpose: To develop and implement centralized procurement processes while establishing Budget Responsible Departments to enhance financial control and transparency across the organization.",  
      "Scale: The project spans company-wide procurement and budget management processes, impacting all departments and establishing new organizational structures.",
      "Focus: The initiative emphasizes creating transparent procurement procedures and empowering budget responsible departments to effectively manage assets and financial resources at both departmental and company-wide levels.",  
    ],
    image: "",
    category: "Building Processes"
  },
  {
    title: "Office Space Application ",
    icon: <Building className="mr-2 text-yellow-500" />,
    details: [
     "Purpose: To develop an intuitive office space management application that streamlines and simplifies workplace administration and resource allocation.",
     "Focus: The app prioritizes user-friendly interface and efficient functionality to help users manage office spaces, track resources, and optimize workplace utilization with ease and effectiveness.",
      "currently building"  
        
    ],
    image: "/images/Place.jpg",
    category: "IT Projects"
  },
  {
    title: "Real Estate Application ",
    icon: <Building className="mr-2 text-yellow-500" />,
    details: [
      "Purpose: To develop an integrated property management application that unifies space, real estate, investment projects, and facilities management in one comprehensive platform.",
      "Focus: The application streamlines property operations by integrating space utilization, real estate portfolio management, investment project tracking, and facilities maintenance into an one application",
      "currentlly building",
    ],
    image: "/images/Property.jpg",
    category: "IT Projects"
  },
  {
    title: "My QA Automation Projects",
    icon: <TestTube className="mr-2 text-yellow-500" />,
    details: [
      "Focus: The projects showcase practical implementation of QA automation techniques, testing frameworks, and best practices, through a collection of projects developed during my SoftUni coursework and projects", 
      

    ], 
    image: "",
    category: "IT Projects",
    githubLink: "https://github.com/i11g",
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
                                {project.icon || <FileText className="text-yellow-500 w-5 h-5"  />}
                              </span>
                              <span>{project.title}</span>                
                             {project.githubLink && (
                      <Link 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-2 text-purple-300 hover:text-white transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </Link> )} 

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
                                  fill
                                  className="rounded-b-lg md:rounded-r-lg md:rounded-l-none object-cover"
                                  sizes="(max-width: 768px) 100vw, 300px"
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

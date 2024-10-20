"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app//components/ui/tabs';
import { Rocket, Building, Archive, Warehouse, Users, PaintBucket, ShoppingCart, PieChart } from 'lucide-react';

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
    image: "/api/placeholder/400/300",
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
    image: "/api/placeholder/400/300",
    category: "IT"
  },
  // ... Add the rest of your projects here, including the category and image for each
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Business");

  const categories = ['Business', 'IT', 'Chemistry'];

  return (
    <section id="projects" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">🚀 Projects</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <div className="space-y-8">
                  {projectsData
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg bg-gradient-to-br from-purple-900 to-blue-900 text-white">
                        <div className="flex">
                          <div className="flex-grow">
                            <CardHeader>
                              <CardTitle className="text-xl flex items-center">
                                {project.icon}
                                {project.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc list-inside space-y-2">
                                {project.details.map((detail, detailIndex) => (
                                  <li key={detailIndex}>{detail}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </div>
                          <div className="w-1/3 p-4">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded" />
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
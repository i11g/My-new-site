import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Rocket, Building, Archive, Warehouse, Users, PaintBucket, ShoppingCart, PieChart } from 'lucide-react';

type Project = {
  title: string;
  icon: React.ReactNode;
  details: string[];
};

const projectsData: Project[] = [
  {
    title: "Workplace Advisory Project",
    icon: <Building className="mr-2" />,
    details: [
      "Focus: Development of new modern and flexible work environment for all HQ teams",
      "Net Area: 13,800 sq.m., spanning across four HQ buildings"
    ]
  },
  {
    title: "Digital Factory Development",
    icon: <Rocket className="mr-2" />,
    details: [
      "Objective: Creation of comfortable and modern office environment with identity and flexibility for agile development teams and tribes",
      "Number of FTE: 500",
      "Reconstructed Area: 3,800 sq.m."
    ]
  },
  {
    title: "Centralization of DSK Bank archiving processes and documents",
    icon: <Archive className="mr-2" />,
    details: [
      "Objective: Design and implementation of centralized process for archive management aiming process optimization, digitalization, and efficiency",
      "Project Scope: Over of 1,000,000 documents and 300 non-centralized archives"
    ]
  },
  {
    title: "Construction of DSK Bank Centralized Warehouse",
    icon: <Warehouse className="mr-2" />,
    details: [
      "Project Scope: Development of modern and automated central warehouse for close to 800,000 documents with office part for 30 FTE starting from scratch",
      "Development Area: 2,700 sq.m."
    ]
  },
  {
    title: "Team leader in Odessos project as part of integration of DSK Bank and Express Bank",
    icon: <Users className="mr-2" />,
    details: [
      "Responsibility: Leading the integration of HQ's buildings and units' relocations"
    ]
  },
  {
    title: "Reconstruction, rebranding and new vision implementation in 'DZI – General Insurance' and 'DZI – Life Insurance' offices",
    icon: <PaintBucket className="mr-2" />,
    details: [
      "Project Objective: Implementation of the new vision and work environment in 78 DZI offices",
      "Net area: 6,500 sq.m."
    ]
  },
  {
    title: "Development and implementation of Centralized Procurement Processes",
    icon: <ShoppingCart className="mr-2" />,
    details: [
      "Objective: Creation of centralized and transparent processes for procurement and assets management"
    ]
  },
  {
    title: "Creation and implementation of Budget Responsible Departments",
    icon: <PieChart className="mr-2" />,
    details: [
      "Objective: Development of budget management processes on a company level driven by budget responsible departments"
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">🚀 Projects</h1>
        
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
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
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Projects;
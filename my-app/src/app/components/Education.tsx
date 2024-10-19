import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { ChevronRight, GraduationCap, Award, BookOpen } from 'lucide-react';

type Education = {
  degree: string;
  area: string;
  university: string;
  universityUrl: string;
  department?: string;
  period: string;
};

type Honor = string;

type Training = {
  year: number;
  items: string[];
};

const educationData: Education[] = [
  {
    degree: "Ph.D. in Physical Science",
    area: "Supramolecular Chemistry",
    university: "The University of Iowa",
    universityUrl: "https://uiowa.edu/",
    department: "Department of Chemistry",
    period: "2003 - 2007"
  },
  // ... (other education entries)
];

const honors: Honor[] = [
  "Vice President of Missouri State University ACS Student Affiliate Chapter/Chemistry Honors Society",
  // ... (other honors)
];

const trainings: Training[] = [
  { year: 2021, items: ["New Service Vision Model - Anastasia Vladychynska Consulting"] },
  // ... (other trainings)
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">My Educational Journey</h1>
        
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="education" className="flex items-center"><GraduationCap className="mr-2" />Education</TabsTrigger>
            <TabsTrigger value="honors" className="flex items-center"><Award className="mr-2" />Honors</TabsTrigger>
            <TabsTrigger value="trainings" className="flex items-center"><BookOpen className="mr-2" />Trainings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education">
            <div className="grid gap-6 md:grid-cols-2">
              {educationData.map((edu, index) => (
                <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <CardTitle className="text-xl flex items-center">
                      <GraduationCap className="mr-2" />
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="font-semibold text-lg mb-2">{edu.area}</p>
                    <p>
                      <a href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                        {edu.university} <ChevronRight className="ml-1" size={16} />
                      </a>
                    </p>
                    {edu.department && <p className="text-gray-600">{edu.department}</p>}
                    <Badge variant="secondary" className="mt-4">{edu.period}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="honors">
            <Card>
              <CardHeader>
                <CardTitle>Academic Honors and Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <ul className="space-y-4">
                    {honors.map((honor, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="mr-2 flex-shrink-0 text-yellow-500" />
                        <span>{honor}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trainings">
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  {trainings.map((training, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{training.year}</h3>
                      <ul className="space-y-2">
                        {training.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <BookOpen className="mr-2 flex-shrink-0 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
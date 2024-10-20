import React from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ScrollArea } from '@/app/components/ui/scroll-area';

const Education = () => {
  const educationData = [
    {
      degree: "Ph.D. in Physical Science",
      area: "Supramolecular Chemistry",
      university: "The University of Iowa",
      universityUrl: "https://uiowa.edu/",
      department: "Department of Chemistry",
      period: "2003 - 2007"
    },
    {
      degree: "Ph.D. in Physical Science",
      area: "Supramolecular Chemistry",
      university: "The University of Iowa",
      universityUrl: "https://uiowa.edu/",
      department: "Department of Chemistry",
      period: "2003 - 2007"
    },
    {
      degree: "Ph.D. in Physical Science",
      area: "Supramolecular Chemistry",
      university: "The University of Iowa",
      universityUrl: "https://uiowa.edu/",
      department: "Department of Chemistry",
      period: "2003 - 2007"
    },
    {
      degree: "Ph.D. in Physical Science",
      area: "Supramolecular Chemistry",
      university: "The University of Iowa",
      universityUrl: "https://uiowa.edu/",
      department: "Department of Chemistry",
      period: "2003 - 2007"
    },
    {
      degree: "Ph.D. in Physical Science",
      area: "Supramolecular Chemistry",
      university: "The University of Iowa",
      universityUrl: "https://uiowa.edu/",
      department: "Department of Chemistry",
      period: "2003 - 2007"
    },
    
  ]

  type Honor = string;

  type Training = {
  year: number;
  items: string[];
   }; 

   const honors: Honor[] = [
    "Vice President of Missouri State University ACS Student Affiliate Chapter/Chemistry Honors Society",
    // ... (other honors)
  ];
  
  const trainings: Training[] = [
    { year: 2021, items: ["New Service Vision Model - Anastasia Vladychynska Consulting"] },
    // ... (other trainings)
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">My Educational Journey</h2>
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white">
            <TabsTrigger value="education" className="text-purple-900 data-[state=active]:bg-purple-100">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="honors" className="text-purple-900 data-[state=active]:bg-purple-100">
              <Award className="mr-2 h-4 w-4" />
              Honors
            </TabsTrigger>
            <TabsTrigger value="trainings" className="text-purple-900 data-[state=active]:bg-purple-100">
              <BookOpen className="mr-2 h-4 w-4" />
              Trainings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="education">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex items-center">
                      <GraduationCap className="mr-2" />
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{edu.area}</p>
                    <a href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {edu.university}
                    </a>
                    <p>{edu.department}</p>
                    <p className="text-sm text-gray-600">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>          
          <TabsContent value="honors">
            <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
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
            <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white border border-purple-300">
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
  )
}

export default Education
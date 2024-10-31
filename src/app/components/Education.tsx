import React from 'react'
import { GraduationCap, Award, BookOpen, Calendar} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ScrollArea } from '@/app/components/ui/scroll-area';

const Education = () => {
  const educationData = [
    {
      degree: "QA Autamation Engineer",
      area: "QA Automation Testing",
      university: "SoftUni University",
      universityUrl: "https://softuni.bg/",
      period: "2023 - 2024"
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
      degree: "Master of Economics",
      area: "Insurance and Social Security Management",
      university: "VUZF University",
      universityUrl: "https://vuzf.edu/",
      period: "2008 - 2011"
    },
    {
      degree: "M.S. in Organic Shemistry",
      area: "Organic Chemistry",
      university: "Missuori State University",
      universityUrl: "https://missouristate.edu/",
      department: "Department of Chemistry",
      period: "2002 - 2003"
    },
    {
      degree: "B.S. in Organic Shemistry",
      area: "Organic Chemistry, Mathematics",
      university: "Missuori State University",
      universityUrl: "https://missouristate.edu/",
      department: "Department of Chemistry",
      period: "2000 - 2002"
    },
    
  ]

  type Honor = string;

  type Training = {
  year: number;
  items: string[];
   }; 

   const honors: Honor[] = [
    "Vice President of Missouri State University ACS Student Affiliate Chapter/Chemistry Honors Society",     
    "American Chemical Society, Division of Inorganic Chemistry, Student Travel Award to the 232nd ACS National Meeting and Exposition, San Francisco, CA, 2006",
 "The University of Iowa Chemistry Department Travel Award to the 89th Canadian Chemistry Conference and Exhibition, Halifax, NS, Canada, 2006",
"Moderator at the 8th James F. Jacobsen Graduate Forum, Iowa City, IA, 2006",
"The University of Iowa Student Government Travel Award to International Symposium on Supramolecular Chemistry XIII, South Bend, IN, 2004",
" The University of Iowa Chemistry Department Travel Award to the 38th ACS Midwest Regional Meeting, Columbia, MO, 2003",
  ];
  
  const trainings: Training[] = [
    { year: 2023, items: ["Leadership Academy - Vladimir Borachev"] },
    { year: 2021, items: ["New Service Vision Model - Anastasia Vladychynska Consulting"] },
    { year: 2019, items: ["Facility management and energy services - Sofia University" ] },
    { year: 2018, items: ["Facility Management** - WIFI Bulgaria"] },
    { year: 2017, items: ["Record keeping, archiving, storage and usage of banks archiving documents according to the new normative acts** - International banking institute"] },
    { year: 2013, items: ["Effective financial markets negotiations** - OD&M Consulting"] },
    { year: 2011, items: [
      "Results achievements and relationship management** - In your Hands",
      "Targeting skills - In your Hands",
      "Leadership and teams' motivations** - In your Hands",
      "Delegations skills and monitoring** - In your Hands"
    ] },
    
  ];

  
  return (
    <section id="education" className="py-32 bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen">
       <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">📚 My Educational Journey</h2>
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white mb-6">
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
            <ScrollArea className="h-[calc(100vh-300px)] w-full rounded-md pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu, index) => (
                  <Card key={index} className="bg-gradient-to-br from-purple-800 to-blue-800 text-white border border-purple-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold flex items-center">
                        <GraduationCap className="mr-2 text-yellow-500" />
                        {edu.degree}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">{edu.area}</p>
                      <a href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                        {edu.university}
                      </a>
                      <p>{edu.department}</p>
                      <p className="text-sm text-gray-300">{edu.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>          
          <TabsContent value="honors">
            <Card className="bg-gradient-to-br from-purple-800 to-blue-800 text-white border border-purple-300">
              <CardHeader>
                <CardTitle>Academic Honors and Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-400px)] w-full rounded-md border p-4">
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
            <Card className="bg-gradient-to-br from-purple-800 to-blue-800 text-white border border-purple-300">
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-400px)] w-full rounded-md border p-4">
                  <ul className="space-y-4">
                    {trainings.map((training, index) => (
                      <li key={index}>
                        <div className="font-semibold flex items-center mb-2">
                          <Calendar className="mr-2 text-yellow-500" />
                          {training.year}
                        </div>
                        <ul className="space-y-2 ml-6">
                          {training.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <BookOpen className="mr-2 flex-shrink-0 text-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
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
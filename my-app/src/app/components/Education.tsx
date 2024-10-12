import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

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
  {
    degree: "Master of Economics",
    area: "Insurance and Social Security Management",
    university: "VUZF University",
    universityUrl: "https://vuzf.bg/",
    period: "2008 - 2011"
  },
  {
    degree: "M.S. in Organic Chemistry",
    area: "Organic Chemistry",
    university: "Missouri State University",
    universityUrl: "https://www.missouristate.edu/",
    department: "Department of Chemistry",
    period: "2002 - 2003"
  },
  {
    degree: "B.S. in Chemistry and Mathematics",
    area: "Organic Chemistry, Mathematics",
    university: "Missouri State University",
    universityUrl: "https://www.missouristate.edu/",
    department: "Department of Chemistry",
    period: "2000 - 2002"
  }
];

const honors: Honor[] = [
  "Vice President of Missouri State University ACS Student Affiliate Chapter/Chemistry Honors Society",
  "American Chemical Society, Division of Inorganic Chemistry, Student Travel Award to the 232nd ACS National Meeting and Exposition, San Francisco, CA, 2006",
  "The University of Iowa Chemistry Department Travel Award to the 89th Canadian Chemistry Conference and Exhibition, Halifax, NS, Canada, 2006",
  "Moderator at the 8th James F. Jacobsen Graduate Forum, Iowa City, IA, 2006",
  "The University of Iowa Student Government Travel Award to International Symposium on Supramolecular Chemistry XIII, South Bend, IN, 2004",
  "The University of Iowa Chemistry Department Travel Award to the 38th ACS Midwest Regional Meeting, Columbia, MO, 2003"
];

const trainings: Training[] = [
  { year: 2021, items: ["New Service Vision Model - Anastasia Vladychynska Consulting"] },
  { year: 2019, items: ["Facility management and energy services - Sofia University \"St. Kliment Ohridski\""] },
  { year: 2018, items: ["Facility Management - WIFI Bulgaria"] },
  { year: 2017, items: ["Record keeping, archiving, storage and usage of banks archiving documents according to the new normative acts - International banking institute"] },
  { year: 2013, items: ["Effective financial markets negotiations - OD&M Consulting"] },
  { year: 2011, items: ["Results achievements and relationship management - In your Hands", "Targeting skills - In your Hands"] },
  { year: 2010, items: ["Leadership and teams' motivations - In your Hands", "Delegations skills and monitoring - In your Hands"] }
];

const EducationSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">📚 Education</h1>
      
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">🎓 {edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Area:</strong> {edu.area}</p>
              <p><strong>University:</strong> <a href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{edu.university}</a></p>
              {edu.department && <p><strong>Department:</strong> {edu.department}</p>}
              <p><strong>Period:</strong> {edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8">🏆 Honors</h2>
      <ul className="list-disc pl-5 space-y-2">
        {honors.map((honor, index) => (
          <li key={index}>{honor}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">📜 Trainings and Certifications</h2>
      {trainings.map((training, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-xl font-semibold">{training.year}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {training.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { BookOpen, FileText, Mic, Presentation } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="pt-20 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">📝 Publications</h1>

        <Tabs defaultValue="book" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="articles" className="flex items-center"><FileText className="mr-2" />Book Chapter&Articles</TabsTrigger>
            <TabsTrigger value="oral" className="flex items-center"><Mic className="mr-2" />Oral Presentations</TabsTrigger>
            <TabsTrigger value="poster" className="flex items-center"><Presentation className="mr-2" />Poster Presentations</TabsTrigger>
          </TabsList>

          
          <TabsContent value="articles">
            <Card> 
            <CardHeader>
                <CardTitle>Book Chapter</CardTitle>
              </CardHeader>
              <CardContent>
                <p>"Metal-organic frameworks with photochemical building units", in <em>Metal-Organic Frameworks: Design and Application</em>, Wiley-VCH, 2011, 301-312; Sumrak, J.C.; Georgiev, I.G.; MacGillivray, L.R.</p>
              </CardContent>
              <CardHeader>
                <CardTitle>Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <ol className="list-decimal list-inside space-y-4">
                    <li>"Stereospecific and quantitative photodimerisation of terminal olefins in the solid state", Georgiev, I.G.; Bucar, D.; MacGillivray, L.R. <em>Chem. Comm.</em>, 2010, 46, 4956.</li>
                    <li>"Supramolecular Control of Reactivity in the Solid State: From Templates to Ladderanes to Metal-Organic Frameworks", MacGillivray, L.R.; Frišcic, T.; Papaefstathiou, G.S.; Hamilton, T.D.; Bucar, D.; Chu, Q.L.; Varshney, D.B.; Georgiev, I.G. <em>Acc. Chem. Res.</em>, 2008, 41, 280.</li>
                    {/* Add the rest of the articles here */}
                  </ol>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="oral">
            <Card>
              <CardHeader>
                <CardTitle>Oral Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">2007</h3>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Georgiev, I. G.; MacGillivray, L. R. "Design and Synthesis of Reactive Solid-State Materials", 233rd ACS National Meeting and Exposition, Chicago, IL.</li>
                        <li>Georgiev, I. G. "Reactive Solid-State Materials: From Molecular Co-Crystals to Functional Solids", Abbott Laboratories, Chicago, IL.</li>
                      </ul>
                    </div>
                    {/* Add the rest of the years and presentations here */}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="poster">
            <Card>
              <CardHeader>
                <CardTitle>Poster Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div>
                    <h3 className="text-lg font-semibold">2006</h3>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                      <li>Georgiev, I. G.; MacGillivray, L. R. "Template-directed Solid-state Synthesis of an Extended Organic Building Blocks", presented at 15th Annual Center for Biocatalysis and Bioprocessing Conference, Iowa City, IA.</li>
                      <li>Georgiev, I. G.; MacGillivray, L. R. "Supramolecular Design of Photoactive Assemblies: Synthesis, Materials Characterization and Reactivity", presented at American Crystallographic Association Meeting, Honolulu, HI.</li>
                    </ul>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Publications;
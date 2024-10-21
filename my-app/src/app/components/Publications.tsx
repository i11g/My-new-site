import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { BookOpen, FileText, Mic, Presentation } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="pt-20 pb-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">📝 Publications</h1>
        <Tabs defaultValue="articles" className="w-full text-purple-900 data-[state=active]:bg-purple-100">
          <TabsList className="grid w-full grid-cols-2 text-purple-900 data-[state=active]:bg-purple-100">
            <TabsTrigger value="articles" className="flex items-center text-purple-900 data-[state=active]:bg-purple-100">
              <BookOpen className="mr-2" />Book Chapters & Articles
            </TabsTrigger>
            <TabsTrigger value="presentations" className="flex items-center text-purple-900 data-[state=active]:bg-purple-100">
              <Presentation className="mr-2" />Presentations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle>Book Chapters & Articles</CardTitle>
              </CardHeader>
              <CardContent className="bg-gradient-to-br from-purple-900 to-blue-900 text-white  border-2 border-purple-800">
                <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">Book Chapter</h3>
                      <p className="mt-2">"Metal-organic frameworks with photochemical building units", in <em>Metal-Organic Frameworks: Design and Application</em>, Wiley-VCH, 2011, 301-312; Sumrak, J.C.; Georgiev, I.G.; MacGillivray, L.R.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Articles</h3>
                      <ol className="list-decimal list-inside space-y-4 mt-2">
                        <li>"Stereospecific and quantitative photodimerisation of terminal olefins in the solid state", Georgiev, I.G.; Bucar, D.; MacGillivray, L.R. <em>Chem. Comm.</em>, 2010, 46, 4956.</li>
                        <li>"Supramolecular Control of Reactivity in the Solid State: From Templates to Ladderanes to Metal-Organic Frameworks", MacGillivray, L.R.; Frišcic, T.; Papaefstathiou, G.S.; Hamilton, T.D.; Bucar, D.; Chu, Q.L.; Varshney, D.B.; Georgiev, I.G. <em>Acc. Chem. Res.</em>, 2008, 41, 280.</li>
                        {/* Add the rest of the articles here */}
                      </ol>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="presentations">
            <Card>
              <CardHeader>
                <CardTitle>Presentations</CardTitle>
              </CardHeader>
              <CardContent className="bg-gradient-to-br from-purple-900 to-blue-900 text-white  border-2 border-purple-800">
                <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">Oral Presentations</h3>
                      <div className="mt-2 space-y-4">
                        <div>
                          <h4 className="font-medium">2007</h4>
                          <ul className="list-disc list-inside mt-1 space-y-2">
                            <li>Georgiev, I. G.; MacGillivray, L. R. "Design and Synthesis of Reactive Solid-State Materials", 233rd ACS National Meeting and Exposition, Chicago, IL.</li>
                            <li>Georgiev, I. G. "Reactive Solid-State Materials: From Molecular Co-Crystals to Functional Solids", Abbott Laboratories, Chicago, IL.</li>
                          </ul>
                        </div>
                        {/* Add more years and presentations here */}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Poster Presentations</h3>
                      <div className="mt-2 space-y-4">
                        <div>
                          <h4 className="font-medium">2006</h4>
                          <ul className="list-disc list-inside mt-1 space-y-2">
                            <li>Georgiev, I. G.; MacGillivray, L. R. "Template-directed Solid-state Synthesis of an Extended Organic Building Blocks", presented at 15th Annual Center for Biocatalysis and Bioprocessing Conference, Iowa City, IA.</li>
                            <li>Georgiev, I. G.; MacGillivray, L. R. "Supramolecular Design of Photoactive Assemblies: Synthesis, Materials Characterization and Reactivity", presented at American Crystallographic Association Meeting, Honolulu, HI.</li>
                          </ul>
                        </div>
                        {/* Add more years and presentations here */}
                      </div>
                    </div>
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
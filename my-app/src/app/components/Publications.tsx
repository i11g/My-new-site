import React from 'react';
import { Card, CardContent, } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { BookOpen, Presentation } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 pb-20 min-h-screen">
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
              
              <CardContent className="bg-gradient-to-br from-purple-900 to-blue-900 text-white  border-2 border-purple-800">
                <ScrollArea className="h-[calc(100vh-300px)] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">Book Chapter</h3>
                      <p className="mt-2">&quot;Metal-organic frameworks with photochemical building units&quot;, in <em>Metal-Organic Frameworks: Design and Application</em>, Wiley-VCH, 2011, 301-312; Sumrak, J.C.; Georgiev, I.G.; MacGillivray, L.R.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Articles</h3>
                      <ol className="list-decimal list-inside space-y-4 mt-2">
                      <li>&quot;Stereospecific and quantitative photodimerisation of terminal olefins in the solid state&quot;, Georgiev, I.G.; Bucar, D.; MacGillivray, L.R. <em>Chem. Comm.</em>, 2010, 46, 4956.</li>
                  <li>&quot;Supramolecular Control of Reactivity in the Solid State: From Templates to Ladderanes to Metal-Organic Frameworks&quot;, MacGillivray, L.R.; Frišcic, T.; Papaefstathiou, G.S.; Hamilton, T.D.; Bucar, D.; Chu, Q.L.; Varshney, D.B.; Georgiev, I.G. <em>Acc. Chem. Res.</em>, 2008, 41, 280.</li>
                  <li>&quot;Template-Controlled Reactivity in the Organic Solid State by Principles of Coordination-Driven Self-Assembly&quot;, Bucar, D.; Papaefstathiou, G.S.; Hamilton, T.D.; Chu, Q.L.; Georgiev, I.G.; MacGillivray, L.R. <em>Eur. J. Inor. Chem.</em>, 2007, 29, 4559.</li>
                  <li>&quot;Metal-mediated reactivity in the organic solid state: from self-assembled complexes to metal-organic frameworks&quot;, Georgiev, I.G.; MacGillivray, L.R. <em>Chem. Soc. Rev.</em>, 2007, 36, 1239.</li>
                  <li>&quot;Directed Assembly and Reactivity of Olefins within a One-dimensional Ladder-like Coordinational Polymer Based on Dinuclear Zn(II) Platform&quot;, Papaefstathiou, G.S.; Georgiev, I.G.; Frišcic, T.; MacGillivray, L.R. <em>Chem. Comm.</em>, 2005, 3974.</li>
                  <li>&quot;Synthesis and Structure of an Unusual Complex Formed Between 1,2-bis(3&apos;-pyrimidyl)ethyne and C-methylcalix[4]resorcinarene&quot;, Georgiev, I.G.; Bosch, E.; Barnes, C.L. <em>J. Chem. Crystallogr.</em>, 2004, 34, 859.</li>
                  <li>&quot;The Quest of Chain-linked Hydrogen-bonded Capsules: Self-assembly of C-methylcalix[4]resorcinarene and 1,2-bis(5&apos;-pyrimidyl)ethyne&quot;, Georgiev, I.G.; Bosch, E.; Barnes, C.L.; Draganjach, M. <em>Cryst. Grow. Des.</em>, 2004, 4, 235.</li>
                  <li>&quot;Synthesis of Honeycomb Coordination Networks by Self-assembly of the Tetradentate Ligand 1,2-bis(5&apos;-dipyrimidyl)ethyne with Copper(I) halides&quot;, Georgiev, I.G., Barnes, C.L., Bosch, E.J. <em>Supramol. Chem.</em>, 2001, 1, 153.</li>
                </ol>
                                              
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="presentations">
            <Card>              
              <CardContent className="bg-gradient-to-br from-purple-900 to-blue-900 text-white  border-2 border-purple-800">
                <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">Oral Presentations</h3>
                      <div className="mt-2 space-y-4">
                        <div>
                          <h4 className="font-medium">2007</h4>
                          <ul className="list-disc list-inside mt-1 space-y-2">
                          <li>Georgiev, I. G.; MacGillivray, L. R. &quot;Design and Synthesis of Reactive Solid-State Materials&quot;, 233rd ACS National Meeting and Exposition, Chicago, IL.</li>
                      <li>Georgiev, I. G. &quot;Reactive Solid-State Materials: From Molecular Co-Crystals to Functional Solids&quot;, Abbott Laboratories, Chicago, IL.</li>
                    </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">2006</h4>
                          <ul className="list-disc list-inside mt-1 space-y-2">
                            <li>Georgiev, I. G.; MacGillivray, L. R. “Metal-mediated Reactivity within Organic Solids&quot;, presented at 41st ACS Midwest Regional Meeting, Quincy, IL.</li>
                            <li>Georgiev, I. G.; MacGillivray, L. R. “Control of Reactivity within Metal-organic Solids&quot;, presented at 232nd ACS National Meeting and Exposition, San Francisco, CA.</li>
                            <li>Georgiev, I. G.; MacGillivray, L. R. “Photoactive Metal-organic Coordination Assemblies&quot;, presented at 37th ACS Great Lakes Regional Meeting, Milwaukee, WI.</li>
                            <li>Georgiev, I. G.; MacGillivray, L. R. “Design and Synthesis of Photoactive Supramolecular Complexes Based on Coordination-driven Self-assembly&quot;, presented at 89th Canadian Chemistry Conference and Exhibition, Halifax, NS, Canada.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">2005</h4>
                          <ul className="list-disc list-inside mt-1 space-y-2">
                            <li>Georgiev, I. G.; Papaefstathiou, G. S.; MacGillivray, L. R. &quot;Design of New Materials Based on Metal-organic Template Directed [2+2] Photodimerization in the Solid State&quot;, presented at Midwest Organic Solid-State Chemistry Symposium XVI, Purdue, IN.</li>
                            <li>Georgiev, I. G.; Papaefstathiou, G. S.; MacGillivray, L. R. &quot;Tetranuclear Metal-organic Templates that Direct Reactivity in the Organic Solid-state&quot;, presented at 40th ACS Midwest Regional Meeting, Joplin, MO.</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Poster Presentations</h3>
                      <div className="mt-2 space-y-4">
                        <div>
                          <h4 className="font-medium">2006</h4>
                          <ul className="list-disc list-inside mt-1 space-y-2">
                            <li>Georgiev, I. G.; MacGillivray, L. R. &quot;Template-directed Solid-state Synthesis of an Extended Organic Building Blocks&quot;, presented at 15th Annual Center for Biocatalysis and Bioprocessing Conference, Iowa City, IA.</li>
                            <li>Georgiev, I. G.; MacGillivray, L. R. &quot;Supramolecular Design of Photoactive Assemblies: Synthesis, Materials Characterization and Reactivity&quot;, presented at American Crystallographic Association Meeting, Honolulu, HI.</li>
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
import React from 'react';
import ExperienceSection from '@/app/components/Experience';

export const metadata = {
  title: 'Professional Experience | Your Name',
  description: 'Professional experience and career history of Your Name',
};

const ExperiencePage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <ExperienceSection />
    </main>
  );
};

export default ExperiencePage;
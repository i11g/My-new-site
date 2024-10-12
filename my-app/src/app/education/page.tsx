import React from 'react';
import EducationSection from '@/app/components/Education';

export const metadata = {
  title: 'Education | Your Name',
  description: 'Educational background and achievements of Your Name',
};

const EducationPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <EducationSection />
    </main>
  );
};

export default EducationPage;
import React from 'react';

export function Tutorial() {
  return (
    <section className="py-16 px-8 bg-[#E2CEB1]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: 'Enter Your Prompt',
              description:
                'Write a detailed description of what you want to achieve.',
            },
            {
              step: 2,
              title: 'Upload Resources',
              description:
                'Add any relevant images or files to enhance the output.',
            },
            {
              step: 3,
              title: 'Get Results',
              description:
                'Receive your AI-generated results in seconds.',
            },
          ].map(({ step, title, description }) => (
            <div
              key={step}
              className="bg-[#FDFCE8] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#003366] text-white rounded-full flex items-center justify-center mb-4">
                {step}
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-[#003366]/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
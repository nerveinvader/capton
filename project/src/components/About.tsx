import React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 px-8 bg-[#E2CEB1]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xl mb-8">
            Our mission is to make AI technology accessible and useful for
            everyone, empowering individuals and businesses to achieve more.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'Pushing the boundaries of what\'s possible with AI.',
              },
              {
                title: 'Reliability',
                description:
                  'Enterprise-grade infrastructure you can depend on.',
              },
              {
                title: 'Security',
                description:
                  'Your data is protected with industry-leading measures.',
              },
              {
                title: 'Support',
                description:
                  'Expert assistance available when you need it.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-left">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-[#003366]/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
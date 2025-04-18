import React from 'react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Ideas Into Reality
        </h1>
        <p className="text-xl text-[#003366]/70 max-w-2xl mx-auto mb-8">
          Experience the power of AI-driven solutions that help you achieve more
          with less effort.
        </p>
      </div>
    </section>
  );
}
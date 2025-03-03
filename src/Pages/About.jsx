import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-4xl text-primary-content font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas.
        Incidunt, pariatur, magnam veritatis quibusdam iste eos quis sint
        dolores id, corporis sapiente officia iusto. Laudantium minima
        reiciendis pariatur rem ut. Eaque nemo dignissimos explicabo laudantium
        minus voluptatibus fuga dolore.
      </p>
    </>
  );
};

export default About;

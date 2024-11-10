import React from "react";

const ImpactStory = () => {
  return (
    <section className={`vertical-padding horizontal-padding bg-gray-100`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="section-heading mb-4">A New Dawn with Solar Power</h2>
          <p className="text-lg mb-4">
            Pervaiz and Nasreen’s lives have transformed. No longer burdened by
            surprise bills or power cuts, they rely on consistent electricity.
          </p>
          <blockquote className="italic text-gray-600">
            “It’s like a weight lifted off our shoulders,” Pervaiz shared, his
            usual composure giving way to emotion.
          </blockquote>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/assets/image-8.jpeg"
            alt="Family benefiting from solar power"
            className="rounded-lg shadow-lg lg:h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStory;

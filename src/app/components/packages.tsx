import React from 'react';

const Packages = () => {
  const packageData = [
    {
      title: "In a Same City",
      description: "Ideal for those looking for matches within the same city. We focus on local connections for easier and more convenient meetings.",
    },
    {
      title: "Out of City",
      description: "Our out-of-city package connects you with potential matches from different cities, expanding your search for the perfect match.",
    },
    {
      title: "Middle East",
      description: "Tailored for clients in the Middle East, we bring together individuals with shared cultural values and backgrounds.",
    },
    {
      title: "European Countries",
      description: "Focusing on matches in European countries, we connect individuals who want to explore cross-cultural relationships.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-10 text-white mt-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Matchmaking Packages</h2>
      <p className="text-center mb-8">
  We offer a wide range of matchmaking options, connecting individuals with well-educated and settled families across various regions. Whether you are looking for someone in the same city, from a different area, or even abroad, we have a diverse network of eligible matches from all backgrounds.
</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {packageData.map((pkg, index) => (
          <div
            key={index}
            className="bg-red-600 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-red-700"
          >
            <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
            <p>{pkg.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;

import Packages from '@/app/components/packages';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="max-w-6xl m-auto px-5 py-10 text-white">
      <h2 className="text-3xl font-semibold text-center mb-5">About Zehra Ali Matchmaking</h2>
      <p className="text-center mb-8">
        With a heart for connection and years of experience, Zehra Ali has brought families together with care, respect, and an eye for true compatibility.
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-10">
        {/* Mission and Values Section */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
          <p>
            We are dedicated to helping individuals find meaningful, lasting relationships through a thoughtful, personalized approach.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-medium mb-4">Our Values</h3>
          <ul className="list-disc ml-6">
            <li>Confidentiality & Respect</li>
            <li>Personalized Matchmaking</li>
            <li>Commitment to Happiness</li>
            <li>Building Trusting Connections</li>
          </ul>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Card 1 */}
        <div className="bg-red-500 text-white rounded-lg overflow-hidden border-2 border-white shadow-lg">
          <Image src="/images/card1.jpeg" width={500} height={300} alt="Card Image 1" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p>Our team dedicates time to understand each individual’s preferences.</p>
            <p>We strive to provide matches that align with values and goals.</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-red-500 text-white rounded-lg overflow-hidden border-2 border-white shadow-lg">
          <Image src="/images/card2.jpeg" width={500} height={300} alt="Card Image 2" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Confidentiality</h3>
            <p>We handle all interactions with the utmost discretion and privacy.</p>
            <p>Clients can feel secure and comfortable throughout the process.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-red-500 text-white rounded-lg overflow-hidden border-2 border-white shadow-lg">
          <Image src="/images/card3.webp" width={500} height={300} alt="Card Image 3" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Long-Term Happiness</h3>
            <p>Our matches are crafted for compatibility and long-term joy.</p>
            <p>We prioritize happiness that lasts beyond the initial meeting.</p>
          </div>
        </div>
      </div>
      <Packages/>
    </section>
  );
};

export default About;

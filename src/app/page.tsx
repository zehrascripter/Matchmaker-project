import Link from 'next/link';
import React from 'react'

const Page = () => {
  return (
    <div className='max-w-6xl m-auto'>
    <section
      className="text-gray-600 body-font bg-cover bg-center bg-no-repeat mt[-200px] "
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '90vh',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <div className="container max-w-6xl mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-3xl title-font sm:text-4xl md:text-4xl mb-4 font-medium text-white">
          Welcome to Zehra Ali Matchmaking Services
          </h1>
          <p className="mb-8 leading-relaxed text-white text-xl">
          Helping You Find True Love with Care & Expertise
At Zehra Ali Matchmaking, we believe that love is a journey that should be meaningful, personal, and guided with care. With years of experience in connecting people, we are dedicated to finding the perfect match for you. Our personalized approach ensures that every match is based on shared values, compatibility, and long-term happiness.
          </p>
          <div className="flex justify-center">
        <Link href="/pages/contact">
    <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mb-[200px]">
        Contact Us
    </button>
</Link>

          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Page;

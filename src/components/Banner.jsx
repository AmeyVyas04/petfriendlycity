import React from 'react';

function Banner() {
  return (
    <div className="bg-[#FDFCFB] min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3D8361] mb-6 leading-tight drop-shadow-md">
          🐾 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D8361] to-[#FFC107]">
            Building a Pet-Friendly City Together!
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[#444444] mb-10 px-4">
          Join us in making our city a safe, welcoming haven for pets and their humans.
          From parks to cafes, let’s make space for paws everywhere!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          
          <a href='https://forms.visme.co/formsPlayer/vdzk3vgj-volunteer-registration-form' target='_blank'>
          <button className="bg-[#FFC107] hover:bg-[#e0aa05] text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform hover:scale-105">
            Volunteer Now
          </button>
          </a>
          
        </div>
      </section>

      {/* Hero Image */}
      <section className="mt-16">
        <img
          src="/banner.jpg"
          alt="Pet-friendly city visual"
          className="w-[300px] sm:w-[500px] rounded-xl shadow-2xl border-4 border-[#F9E7D9]"
        />
      </section>

    </div>
  );
}

export default Banner;

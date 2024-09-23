import React from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { FaWheelchair } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 bg-[#2ECC71] horizontal-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-6">
      <div className="flex flex-col items-center gap-3">
        <MdOutlineVolunteerActivism className="text-white text-5xl" />
        <h2 className="text-2xl 2xl:text-3xl font-bold">Volunteering</h2>
        <p className="text-center text-base 2xl:text-lg">
          Act of an individual or group freely giving time and labor, often for
          community service.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GoGlobe className="text-white text-5xl" />
        <h2 className="text-2xl 2xl:text-3xl font-bold">Environment</h2>
        <p className="text-center text-base 2xl:text-lg">
          The natural environment or natural world encompasses all living and
          non-living things.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <FaWheelchair className="text-white text-5xl" />
        <h2 className="text-2xl 2xl:text-3xl font-bold">Senior Caring</h2>
        <p className="text-center text-base 2xl:text-lg">
          Term that includes a myriad of services that can be provided to
          seniors and elder.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GiReceiveMoney className="text-white text-5xl" />
        <h2 className="text-2xl 2xl:text-3xl font-bold">Donations</h2>
        <p className="text-center text-base 2xl:text-lg">
          Including money, alms, services, or goods such as clothing, toys,
          food, or vehicles
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;

import React from 'react';
import Image from 'next/image';
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCircleDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-16">
        {/* Main Grid for Left and Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/bl.jpg")', // Replace with your left card image URL
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">The Best Platform for Car Rental</h2>
            <p className="text-white mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/koen.png" // Replace with your image path
              alt="Car"
              width={340}
              height={108}
              className="mt-4 mx-auto object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/br.jpg")', // Replace with your right card image URL
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Easy way to rent a car at a low price</h2>
            <p className="text-white mb-6">Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/nisaan.png" // Replace with your image path
              alt="Car"
              width={340}
              height={108}
              className="mt-4 mx-auto object-cover"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2 flex items-center">
              <FaCircleDot className="mr-2 text-blue-500" />
              Pick-Up
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-lg font-bold mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Date</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your Date</option>
                  <option>08-12-2024</option>
                  <option>09-12-2024</option>
                  <option>10-12-2024</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Time</label>
                <select className="w-full border rounded-md p-2">
                 {/* 12 Hour Time Options with AM/PM */}
                 <option value="12:00 AM">12:00 AM</option>
                  <option value="01:00 AM">01:00 AM</option>
                  <option value="02:00 AM">02:00 AM</option>
                  <option value="03:00 AM">03:00 AM</option>
                  <option value="04:00 AM">04:00 AM</option>
                  <option value="05:00 AM">05:00 AM</option>
                  <option value="06:00 AM">06:00 AM</option>
                  <option value="07:00 AM">07:00 AM</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                  <option value="11:00 PM">11:00 PM</option>
                  <option value="12:00 PM">12:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="mt-4 md:mt-0">
            <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600">
              <HiArrowsUpDown />
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2 flex items-center">
              <FaCircleDot className="mr-2 text-blue-500" />
              Drop-Off
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-lg font-bold mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Date</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your Date</option>
                  <option>08-12-2024</option>
                  <option>09-12-2024</option>
                  <option>10-12-2024</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Time</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your Time</option>
                  {/* 12 Hour Time Options with AM/PM */}
                  <option value="12:00 AM">12:00 AM</option>
                  <option value="01:00 AM">01:00 AM</option>
                  <option value="02:00 AM">02:00 AM</option>
                  <option value="03:00 AM">03:00 AM</option>
                  <option value="04:00 AM">04:00 AM</option>
                  <option value="05:00 AM">05:00 AM</option>
                  <option value="06:00 AM">06:00 AM</option>
                  <option value="07:00 AM">07:00 AM</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                  <option value="11:00 PM">11:00 PM</option>
                  <option value="12:00 PM">12:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

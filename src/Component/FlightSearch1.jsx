import { IoMdDownload } from 'react-icons/io';
import { GiTripleBeak } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import React, { useState } from 'react'
import { FaUserCircle, FaAngleUp } from 'react-icons/fa';
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { RiFlightLandLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { PiSeatFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";


const FlightSearch1 = () => {
  const [tripType, setTripType] = useState('one-way');
  return (
    <div className="min-h-screen bg-cover  " style={{ backgroundImage: 'url(https://www.fourwheeldriveindia.com/public/storage/media/blog/13178.jpg)' }}>
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-16">
        <div className="text-3xl font-bold text-black">TravoMile</div>
        <nav className="space-x-6 text-black font-[500]">
          <a href="#" className="hover:text-[#c2a070]">Destinations</a>
          <a href="#" className="hover:text-[#c2a070]">AI Guide</a>
          <a href="#" className="hover:text-[#c2a070]">Contact Us</a>
          <a href="#" className="hover:text-[#c2a070]">Blogs</a>
        </nav>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <img src="/path-to-profile.jpg" alt="Profile" className="w-6 h-6 rounded-full" />
            <span className="text-yellow-600 font-bold">500</span>
          </div>
          <span className="relative text-gray-700">
            <i className="fas fa-bell"></i>
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white px-1 rounded-full">2</span>
          </span>
          <div className="flex space-x-2">
            <div className="flex items-center p-2 bg-gray-100 rounded-md">
              <GiTripleBeak className="text-2xl  mr-1" />
              <span>My Trips</span>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-md">
              <IoMdDownload className="text-2xl mr-1" />
              <span>Download App</span>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-md">
              <FaUserCircle className="text-2xl text-yellow-500 mr-1" />
              <span>Abhigyan</span>
              <span className='ml-1'><FaAngleUp /></span>
            </div>
          </div>
        </div>
      </header>

      {/* Flight Search Form */}
      <div className="container mx-auto p-6 mt-10 bg-white bg-opacity-80 rounded-lg shadow-lg relative">
        {/* Tabs */}
        <span className=" absolute -top-5 left-6 inline-flex items-center justify-center space-x-1 px-5 py-1 bg-black text-yellow-400 rounded-3xl font-semibold hover:bg-gray-800 cursor-pointer">
          <span className="transform rotate-45">
            <MdFlight />
          </span>
          <span>Flights</span>
        </span>
        {/* Trip Type */}
        <div className="flex space-x-6 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="tripType"
              checked={tripType === 'one-way'}
              onChange={() => setTripType('one-way')}
            />
            One Way
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="tripType"
              checked={tripType === 'round-trip'}
              onChange={() => setTripType('round-trip')}
            />
            Round Trip
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="tripType"
              checked={tripType === 'multi-city'}
              onChange={() => setTripType('multi-city')}
            />
            Multi City
          </label>
        </div>

        {/* Flight Details */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-6">
          {/* From */}
          <div className=" flex flex-col col-span-1 py-3  rounded-lg bg-gray-100">
            <span className="inline-flex ml-2 gap-x-2 items-center  ">
              <MdOutlineFlightTakeoff className='text-xl' />
              <label className="block text-gray-600 ">From</label>
            </span>
            <div className=" pl-2 flex flex-col ">
              <span className='text-3xl pt-2  font-semibold'>New Delhi</span>
              <span className='pt-2'>(DEL), Indira Gandhi Internat...</span>
            </div>
          </div>

          {/* To */}
          <div className=" flex flex-col col-span-1 py-3  rounded-lg bg-gray-100">
            <span className="inline-flex ml-2 gap-x-2 items-center  ">
              <RiFlightLandLine className='text-xl' />
              <label className="block text-gray-600 ">To</label>
            </span>
            <div className=" pl-2 flex flex-col ">
              <span className='text-3xl pt-2  font-semibold'>Mumbai</span>
              <span className='pt-2'>(BOM),Chhatrapati Shivaji Inte.</span>
            </div>
          </div>

          {/* Departure */}
          <div className=" flex flex-col col-span-1 py-3  rounded-lg bg-gray-100">
            <span className="inline-flex ml-2 gap-x-2 items-center  ">
              <SlCalender className='text-xl' />
              <label className="block text-gray-600 ">Departure</label>
            </span>
            <div className=" pl-2 flex flex-col ">
              <span className='text-3xl pt-2  font-semibold'>22 <small className='text-lg font-none'>Jan'2024</small> </span>
              <span className='pt-2'>Monday</span>
            </div>
          </div>

          {/* Return */}
          <div className=" flex flex-col col-span-1 py-3  rounded-lg bg-gray-100">
            <span className="inline-flex ml-4 gap-x-2 items-center  ">
              <SlCalender className='text-xl' />
              <label className="block text-gray-600 ">Return</label>
            </span>
            <span className='pt-4 pl-4 text-xl'>Add Return Trip</span>
          </div>

          {/* travellers */}
          <div className=" flex flex-col col-span-1 py-3  rounded-lg bg-gray-100">
            <span className="inline-flex ml-2 gap-x-2 items-center  ">
              <PiSeatFill className='text-xl' />
              <label className="block text-gray-600 ">Travellers | Class</label>
            </span>
            <div className=" pl-2 flex flex-col ">
              <span className='text-3xl pt-2  font-semibold'>1 <small className='text-lg font-none'>Adult</small> </span>
              <span className='pt-2'>Economy</span>
            </div>
          </div>
        </div>

        {/* Special Fares */}
        <div className="flex space-x-6 text-black">
          <span>Special Fares (Optional):</span>
          <label className="flex items-center">
            <input type="radio" className="mr-2 " name="fareType" defaultChecked />
            Regular
          </label>
          <label className="flex items-center">
            <input type="radio" className="mr-2" name="fareType" />
            Armed Forces
          </label>
          <label className="flex items-center">
            <input type="radio" className="mr-2" name="fareType" />
            Student
          </label>
          <label className="flex items-center">
            <input type="radio" className="mr-2" name="fareType" />
            Senior Citizen
          </label>
          <label className="flex items-center">
            <input type="radio" className="mr-2" name="fareType" />
            Doctors & Nurses
          </label>
          {/* Search Button */}
          <span className="absolute right-5 bottom-3 inline-flex items-center justify-center space-x-1 px-4 py-2 bg-black text-yellow-400 rounded-3xl font-semibold  cursor-pointer">
            <span className="text-xl font-extrabold">
            <CiSearch />
            </span>
            <span className='text-2xl'>Search</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FlightSearch1
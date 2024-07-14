"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo-white.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div className="flex justify-between items-center md:p-3 md:px-10 bg-white text-black text-sm">
        <div>
          <Image src={logo} alt="Al Bayt Hospital" width={200} />
        </div>
        <div className="flex gap-5">
          <div className="flex justify-center items-center gap-1">
            <div>
              <IoCallOutline className="text-2xl" />
            </div>
            <div>
              <div>01828-996215</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div>
              <CiClock2 className="text-2xl" />
            </div>
            <div>
              <div>24/7</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div>
              <CiLocationOn className="text-2xl" />
            </div>
            <div className="max-w-48 items-end">
              <div className="text-wrap ">
                249/1, Hamida Tower, South Jatrabari, Dhaka-1204
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className={`fixed top-0 left-0 w-full px-4 transition-colors duration-300 ${
          scrolled ? "bg-green-900 text-white" : "bg-transparent text-white"
        }`}
      >
        <div className="flex justify-between items-center p-3 md:pl-10 ">
          <div>
            <div>
              <Image
                src={"/logo-white.png"}
                alt="IUTPS"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div>Home</div>
            <div>Doctors</div>
            <div>Services</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <button className="bg-white hover:scale-105 scale-95 rounded-md p-2 text-center text-black border hover:bg-pink-600 hover:text-black hover:border-pink-600 transition duration-300">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { FaUser, FaCoins, FaCalendarDay, FaUsers, FaUserClock, FaClock, FaChartSimple, FaFileLines, FaArrowsRotate, FaMagnifyingGlass, FaLaptop, FaHandshakeSimple, FaCircleDollarToSlot, FaFileExport, FaFileContract } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa"
import { useState, useRef, useEffect } from 'react';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItemClass = "relative group cursor-pointer flex flex-col items-center gap-1";
  const underlineSpan = (
    <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:left-0 group-hover:w-full transform -translate-x-1/2 group-hover:translate-x-0"></span>
  );

  return (
    <header className="px-5 py-3 flex justify-between items-center bg-white shadow-md relative z-20">
      <div className="logo flex-shrink-0">
        <img src="/images/logo/hcm-logo.png" alt="logo" className="h-16" />
      </div>

      <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </button>

      <div className={`menu absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 ${mobileOpen ? 'block' : 'hidden'} md:flex justify-between items-center`} ref={dropdownRef}>
        <ul className="flex flex-col md:flex-row gap-6 text-[#193f77] font-semibold">
          <li onClick={() => setOpenDropdown(openDropdown === 'features' ? null : 'features')} className={navItemClass}>
            <span className="relative group flex items-center gap-2">Features <FaCaretDown className="text-head-color" /></span>
            <div className={`absolute top-full left-0 w-full md:w-[55vw] bg-white shadow-lg p-5 rounded-lg z-10 origin-top transition-transform transition-opacity duration-300 ease-in-out transform ${openDropdown === 'features' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
              }`}>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h2 className="font-bold">Products</h2>
                  <ul className="flex flex-col items-start gap-3 mt-4 text-[#193f77]">
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaUser /></span><a href="/hr-software">HR Software</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaCoins /></span><a href="/payroll">Payroll Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaCalendarDay /></span><a href="/leave">Leave Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaClock /></span><a href="/attendence">Attendance Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaChartSimple /></span><a href="/performance">Performance Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaUsers /></span><a href="/employee">Employee Data</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaUserClock /></span><a href="/employee-engagement">Employee Engagement</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaArrowsRotate /></span><a href="/task">Task Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaMagnifyingGlass /></span><a href="/recruitement">Recruitment Software</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-bold">For Industry</h2>
                  <ul className="flex flex-col items-start gap-3 mt-4 text-[#193f77]">
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaMagnifyingGlass /></span><a href="/announcement">Announcement</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaCalendarDay /></span><a href="/ticket">Ticket Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaLaptop /></span><a href="/report">Report & Analytics</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaChartSimple /></span><a href="/">Productivity Lens</a></li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <img src="/images/logo/growth-chart.jpg" alt="Image" className="h-32" />
                  <p className="font-bold text-2xl text-center leading-tight">Automate HR and<br />Payroll Process</p>
                  <span className="text-sm text-center">Drive people and business<br />growth in your company.</span>
                  <button className="bg-[#193f77] w-4/5 p-2 text-white rounded-2xl">Get a Demo</button>
                </div>
              </div>
            </div>
          </li>

          {["About Us", "Pricing", "FAQs"].map((item, idx) => (
            <li key={idx} className={navItemClass}>
              <span className="relative group">{item} {underlineSpan}</span>
            </li>
          ))}


          <li onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')} className={navItemClass}>
            <span className="relative group flex items-center gap-2">Resources <FaCaretDown className="text-head-color" /></span>
            <div className={`absolute top-full left-0 w-full md:w-[45vw] bg-white shadow-lg p-5 rounded-lg z-10 origin-top transition-transform transition-opacity duration-300 ease-in-out transform ${openDropdown === 'resources' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
              }`}>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h2 className="font-bold">Products</h2>
                  <ul className="flex flex-col items-start gap-3 mt-4 text-[#193f77]">
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaChartSimple /></span><a href="/guidtoperformance">Guide to Performance Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaCircleDollarToSlot /></span><a href="/guidtopayroll">Guide to Payroll Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaFileExport /></span><a href="/">Resignation FNF</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaFileContract /></span><a href="/guidtoattandence">Guide to Attendance Management</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaCalendarDay /></span><a href="/">Guide to Ticket Management</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-bold">For Industry</h2>
                  <ul className="flex flex-col items-start gap-3 mt-4 text-[#193f77]">
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaFileLines /></span><a href="/hrms">HRMS</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><FaHandshakeSimple /></span><a href="/partners">Partners</a></li>
                    <li className="flex items-center gap-3"><span className="icon-circle"><MdQuestionMark /></span><a href="/">Human Maximizer Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className={navItemClass}>
            <span className="relative group"><a href="/contact">Contact Us</a> {underlineSpan}</span>
          </li>
        </ul>
      </div>

      <div className="login mt-4 md:mt-0 hidden sm:block">
        <button className="relative border-l-2 border-blue-900 border-r-2 border-blue-900 p-3 font-bold flex gap-3 items-center shadow-lg overflow-hidden group">
          <span className="z-10 flex text-head-color group-hover:text-white items-center gap-3"><FaUser className="text-blue-900 group-hover:text-white" /> <a href="/login">Login</a></span>
          <span className="absolute inset-0 w-full h-full bg-blue-900 transform scale-x-0 origin-center group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
        </button>
      </div>


    </header>
  );
}

export default Navbar;

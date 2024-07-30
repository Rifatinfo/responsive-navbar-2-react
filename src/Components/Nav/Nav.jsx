import { useState } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


const Nav = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', link: '/' },
    { name: 'DESTINATION', link: '/about' },
    { name: 'CREW', link: '/services' },
    { name: 'TECHNOLOGY', link: '/contact' }
  ];

  return (
    <nav className="flex items-center justify-between pt-5">
      <img src="src/assets/image/logo/logo.svg" alt="Logo" className="w-10 ml-7" />
      <div 
        onClick={() => setOpen(!open)}
        className="right-4 top-6 cursor-pointer text-white z-20 fixed text-2xl md:hidden duration-500 ease-linear" > 
        <span>
        {
          open ? <RxCross2 /> : <RiMenuUnfold2Fill />
        }
        </span>
      </div>
      <ul
        className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed md:h-auto h-screen top-0 md:top-auto duration-500 ease-linear ${
          open ? 'right-0' : 'right-[-100%]'
        }`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6"
          >
            <a href={link.link} className="text-white text-sm md:py-5 py-3 inline-block">
              <span className="font-bold mr-1.5">0{index + 1}</span>{link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

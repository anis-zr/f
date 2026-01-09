
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch } from '@mui/material';

import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const navlinks = [
 // { name: 'Home', route: '/' },
  { name: 'اخبار الجديدة', route: '/instructors' },
 { name: 'خدماتنا', route: '/classes' },
  { name: 'اتصل بنا', route: '/classes' },
];

const theme = createTheme({
  palette: {
    primary: { main: '#ff0000' },
    secondary: { main: '#00ff00' },
  },
});

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navBg, setNavBg] = useState('bg-[#15151580]');
  const user = true; // غيّرها حسب حالة تسجيل الدخول

  const isHome = location.pathname === '/';
  const isLogin = location.pathname === '/login';
  const isFixed = location.pathname === '/register' || location.pathname === '/login';

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const darkClass = 'dark';
    const root = window.document.documentElement;
    isDarkMode ? root.classList.add(darkClass) : root.classList.remove(darkClass);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setNavBg(isHome
        ? 'bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black'
        : 'bg-white dark:bg-black dark:text-white text-black');
    } else {
      setNavBg(
        isHome
          ? 'bg-transparent dark:text-white text-white'
          : 'bg-white dark:bg-black dark:text-white text-black'
      );
    }
  }, [scrollPosition, isHome]);

  const handleLogout = () => {
    console.log("Logout");
    // تنفيذ تسجيل الخروج الفعلي هنا
    
  }
      const { i18n } = useTranslation();
    
      const changeLang = (lng) => {
        i18n.changeLanguage(lng);
      };
  

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${isHome ? navBg : "bg-white dark:bg-black"} ${isFixed ? 'static' : 'fixed'} top-0 transition-colors duration-500 w-full z-10`}
    >
      <div className='max-w-[95%] mx-auto px-4 py-4 flex items-center justify-between'>
        <div onClick={() => navigate('/')} className='cursor-pointer flex items-center'>
          <h1 className='text-2xl text-green-300 font-bold inline-flex gap-3 items-center'>
          <img src="/a.png" alt="" className='h-18 w-12' />  AGRITECH 
          </h1>
        
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-gray-300 hover:text-white'>
            <FaBars className='h-6 w-6 hover:text-primary' />
          </button>
        </div>



    <div className="flex gap-4">
      <button onClick={() => changeLang("ar")}>AR</button>
      <button onClick={() => changeLang("fr")}>FR</button>
    </div>



        <div className='hidden md:flex items-center space-x-4'>
          {navlinks.map((link) => (
            <NavLink
              key={link.route}
              to={link.route}
              className={({ isActive }) =>
               ` font-bold ${isActive ? 'text-secondary' : navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'} hover:text-secondary transition
              `}
            >
              {link.name}
            </NavLink>
          ))}

          {!user && (
            isLogin ? (
              <NavLink to="/register" className='font-bold hover:text-secondary bg-green transition'>سجل الدخول</NavLink>
            ) : (
              <NavLink to="/login" className='font-bold hover:text-secondary transition'>الحساب</NavLink>
            )
          )}

{user && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-secondary' : navBg.includes("bg-transparent") ? "text-white" : "text-black dark:text-white"} hover:text-secondary transition
                `}
              >
                الرئيسية
              </NavLink>
              <img alt="user" className='h-10 w-10 rounded-full' />
              <button
                onClick={handleLogout}
                className='font-bold px-3 py-2 bg-green-600s text-white rounded-xl'
              >
                الخروج
              </button>
            </>
          )}

          <ThemeProvider theme={theme}>
            <div className='flex flex-col justify-center items-center'>
              <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
              <span className='text-xs'>ساطع/مظلم</span>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
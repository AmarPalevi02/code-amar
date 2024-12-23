import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../../contans/itemsNav';
import { useTheme } from '../../contexts/ThemeProvider';
import { themeDark, themeLight } from '../../contans/styles';
import ProfileSidebar from '../../atoms/ProfileSidebar';
import { useNavigate } from 'react-router-dom';
import './style.css'
import ItemNavDestop from './ItemNavDestop';
import { useEffect } from 'react';

const NavDestop = () => {
   const navigate = useNavigate()
   const { theme } = useTheme();
   const [isHovered, setIsHovered] = useState(false);
   const [isActive, setIsActive] = useState('/')

   useEffect(() => {
      const savedActivePath = sessionStorage.getItem('activeNavPath') || localStorage.getItem('activeNavPath');
      if (savedActivePath) {
         setIsActive(savedActivePath);
      } else {
         setIsActive('/');
      }
   }, []);

   useEffect(() => {
      const handleBeforeUnload = () => {
         sessionStorage.setItem('activeNavPath', isActive);
         localStorage.removeItem('activeNavPath');
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
   }, [isActive]);

   const handleNavActive = (path) => {
      navigate(path)
      setIsActive(path)
      sessionStorage.setItem('activeNavPath', path);
      localStorage.setItem('activeNavPath', path);
   }

   const borderDark = theme === 'dark' ? `bg-gray-500` : `bg-gray-200`
   const containerNav = theme === 'dark' ? `${themeDark.className} sidebar-shadow` : `${themeLight.className}`

   return (
      <nav className="absolute left-0 ">
         <motion.div
            className={`h-screen ${containerNav} rounded-tr-xl rounded-br-xl shadow-xl relative ${isHovered ? '' : 'pt-4'} `}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ width: isHovered ? 200 : 64 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ overflow: 'hidden' }}
         >
            <div className='relative' >
               <div className={`${isHovered ? '' : 'flex flex-col items-center '}`}>
                  <ProfileSidebar isHovered={isHovered} />
               </div>

               <div className="px-4">
                  <div className={`w-full h-0.5 rounded-lg mt-2 ${borderDark}`}></div>
               </div>

               <ul className={`space-y-4 ${isHovered ? 'px-4' : 'px-3'} pt-4`}>
                  <ItemNavDestop isActive={isActive} navItems={navItems} theme={theme} isHovered={isHovered} handleNavActive={handleNavActive} />
               </ul>
            </div>
         </motion.div>
      </nav>
   );
};

export default NavDestop;
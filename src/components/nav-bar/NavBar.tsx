'use client';

import clsx from 'clsx';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 flex w-full flex-col bg-black">
        <div className="flex h-[4rem] w-full items-center justify-between px-6">
          <div>
            <img src="/logo/logo.svg" alt="로고" />
          </div>
          <div className="font-clash-display text-2xl font-medium">HOME</div>
          <button
            onClick={handleMenuButtonClick}
            className="flex w-[40px] justify-end"
          >
            <img src="/icons/hamburger-menu.svg" alt="메뉴 버튼" />
          </button>
        </div>
        <div
          className={clsx('relative transition-opacity', {
            'pointer-events-none opacity-100': isMenuOpen,
            'opacity-0': !isMenuOpen,
          })}
        >
          <div className="absolute z-50 flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-black">
            <ul className="-mt-[10rem] flex h-[15rem] flex-col items-center justify-between font-clash-display text-lg font-medium">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>WORK</li>
              {/* <li>ARCHIVE</li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-[4rem]" />
    </div>
  );
};

export default NavBar;

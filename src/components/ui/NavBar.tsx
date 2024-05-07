'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavBar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pageName =
    pathname === '/'
      ? 'HOME'
      : pathname === '/about'
        ? 'ABOUT'
        : pathname.startsWith('/works')
          ? 'WORK'
          : pathname === '/archive' && 'ARCHIVE';

  const menuList = [
    {
      name: 'HOME',
      href: '/',
    },
    {
      name: 'ABOUT',
      href: '/about',
    },
    {
      name: 'WORK',
      href: '/works',
    },
    // {
    //   name: 'ARCHIVE',
    //   href: '/archive',
    // },
  ];

  return (
    <div>
      <nav className="fixed top-0 z-50 flex w-full flex-col bg-black px-6">
        <div className="mx-auto flex h-[4rem] w-full max-w-5xl items-center justify-between desktop:h-[3rem] desktop:items-end">
          <Link href="/" className="flex items-center gap-2">
            <span className="hidden desktop:block">KUSITMS 1st EXHIBITION</span>
            <Image src="/logo/logo.svg" alt="로고" width={40} height={22} />
          </Link>
          <div className="font-clash-display text-2xl font-medium desktop:hidden">
            {pageName}
          </div>
          <ul className="hidden items-center justify-between gap-8 font-clash-display text-lg font-medium sm:flex">
            {menuList.map((menu, index) => (
              <li key={index}>
                <Link href={menu.href} onClick={() => setIsMenuOpen(false)}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleMenuButtonClick}
            className="flex w-[40px] justify-end sm:hidden"
          >
            <Image
              src="/icons/hamburger-menu.svg"
              alt="메뉴 버튼"
              width={26}
              height={22}
            />
          </button>
        </div>
        <div
          className={clsx('transition-opacity duration-300', {
            'opacity-100': isMenuOpen,
            'pointer-events-none opacity-0': !isMenuOpen,
          })}
        >
          <div className="absolute left-0 flex h-[calc(100vh-4rem)] w-screen items-center justify-center bg-black">
            <ul className="flex h-[15rem] -translate-y-[30%] flex-col items-center justify-between font-clash-display text-lg font-medium">
              {menuList.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.href} onClick={() => setIsMenuOpen(false)}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-[4rem] desktop:h-[3rem]" />
    </div>
  );
};

export default NavBar;

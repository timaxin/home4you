'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="px-6 py-8 flex justify-between bg-white">
      <Link href='/' className="text-blue-700 font-bold text-lg">Home 4 You</Link>
      <nav className="flex font-light space-x-10">
        <Link href="/" className={`my-auto hover:text-stone-500 link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/buy" className={`my-auto hover:text-stone-500 link ${pathname === '/buy' ? 'active' : ''}`}>Buy</Link>
        <Link href="/rent" className={`my-auto hover:text-stone-500 link ${pathname === '/rent' ? 'active' : ''}`}>Rent</Link>
        <Link href="/contact" className={`my-auto hover:text-stone-500 link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
}
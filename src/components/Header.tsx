"use client";

import { IconButton } from "@mui/material";
import Link from "next/link";
import {
  DarkMode,
  LightMode,
  GitHub,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "@/app/MuiCssProvider";
import Logo from "./Logo";

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value)
  }

  return (
    <section className="h-16 flex justify-between content-center items-center">
      <Logo />

      <div>
        <nav className={scrolled ? 'scrolled' : ''}>
          <ul className="flex gap-x-4 ml-4">
            <li>
              <Link href="/" className={ activeLink === 'home' ? 'active-navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={ activeLink === 'about' ? 'active-navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('about')}>About</Link>
            </li>
            <li>
              <Link href="/skills" className={ activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Link>
            </li>
            <li>
              <Link href="/projects" className={ activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Link>
            </li>
            <li>
              <GitHub />
            </li>
            <li>
              <LinkedIn />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <IconButton
                sx={{ padding: 0 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </li>
          </ul>
        </nav>       
      </div>
    </section>
  );
}

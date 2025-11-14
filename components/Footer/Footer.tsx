'use client';

import React, { MouseEvent } from 'react';
import Image from 'next/image';
import css from './Footer.module.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import Container from '../Container/Container';

export default function Footer() {
  const pathURL = usePathname();
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!pathURL || pathURL.startsWith('/auth')) return null;

  const currentYear = new Date().getFullYear();

  const handleAccountClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isAuthenticated) {
      router.push('/profile');
    } else {
      router.push('/auth/login');
    }
  };

  return (
    <footer className={css.footer}>
      <Container>
        <nav className={css.footerNav}>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={165}
              height={46}
              alt="Logo"
              priority
            />
          </Link>

          <div id="copyright" className={css.footerCopyright}>
            <span>&copy;</span> {currentYear} CookingCompanion. All rights
            reserved.
          </div>

          <div className={css.footerLinksContainer}>
            <Link href="/recipes" className={css.footerLink}>
              Recipes
            </Link>

            <a href="#" className={css.footerLink} onClick={handleAccountClick}>
              Account
            </a>
          </div>
        </nav>
      </Container>
    </footer>
  );
}

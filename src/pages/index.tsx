import React from 'react';
import HomeLayoutDesktop from '../components/d-layouts/home-layout-desktop';
import HomeLayoutMobile from '../components/d-layouts/home-layout-mobile';
import { isMobile } from '../helper/common-helper';

export default function Home() {
  if (isMobile()) return <HomeLayoutMobile />;
  return <HomeLayoutDesktop />;
}

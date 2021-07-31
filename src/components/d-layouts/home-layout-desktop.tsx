import { useState } from 'react';
import { IMenuHomeList } from '../../static/object';
import HeaderHome from '../c-organism/header-home';
import MenuHome from '../c-organism/menu-home';

export default function HomeLayoutDesktop() {
  const [activeMenu, setactiveMenu] = useState(0); // by default always showing welcome
  function handleMenuclick(data: IMenuHomeList) {
    setactiveMenu(data.id);
  }
  return (
    <>
      <HeaderHome id="header-home" title="A R B R Z W" />
      <MenuHome id="menu-home" className="ml-16 mt-8" activeMenu={activeMenu} onMenuClick={handleMenuclick} />
    </>
  );
}

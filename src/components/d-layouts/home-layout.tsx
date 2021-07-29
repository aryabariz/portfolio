import HeaderHome from '../c-organism/header-home';
import MenuHome from '../c-organism/menu-home';

export default function HomeLayout() {
  return (
    <>
      <HeaderHome id="header-home" title="A R B R Z W" />
      <MenuHome id="menu-home" className="ml-16 mt-8" />
    </>
  );
}

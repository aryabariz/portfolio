import { CSSProperties, useState } from 'react';
import { IMenuHomeList, MenuHomeList } from '../../static/object';
import MenuList from '../b-molecules/menu-list';

export interface OMenuHome {
  id: string | undefined;
  className?: string;
  style?: CSSProperties;
}

const MenuHome = (props: OMenuHome) => {
  const [MenuActive, setMenuActive] = useState(0);

  function handleMenuClick(data: IMenuHomeList) {
    setMenuActive(data.id);
  }

  return (
    <div id={props.id} className={`${props.className} flex flex-col items-start space-y-5`}>
      {MenuHomeList.map((data: IMenuHomeList) => {
        return <MenuList key={data.id} id={`menu-home-list-${data.id}`} onClick={() => handleMenuClick(data)} label={data.name} isActive={data.id === MenuActive} />;
      })}
    </div>
  );
};

export default MenuHome;

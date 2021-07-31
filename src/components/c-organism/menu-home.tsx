import { CSSProperties } from 'react';
import { IMenuHomeList, MenuHomeList } from '../../static/object';
import MenuList from '../b-molecules/menu-list';

export interface OMenuHome {
  id: string | undefined;
  className?: string;
  style?: CSSProperties;
  onMenuClick: (e: IMenuHomeList) => void;
  activeMenu: number;
}

const MenuHome = (props: OMenuHome) => {
  return (
    <div id={props.id} className={`${props.className} flex flex-col items-start space-y-5`}>
      {MenuHomeList.map((data: IMenuHomeList) => {
        return <MenuList key={data.id} id={`menu-home-list-${data.id}`} onClick={() => props.onMenuClick(data)} label={data.name} isActive={data.id === props.activeMenu} />;
      })}
    </div>
  );
};

export default MenuHome;

export interface MMenuList {
  id: string | undefined;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuList = (props: MMenuList) => {
  return (
    <button id={props.id} onClick={props.onClick} className={`border border-yellow overflow-hidden ${props.isActive ? 'bg-yellow text-black' : ' text-white'} w-1/4 hover:bg-yellow hover:text-black`}>
      <h3 className="capitalize w-full text-base leading-5 p-4">{props.label}</h3>
    </button>
  );
};

export default MenuList;

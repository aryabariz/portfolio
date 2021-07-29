import Head from 'next/head';

export interface AHeaderContainer {
  children: React.ReactNode;
  id: string | undefined;
  className?: string;
}

export const HeaderContainer = (props: AHeaderContainer) => {
  return (
    <div id={props.id} className={`py-4 px-8 w-full ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Head;

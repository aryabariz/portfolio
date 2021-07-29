import { HeaderContainer } from '../a-atoms/header-container';
import DownloadResume from '../b-molecules/download-resume';

export interface OHeaderHome {
  title: string;
  id: string | undefined;
}

export const HeaderHome = (props: OHeaderHome) => {
  return (
    <>
      <HeaderContainer id={props.id} className="justify-between flex items-center">
        <h2 className="text-yellow text-xl font-bold leading-6 cursor-default">{props.title}</h2>
        <DownloadResume />
      </HeaderContainer>
    </>
  );
};

export default HeaderHome;

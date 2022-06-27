import { HeroList } from '../components';

const publisher = 'DC Comics';

export const DCPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher={publisher} />
    </>
  );
};

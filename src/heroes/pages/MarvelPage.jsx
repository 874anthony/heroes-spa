import { HeroList } from '../components';

const publisher = 'Marvel Comics';

export const MarvelPage = () => {
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />

      <HeroList publisher={publisher} />
    </>
  );
};

import { Container } from 'components/Container/Container.styled';
import ListMovies from 'components/ListMovies/ListMovies';
import { Loader } from 'components/Loader/loader';
import { Section } from 'components/Section/Section.styled';
import getFetch from 'js/apiTrend';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoader(true);
      setError(false);
      const trendMovies = async () => {
        const {
          data: { results },
        } = await getFetch();
        setMovies(results);
      };
      trendMovies();
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 style={{ textAlign: 'center', color: 'gray' }}>
            Trending this week
          </h1>
          {loader && <Loader />}
          {movies.length > 0 && <ListMovies trendMovies={movies} />}
        </Container>
      </Section>
      {error && <div>Error, Please reload this page!</div>}
    </main>
  );
};

export default Home;

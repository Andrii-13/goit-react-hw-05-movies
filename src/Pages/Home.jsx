import { Container } from 'components/Container/Container.styled';
import ListMovies from 'components/ListMovies/ListMovies';
import { Section } from 'components/Section/Section.styled';
import getFetch from 'js/apiTrend';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const trendMovies = async () => {
        const {
          data: { results },
        } = await getFetch();
        setMovies(results);
      };
      trendMovies();
    } catch (error) {
    } finally {
    }
  }, []);



  return (
    <main>
      <Section>
        <Container>
          <h1>Trending this week</h1>
          {movies.length > 0 && (
            <ListMovies trendMovies={movies}/>
          )}
        </Container>
      </Section>
     </main>
  );
};

export default Home;

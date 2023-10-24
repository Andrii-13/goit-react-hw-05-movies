import { Container } from 'components/Container/Container.styled';
import ListMovies from 'components/ListMovies/ListMovies';
import { Section } from 'components/Section/Section.styled';

const Home = ({ films, onGetId }) => {
  return (
    <main>
      <Section>
        <Container>
          <h1>Trending this week</h1>
          {films.length > 0 && (
            <ListMovies trendMovies={films} getId={onGetId} />
          )}
        </Container>
      </Section>
    </main>
  );
};

export default Home;

import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import getFetch from 'components/js/api';
import React from 'react';

const Home = () => {
// const [movies, setMovies] = useState([])

//   const trendMovies = async () => {
//     return await getFetch();
//   };

  return (
    <Section>
      <Container>
        <h1>Trending this week</h1>
        <ul></ul>
      </Container>
    </Section>
  );
};

export default Home;

import { Container } from 'components/Container/Container.styled';
import PageMove from 'components/PageMove/PageMove';
import { Section } from 'components/Section/Section.styled';
import getFilmInfo from 'js/apiFilm';
import { useEffect, useState } from 'react';

const Movies = ({ id }) => {
  const [move, setMove] = useState({});

  useEffect(() => {
    try {
      if (!id) {
        return;
      }
      const getFilm = async () => {
        const { data } = await getFilmInfo(id);
        setMove(data);
        return data;
      };
      getFilm(id);
    } catch (error) {}
  }, [id]);

  return (
    <main>
      <Section>
        <Container>
          <PageMove film={move} />
        </Container>
      </Section>
    </main>
  );
};

export default Movies;

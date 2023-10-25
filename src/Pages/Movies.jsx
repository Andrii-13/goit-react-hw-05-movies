import React from 'react'
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import MoveDetails from 'components/MovieDetails/MoveDetails';

const Movies = () => {
  return (
    <main>
      <Section>
        <Container>
          <form>Form for film</form>
          <MoveDetails/>
        </Container>
      </Section>
   </main>
  );
};

export default Movies;

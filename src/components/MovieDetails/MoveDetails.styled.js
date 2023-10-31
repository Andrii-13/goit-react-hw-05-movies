import styled from 'styled-components';

export const Genres = styled.div`
  display: flex;
  gap: 10px;
`;
export const FilmPageWrap = styled.div`
  display: block;

  button {
    margin-bottom: 20px;
  }
`;

export const ImgWrap = styled.div`
  width: 400px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;

  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.4),
    0px 4px 4px rgba(46, 47, 66, 0.4), 0px 6px 6px rgba(46, 47, 66, 0.4);

  img {
    min-width: 100%;
    border-radius: 10px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const AddInfoList = styled.ul`
display: flex;
gap: 20px;
  list-style: none;
  font-size: 20px;
  padding: 10px
`;

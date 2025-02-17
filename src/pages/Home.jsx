import { Search } from '@mui/icons-material';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { Card } from '@mui/material';
import { ImageCard } from '../components/ImageCard';

const Container = styled.div`
  height: 100%;
  overflow: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768) {
    padding: 6px 10px;
`;

const Headline = styled.div `
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600) {
  fontsize: 22px;
  
  `;
const Span = styled.div `
 font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  @media (max-width: 600) {
  fontsize: 20px;
  `;
  const CardWrapper = styled.div`
    display: grid;
    gap: 20px;
    @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    }
     @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    }
     @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
    }
  `;
  
  const Wrapper = styled.div `
  width: 100%;
 
  display: flex;
  justify-content: center;
  padding: 32px 0px;
  
  max-width: 1400px;
  
  
  `;

export const Home = () => {
  return (
    <Container>
       <Headline>
        Explore popular posts in the Community !
        <Span>Generated with AI 🚀</Span>
       </Headline>
       <SearchBar />
       <Wrapper>
        <CardWrapper>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
        </CardWrapper>
       </Wrapper>




    </Container>
  );
};

export default Home;
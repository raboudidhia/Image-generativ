import { Search } from '@mui/icons-material';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';

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
  
  `;

export const Home = () => {
  return (
    <Container>
       <Headline>
        Explore popular posts in the Community !
        <Span>Generated with AI 🚀</Span>
       </Headline>
       <SearchBar />




    </Container>
  );
};

export default Home;
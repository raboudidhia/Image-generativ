import React from 'react'
import styled from 'styled-components'
import  Button  from './button'
import { useNavigate, useLocation} from 'react-router-dom'
import { AddRounded, ExploreRounded } from '@mui/icons-material'
const Container = styled.div`
  flex: 1;
background: ${({ theme }) => theme.Navbar};
color: ${({ theme }) => theme.text_primary};
display: flex;
font-size: 22px;
font-weight: bold;
padding: 14px 50px;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
@media only screen and (max-width: 600px) {
paadding: 10px 12px;
}
`;

const Navbar = () => {
 const navigate = useNavigate();
 const location = useLocation();    
 const path = location.pathname.split('/');
return (
  <>
    <Container>Generative AI
        {
            path[1] === 'post' ? (
                <Button text="Explore Posts" leftIcon={<ExploreRounded
                    style={{ fontSize: "18px" }} />} onClick={()=> navigate('/')} type="secondary" />
            ) : (
        
      <Button text="Create new post" leftIcon={<AddRounded
       style={{ fontSize: "18px" }} />} onClick={()=> navigate('post')} />
            )
        }
    </Container>
  </>
)
}
export default Navbar
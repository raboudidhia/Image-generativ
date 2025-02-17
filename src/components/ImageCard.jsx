import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  cursor: pointer;
  tansition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
    scale: 1.05;
  }
  &: nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  }
`;
const HoverOverlay = styled.div`
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;align-items: start
gap: 10px;
backdrop-filter: blur(4px);
background: rgba(0,0,0,0.5);
color: ${({ theme }) => theme.white};

transition: opacity 0.3s ease;
&:{Card}:hover &{
    opacity: 1;
}
    border-radius: 6px;
    justify-content: end;


`;
const Prompt = styled.div`
font-size: 15px;
font-weight: 400px;
color: ${({ theme }) => theme.white};

`;

const Author = styled.div`
font-size: 14px;
font-weight: 600px;
display: flex;
gap: 8px;
align-items: center;
color: ${({ theme }) => theme.white};
`;

export const ImageCard = ({ item }) => { // Destructure item from props
  return (
    <Card>
      <LazyLoadImage 
      alt={item?.prompt}
      style={{borderRadius: "12px"}}
        src={item?.photo } 
        width="100%"
      />
      <HoverOverlay>  
        <Prompt>{item?.prompt }</Prompt> 
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
        <Author>
            <Avatar sx={{width:"32px" , height: "32px"}}>{item?.author?.[0] }</Avatar> 
           {item?.author } 
        </Author>
        <DownloadRounded onClick={() => FileSaver.saveAs(item?.photo )}/> 
        </div>
      </HoverOverlay>
    </Card>
  );
};

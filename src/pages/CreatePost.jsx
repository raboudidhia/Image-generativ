import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GenerateImageCard from "../components/GeneratedImageCard";
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

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 8%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [CreatePostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({

    name : "",
    prompt: "",
    photo: "",

 
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm post={post} setPost={setPost}
         CreatePostLoading={CreatePostLoading}
         setGenerateImageLoading={setGenerateImageLoading}
          generateImageLoading={generateImageLoading}
          setCreatePostLoading={setCreatePostLoading} />
        <GenerateImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
};
export default CreatePost;

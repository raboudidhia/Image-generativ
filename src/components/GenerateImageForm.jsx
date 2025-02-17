import React from "react";
import styled from "styled-components";
import Button from "./button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

export const GenerateImageForm = ({
  post,
  setPost,
  CreatePostLoading,
  setGenerateImageLoading,
  generateImageLoading,
  setCreatePostLoading,
}) => {
  const generateImageFun = () => {
    setGenerateImageLoading(true);
  };
  const createPostFun = () => {
    setCreatePostLoading(true);
  };

  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>Write your prompt according to the image you want</Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name"
          name="name"
          value={post.name}
          handleChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image .. "
          name="name"
          rows="11"
          textArea
          value={post.prompt}
          handleChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        * You can post the AI Generated Image to the community *
      </Body>

      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          text="Post Image"
          flex
          leftIcon={<CreateRounded />}
          isLoading={CreatePostLoading}
          isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
          onClick={() => createPostFun()}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;

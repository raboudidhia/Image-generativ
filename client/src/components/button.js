import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;
  @media (max-width: 600px) {
    padding: 8px 12px;
  }
  ${({ type, theme }) =>
    type === "secondary"
      ? `
    background: ${theme.secondary};
  `
      : `
    background: ${theme.primary};
  `}
  ${({ isdisabled }) =>
    isdisabled &&
    `
    opacity: 0.4;
    cursor: not-allowed;
  `}
  ${({ isloading }) =>
    isloading &&
    `
    opacity: 0.8;
    cursor: not-allowed;
  `}
  ${({ flex }) =>
    flex &&
    `
    flex: 1;
  `}
`;

const ButtonComponent = ({
  text,
  isLoading,
  isDisabled,
  leftIcon,
  rightIcon,
  onClick,
  flex,
  type,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick()}
      isdisabled={isDisabled ? "true" : undefined} // Change this line
      type={type}
      isloading={isLoading ? "true" : undefined} // Change this line
      flex={flex ? "true" : undefined} // Change this line
    >
      {isLoading && <CircularProgress style={{ width: "18px", height: "18px" }} />}
      {leftIcon}
      {text}
      {isLoading && <>...</>}
      {rightIcon}
    </Button>
  );
};

export default ButtonComponent;
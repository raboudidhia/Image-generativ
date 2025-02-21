import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 6px 4px;
  text-transform: uppercase;
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary};
  background-color: transparent;
  color: ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput
        as={textArea ? "textarea" : "input"}
        name={name}
        rows={rows}
        columns={columns}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default TextInput;
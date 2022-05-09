import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label?: string;
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { label } = props;

  return <StyledButton onClick={props.onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: lightslategray;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;

  :hover{
    background-color: slategrey;
  }

`;

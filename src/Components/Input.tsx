import React, { useEffect, useMemo } from "react";
import styled from "styled-components";

interface InputProps<TValue = unknown> {
  onChange: (value?: TValue) => void;
  onBlur?: (...event: unknown[]) => void;
  onFocus?: (...event: unknown[]) => void;
  type?: 'text' | 'number'
  placeholder?: string;
  name?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  value?: TValue;
  defaultValue?: TValue;
}

export const Input = (props: InputProps<string | number | null>): JSX.Element => {
  const { value, onChange, defaultValue, name, type, label } = props;

  useEffect(() => {
    if (!value && defaultValue !== undefined) {
      onChange(defaultValue);
    }
  }, []);

  const formatedvalue = useMemo(() => {
    if (value === undefined || value === null) return "";
    return value;
  }, [value]);

  const forwardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return props.onChange(null);
    props.onChange(event.target.value);
  };

  return (
    <LabelContainer>
      {label && <LabelText>{label}</LabelText>}
      <InputStyled
        type={type}
        name={name}
        value={formatedvalue}
        onChange={forwardChange}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
        disabled={props.disabled}
        onBlur={props.onBlur}
      />
    </LabelContainer>

  );
};

const LabelContainer = styled("label")`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

const LabelText = styled("span")`
  flex: 1;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const InputStyled = styled("input")`
  border: none;
  resize: none;
  padding-inline: 0.25rem;
  outline: none;
  font-size: 1rem;

  border-bottom-style: solid;
  border-width: thin;

  ::placeholder {
    color: #b6b6b6;
  }

  :focus {
    border-bottom-style: 1px solid royalblue;
  }
  :focus-visible {
    outline: none;
  }
`;


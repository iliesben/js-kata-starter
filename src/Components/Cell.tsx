import React from "react";
import styled from "styled-components";
import { Color } from "../utils/types";

interface CellProps {
  color?: Color;
}

export const Cell = (props: CellProps) => {
  const {color = "white" } = props;

  return <StyledCell $color={color} />;
};

const StyledCell = styled.div<{ $color: Color }>`
  width: 100%;
  height: 100%;
  background-color: ${({ $color }) => $color};
`;

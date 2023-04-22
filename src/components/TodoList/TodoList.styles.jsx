import { Box, List } from "@mui/material";

import styled from "styled-components";

export const TodoListHeading = styled.h2`
  margin-bottom: 15px;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

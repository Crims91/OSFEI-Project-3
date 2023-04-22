import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ListAltIcon from "@mui/icons-material/ListAlt";

import styled from "styled-components";

export const StyledBox = styled(Box)`
  width: 600px;
  padding: 20px;
  max-width: 100%;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  #9e9e9e
`;

export const ListIcon = styled(ListAltIcon)`
  color: #009688;
`;

export const TodoInputHeading = styled.h2`
  margin-bottom: 15px;
`;

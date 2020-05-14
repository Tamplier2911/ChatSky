import styled from "styled-components";

// mui
import CircularProgress from "@material-ui/core/CircularProgress";

export const SpinnerContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const SpinnerCircle = styled(CircularProgress)`
  width: 10rem !important;
  height: 10rem !important;
`;

import React from "react";

// mui
// import Skeleton from "@material-ui/lab/Skeleton";
/* <Skeleton animation="wave" />  */

import CircularProgress from "@material-ui/core/CircularProgress";

// js render css
import { WithSpinnerContainer } from "./WithSpinnerStyles";

const WithSpinner = (WrapperdComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <WithSpinnerContainer>
      <CircularProgress style={{ width: "10rem", height: "10rem" }} />
    </WithSpinnerContainer>
  ) : (
    <WrapperdComponent {...otherProps} />
  );
};

export default WithSpinner;

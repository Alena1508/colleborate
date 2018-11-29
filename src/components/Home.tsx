import * as React from "react";
import { Redirect } from "react-router";

export default () => {
  return (
    <Redirect to={"/registration"} />
  );
};

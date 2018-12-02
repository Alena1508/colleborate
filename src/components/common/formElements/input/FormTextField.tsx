import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";
import { FormControlProps } from "@material-ui/core/FormControl";

type ComponentProps = WrappedFieldProps & TextFieldProps & FormControlProps;

const FormTextField = ({ input, label, meta: { touched, error }, ...custom }: ComponentProps) => {
  return (
    <TextField
      label={error || label}
      error={touched && error}
      {...input}
      {...custom}
    />
  );
};

export default FormTextField;

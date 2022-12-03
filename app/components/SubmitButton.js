import React from "react";
import { useFormikContext } from "formik";

import Button from "./Button";
import colors from "../config/colors";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} color = {colors.primary}/>;
}

export default SubmitButton;

import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

function AppFormField({ name, ...otherProps }) {
  const {
    setFieldTouched,
    handleChange,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AppFormField;

import { Button, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyledTextInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <StyledTextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

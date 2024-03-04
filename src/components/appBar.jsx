import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text} fontWeight="bold">
        Repositories
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

export default AppBar;

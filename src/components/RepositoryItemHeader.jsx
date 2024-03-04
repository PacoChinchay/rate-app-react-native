import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryItemHeader = (repository) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image
          style={styles.image}
          source={{ uri: repository.ownerAvatarUrl }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText color="primary" fontWeight="bold" fontSize="subheading">
          {repository.fullName}
        </StyledText>
        <StyledText color="secondary">{repository.description}</StyledText>
        <StyledText style={styles.language}>{repository.language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 4,
  },
});

export default RepositoryItemHeader;

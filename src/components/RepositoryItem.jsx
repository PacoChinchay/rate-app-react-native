import { View, StyleSheet, Image } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (repository) => {
  return (
    <View key={repository.id} style={styles.container}>
      <RepositoryItemHeader {...repository} />
      <RepositoryStats {...repository} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;

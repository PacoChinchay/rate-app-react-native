import repositories from "../repositories";
import RepositoryItem from "./RepositoryItem";
import { Text, FlatList } from "react-native";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  );
};

export default RepositoryList;

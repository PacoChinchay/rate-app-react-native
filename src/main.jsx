import { View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/appBar";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;

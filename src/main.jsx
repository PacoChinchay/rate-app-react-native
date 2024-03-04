import { View, Text } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/appBar";
import { Route, Routes } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route
          path="/signin"
          element={<Text>Estamos trabajando en eso</Text>}
        />
      </Routes>
    </View>
  );
};

export default Main;

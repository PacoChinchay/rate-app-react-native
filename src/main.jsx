import { View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/appBar";
import { Route, Routes, Navigate } from "react-router-native";
import LoginPage from "./pages/Login";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;

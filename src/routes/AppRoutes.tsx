import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;

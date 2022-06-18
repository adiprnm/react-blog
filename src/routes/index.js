import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    component: Home,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        ></Route>
      ))}
    </Routes>
  );
};

export default AppRoutes;

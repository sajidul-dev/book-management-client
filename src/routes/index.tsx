import { useMemo } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";

export const AppRoutes = () => {
  const routes = useMemo(
    () => [
      {
        path: "/",
        element: <MainLayout />,
        children: [],
      },
    ],
    []
  );
  const element = useRoutes([...routes]);

  return <>{element}</>;
};

AppRoutes.displayName = "AppRoutes";

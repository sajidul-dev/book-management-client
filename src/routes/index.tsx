import { Suspense, useMemo } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";
import { lazyImport } from "@/utils/lazyImport";
import { Spinner } from "@/components/Elements/Spinner/Spinner";

const { AllBooks } = lazyImport(() => import("../features/books"), "AllBooks");
const { BookDetails } = lazyImport(
  () => import("../features/books"),
  "BookDetails"
);
const { AddBook } = lazyImport(() => import("../features/books"), "AddBook");

export const AppRoutes = () => {
  const routes = useMemo(
    () => [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "books",
            element: (
              <Suspense fallback={<Spinner />}>
                <AllBooks />
              </Suspense>
            ),
          },
          {
            path: "books/:id",
            element: (
              <Suspense fallback={<Spinner />}>
                <BookDetails />
              </Suspense>
            ),
          },
          {
            path: "add-book",
            element: (
              <Suspense fallback={<Spinner />}>
                <AddBook />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
    []
  );
  const element = useRoutes([...routes]);

  return <>{element}</>;
};

AppRoutes.displayName = "AppRoutes";

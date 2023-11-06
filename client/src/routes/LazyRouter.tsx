import withLayout from "pages/Layout/withLayout";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ListCard = lazy(() => import("../features/ListCard"));

const LazyRouter: React.FC = () => {
  const HOCListCard = withLayout(ListCard);
  return (
    // <div className="wrapper">
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/cards" element={<HOCListCard />} />
        <Route path="*" element={<HOCListCard />} />
      </Routes>
    </Suspense>
    // </div>
  );
};

export default LazyRouter;

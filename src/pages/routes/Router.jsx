import { Routes, Route } from "react-router-dom";
import { Homepage } from "../index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export { Router };

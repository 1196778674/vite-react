import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 模板
import Home from "./Home";
import Item1 from "./Item1";
import Item2 from "./Item2";

const Index: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/2" element={<Item1 />} />
      <Route path="/3" element={<Item2 />} />
    </Routes>
  );
};

export default Index;

/* eslint-disable react/jsx-pascal-case */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Index_page,
  Event1,
  Event2,
  Event3,
  Event4,
  Event5,
  Test,
  Compare,
} from "./Pages/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/True" element={<Index_page />} />
          <Route path="/event1" element={<Event1 />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/event4" element={<Event4 />} />
          <Route path="/event5" element={<Event5 />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

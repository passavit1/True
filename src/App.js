/* eslint-disable react/jsx-pascal-case */

import { Routes, Route } from "react-router-dom";
import {
  Index_page,
  Event1,
  Event2,
  Event3,
  Event4,
  Event5,
  Test,
} from "./Pages/index";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  // const handleNavigate = (path) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate(path);
  //   }, 300);
  // };

  return (
    <div>
      {/* {isLoading && <LoadingPage />} */}
      <Routes>
        <Route path="/" element={<Index_page />} />
        <Route path="event1" element={<Event1 />} />
        <Route path="event2" element={<Event2 />} />
        <Route path="event3" element={<Event3 />} />
        <Route path="event4" element={<Event4 />} />
        <Route path="event5" element={<Event5 />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;

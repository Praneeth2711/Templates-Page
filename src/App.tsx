import { Routes, Route } from "react-router-dom";
import { TemplatesPage } from "./pages/TemplatesPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<TemplatesPage />} />
    </Routes>
  );
}

export default App;

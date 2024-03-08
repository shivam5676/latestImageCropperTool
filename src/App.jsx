

import { Routes, Route, Navigate } from "react-router-dom";
import Imageeditor from "./Pages/Imageeditor/Imageeditor";
import Templateeditor from "./Pages/Templateeditor/Templateeditor";
import Homepage from "./Pages/Homepage/Homepage";
// import Imageeditor from "./Pages/Imageeditor/Imageeditor";
// import Templateeditor from "./Pages/Templateeditor/Templateeditor";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      
      <Route path="/imgeditor" element={<Imageeditor/>}/>
      <Route path="/temeditor" element={<Templateeditor/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

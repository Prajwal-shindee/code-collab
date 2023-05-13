// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Home from "./pages/Home";
// import EditorPage from "./pages/EditorPage";
// import Navbar from "./pages/Navbar";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <div>
//         <Toaster
//           position="top-right"
//           toastOptions={{
//             success: {
//               theme: {
//                 primary: "#4aed88",
//               },
//             },
//           }}
//         ></Toaster>
//       </div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/editor/:roomId" element={<EditorPage />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// ----------------------------------

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;






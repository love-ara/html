import './App.css';
import Hero from "./pages/home/hero";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route>
                      <Route element={<Hero/>} path={"/home"}/>
                  </Route>
              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;

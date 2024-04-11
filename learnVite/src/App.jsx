import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
//import '../Styles/App.css'
import HomeLayout from './pages/HomeLayout'
import Home from "./pages/Home"
import Projects from './pages/Projects'
import HelpfulLinks from "./pages/HelpfulLinks"

import LandingLayout from './tessSite/pages/LandingLayout'
import SiteHome from './tessSite/pages/SiteHome'
import NotFound from './tessSite/pages/NotFound'
import StartHere from './tessSite/pages/StartHere'
import AboutTessa from './tessSite/pages/AboutTessa'
import '@coreui/coreui/dist/css/coreui.min.css'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />}/>
          <Route path="projects" element={<Projects />}>
            
          </Route>
          <Route path="links" element={<HelpfulLinks />}/>
        </Route>
        <Route path="tessa-site" element={<LandingLayout />} >
            <Route index element={<SiteHome />} />
            <Route path="start-here" element={<StartHere />} />
            <Route path="about-tessa" element={<AboutTessa />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

//Run npx vite in CLI to launch
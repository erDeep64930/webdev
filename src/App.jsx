import { Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import About from "./pages/About"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import FreePricing from "./components/FreePricing"
import PremiumPrice from "./components/PremiumPrice"
import ForPremiumUser from "./pages/ForPremiumUser"
import ProtectedRoute from "./components/ProtectedRoute"
// import Child1 from "./reduxConcept/Child1"
// import Child2 from "./reduxConcept/Child2"
import ProjectPractice from "./pages/ProjectPractice"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Child1 />
      <Child2 /> */}
      <Routes>
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />


        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPremiumUser />} />
        </Route>

        <Route path="/pricing" element={<Pricing />} >
          <Route path="free" element={<FreePricing />} />
          <Route path="premium" element={<PremiumPrice />} />
        </Route>
        <Route path="/project" element={<ProjectPractice />} />
      </Routes>
    </div>
  )
}

export default App
// import PricingCard from "../components/HomeComponents/PricingCard"
// import RotatingCubeImage from "../components/HomeComponents/RotatingCubeImage"

import { DemoResponsiveNavbar } from "../components/HomeComponents/DemoResponsiveNavbar"
import TenderCard from "../components/HomeComponents/TenderCard"


const Home = () => {
  return (
    <div className=" h-screen w-screen">
      {/* <RotatingCubeImage /> */}
      {/* <PricingCard /> */}

      <DemoResponsiveNavbar />
      <TenderCard />
    </div>
  )
}

export default Home
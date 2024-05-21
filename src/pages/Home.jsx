// import PricingCard from "../components/HomeComponents/PricingCard"
// import RotatingCubeImage from "../components/HomeComponents/RotatingCubeImage"

import { DemoResponsiveNavbar } from "../components/HomeComponents/DemoResponsiveNavbar"
import TenderCard from "../components/HomeComponents/TenderCard"
import DigitalWatch from "../components/MiniProject/DigitalWatch"


const Home = () => {
  return (
    <div className=" h-screen w-screen">
      {/* <RotatingCubeImage /> */}
      {/* <PricingCard /> */}
      <DigitalWatch />

      <DemoResponsiveNavbar />
      <TenderCard />
    </div>
  )
}

export default Home
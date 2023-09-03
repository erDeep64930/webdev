
import { ResponsiveNavbar } from "../components/HomeComponents/ResponsiveNavbar"
import AnimatedCircle from "../components/animatedCircle/AnimatedCircle"
import AnimatedCard from "../components/leariningProject/AnimatedCard"

import AnimatedSignature from "../components/leariningProject/AnimatedSignature"
import AnimatedText from "../components/leariningProject/AnimatedText"
import Navbar2 from "../components/leariningProject/Navbar2"
import GradientPyramid from "../components/pyramid/GradientPyramid"


const ProjectPractice = () => {
  return (
    <div className="mt-15 p-4 mb-20 ">
      <Navbar2 />

      <AnimatedText />
      <AnimatedSignature />
      <AnimatedCircle />
      <AnimatedCard />
      <GradientPyramid />

      <ResponsiveNavbar />

    </div>
  )
}

export default ProjectPractice
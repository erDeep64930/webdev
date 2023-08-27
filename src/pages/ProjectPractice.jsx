
import AnimatedPyramid from "../components/leariningProject/AnimatedPyramid"
import AnimatedSignature from "../components/leariningProject/AnimatedSignature"
import AnimatedText from "../components/leariningProject/AnimatedText"
import Navbar2 from "../components/leariningProject/Navbar2"


const ProjectPractice = () => {
  return (
    <div className="mt-15 p-4 mb-20 ">
        <Navbar2 />
       
        <AnimatedText />
        <AnimatedSignature />
        <AnimatedPyramid />
    </div>
  )
}

export default ProjectPractice
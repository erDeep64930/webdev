import { useSelector } from "react-redux"
import messageSlice from "../redux/slices/messageSlice"


const Child2 = () => {
  const message = useSelector(state => messageSlice.message)
  return (
    <div>
      <h1>data from child 1</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default Child2
import { useSelector } from "react-redux"


const Child2 = () => {
  const message = useSelector(state => messageReducer.message)
  return (
    <div>
      <h1>data from child 1</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default Child2
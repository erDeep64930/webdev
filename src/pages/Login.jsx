import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "deepak") {
      navigate("user/deepak")
    } else {
      navigate("/about")
    }
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} className="border-2 border-blue-500"/>
      </form>
    </div>
  )
}

export default Login
import { useParams } from "react-router-dom";


const Profile = () => {
  const parameter = useParams();
  return (
    <div>
      <h1>profile of {parameter.userId}</h1>
    </div>
  )
}

export default Profile
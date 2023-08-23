import { Link, Outlet, useLocation } from "react-router-dom"


const Pricing = () => {
  const location = useLocation()
  return (
    <div>
      <nav className="mt-5 space-x-4 gap-6">
        <Link to={location.pathname + "/free"} className="py-3 px-7 gap-8 border-2 border-blue-600">Free</Link>
        <Link to={location.pathname + "/premium"} className="py-3 px-7 gap-8 border-2 border-blue-600">Premium</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Pricing
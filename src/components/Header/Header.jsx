import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      header

      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default Header

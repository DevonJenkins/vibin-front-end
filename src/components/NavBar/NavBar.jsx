import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div>
            <div>Welcome, {user.name}</div>
            <div className='links'><Link to="/profiles">Profiles</Link></div>
            <div className='links'><Link to="" onClick={handleLogout}>LOG OUT</Link></div>
            <div className='links'><Link to="/changePassword">Change Password</Link></div>
          </div>
        </nav>
      :
        <nav>
          <div>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar

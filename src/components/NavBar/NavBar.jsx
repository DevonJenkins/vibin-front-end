import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark  blackbg">
        <div className='container-fluid pacifico'>
          <div>{/* Please Leave this Div, it is essential for the span to function properly*/}</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navbar-link row-container">
                <Link className="whitefnt" aria-current="page" to="/">Home</Link>
              </li>
              <li className="navbar-link">
                <Link className="whitefnt" aria-current="page" to="/myprofile">My Profile</Link>
              </li>
              <li className="navbar-link">
                <Link className="whitefnt" aria-current="page" to="/createBand">Create a Band</Link>
              </li>
              <li className="navbar-link">
                <Link className="whitefnt" aria-current="page" to="/genres">Add Genre</Link>
              </li>
              <li className="navbar-link">
                <Link className='whitefnt' aria-current="page" to="/instruments">Add Instrument</Link>
              </li>
              <li className="navbar-link">
                <Link className="whitefnt" aria-current="page" to="/changePassword">Change Password</Link>
              </li>
              <li className="navbar-link">
                <Link className="whitefnt" aria-current="page" to="/" onClick={handleLogout}>Log Out</Link>
              </li>
              </ul>
          </div>
        </div>
        {/* <nav className='navbar navbar-expand-lg navbar-light redbg'>
          <div>
            <div>Welcome, {user.name}</div>
            <div className='links'><Link to="/profiles">Profiles</Link></div>
            <div className='links'><Link to="" onClick={handleLogout}>LOG OUT</Link></div>
            <div className='links'><Link to="/changePassword">Change Password</Link></div>
          </div>
        </nav> */}
      </nav>
    </>
  )
}

export default NavBar

import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const Landing = ({ user, handleLogout }) => {

    return (
    <main className='card full-page-card column-container whitebg'>
      {user ? 
        <>
          <NavBar user={user} handleLogout={handleLogout} />
          <div className='card edge-card column-container bluebg'>
            <h6 className='whitefnt'>Welcome back to Vibin!</h6>
            <p className='margin-2 whitefnt'>Select one of the options below to get started! </p>
            {/* ==-- Add paths when they've been created --== */}
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'><Link className='whitefnt' to="/createBand">Start a Band</Link></div>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'><Link className='whitefnt' to="/joinBand">Join a Band</Link></div>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'><Link className='whitefnt' to="/profiles">View Profiles</Link></div>
          </div>
        </>
        :
        <div className='card edge-card column-container bluebg'>
          <div className='card landing-logo center-card whitebg'>
            <img src="../../assets/landing-logo.png" alt="vibin-logo"/>
            <h6>When the vibe needs to change...</h6>
          </div>
            <h6 className='whitefnt'>Welcome to Vibin!</h6>
            <p className='margin-2 whitefnt'>At Vibin we're trying to get you into a band with the best vibe possible! Lets get you started! </p>
          <div className='row-container'>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'>
              <Link className='whitefnt' to="/login">Log In</Link>
            </div>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'>
              <Link className='whitefnt' to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      }
      </main>
  )
}

export default Landing

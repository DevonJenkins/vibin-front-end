import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const Landing = ({ user, handleLogout }) => {

    return (
    <main className='card full-page-card column-container whitebg margin-top'>
      {user ? 
        <>
          <NavBar user={user} handleLogout={handleLogout} />
          <div className='card edge-card column-container svgbg'>
            <h1 className='whitefnt pacifico '>Welcome back to Vibin!</h1>
            <div className='mw-60 margin-2 margin-btm'>
              <p className='whitefnt asap'>Select one of the options below to get started! </p>
            </div>
            {/* ==-- Add paths when they've been created --== */}
            <div className='margin-2 br-5 padding-2 whitebrdr card blackbg asap'><Link className='whitefnt' to="/createBand">Start a Band</Link></div>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg asap'><Link className='whitefnt' to="/joinBand">Join a Band</Link></div>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg asap'><Link className='whitefnt' to="/profiles">View Profiles</Link></div>
          </div>
        </>
        :
        <div className='card edge-card column-container svgbg'>
          <div className='card landing-logo center-card whitebg'>
            <img src="../../assets/landing-logo.png" alt="vibin-logo" width={300}/>
          </div>
          <div className='flex-start left-text'>
            <h6 className='whitefnt asap'>When the vibe needs to change...</h6>
            <p className='whitefnt asap'>At Vibin we're trying to get you <br/> into a band with the best vibe possible! <br/> Lets get you started! </p>
          </div>
          <div className='row-container'>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg asap'>
              <Link className='whitefnt' to="/login">Log In</Link>
            </div>
            <div className='margin-2  br-5 padding-2 whitebrdr card blackbg asap'>
              <Link className='whitefnt' to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      }
      </main>
  )
}

export default Landing

import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className='card full-page-card column-container'>
      <div className='card edge-card column-container'>
        <div className='card landing-logo center-card'>
          <img src="../../assets/landing-logo.png" alt="vibin-logo"/>
          <h7>When the vibe needs to change...</h7>
        </div>
          <h6>Welcome to Vibin!</h6>
          <p className='margin-2'>At Vibin we're trying to get you into a band with the best vibe possible! Lets get you started! </p>
        <div className='row-container'>
          <div><Link to="/login">Log In</Link></div>
          <div><Link to="/signup">Sign Up</Link></div>
        </div>
      </div>
    </main>
  )
}

export default Landing

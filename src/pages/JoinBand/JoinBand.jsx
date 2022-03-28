import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const JoinBand = ({ user, handleLogout }) => {
  return (  
    <>
    <NavBar user={user} handleLogout={handleLogout} />

    <main className='card full-page-card column-container whitebg'>
      
      <div className='card edge-card column-container bluebg'>
        <div className='card landing-logo center-card whitebg'>

          <h6>When the vibe needs to change...</h6>
        </div>
          <h6 className='whitefnt'>This page will help the user find a band</h6>
      </div>
    
    </main>
    </>
  );
}
 
export default JoinBand;
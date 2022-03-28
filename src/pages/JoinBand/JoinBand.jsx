import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const JoinBand = ({ user, handleLogout }) => {
  return (  
    <main className='card full-page-card column-container whitebg'>
       <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'><Link className='whitefnt' to="/">This is the band create page. Don't forget to add the nav bar</Link></div>
    </main>

  );
}
 
export default JoinBand;
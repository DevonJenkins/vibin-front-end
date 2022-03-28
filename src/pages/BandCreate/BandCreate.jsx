import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const BandCreate = (user, handleLogout) => {
  return ( 
    
    <main className='card full-page-card column-container whitebg'>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='card edge-card column-container bluebg'>

      <h1 className='whitefnt'>This is the band creation Interface</h1>
      <div className='margin-2  br-5 padding-2 whitebrdr card blackbg'>
        <h4 className='whitefnt' >Input table will go here</h4>
      </div>
      
      
      </div>
      
      </main>
   );
}
 
export default BandCreate;
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar';


const ProfileDetails = ({user, handleLogout} ) => {
  const [profile, setProfiles] = useState([])

  //how do I get profile details
  return ( 
    <div className='card'>
     <img src="https://cdn.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.webp" alt="avatar the last airbender" height={200} width={200} />
     
     <details>
       <summary>Profile details</summary>


          <p>
            Name
          </p> 
          
          <details placeholder='more'>
            <summary>Instruments</summary>
            {/* map each instrument into a p */}
              <p>Banjo</p>
              <p>Bolognia</p>
              <p>Mayonaise</p>


          </details>
          <details>
            <summary>
              Preferred Genres
            </summary>
            <p>Salsa</p>
            <p>Soca</p>
            <p>Bossa</p>
            <p>Bebop</p>
          </details>
            
          
          

     </details>
    </div>
   );
}
 
export default ProfileDetails;
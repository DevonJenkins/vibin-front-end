import { useState, useEffect } from 'react'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import * as profileService from '../../services/profileService'
import NavBar from '../../components/NavBar/NavBar'
import AddInstrumentToProfile from '../../components/AddInstrumentToProfile/AddInstrumenttoProfile'

const Profiles = (user, handleLogout) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <br />
      <br />
      <main >
      <div >
        <div>
        {profiles.length ? 
          <>
            {profiles.map(profile=>
            <div key={profile._id} className='margin-2
            card column-container bluebg'>
              <div className='card-body'>
                <h1 className='whitefnt'>{profile.name}</h1>
                <ProfileDetails profile={profile} />
                <p></p>
              </div>
            </div>
            )}
          </>
        :
          <p>No profiles yet</p>
        }

        </div>
      </div>
    </main>
  
    </>
  )
}

export default Profiles
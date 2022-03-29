import { useState, useEffect } from 'react'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import * as profileService from '../../services/profileService'
import NavBar from '../../components/NavBar/NavBar'

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
      <br />

      <h1>Hello. This is a list of all the profiles.</h1>
      {/* if user, then show the users profile 
          if bandowner, show profile of all members in band, and band profile
          if status = band owner then show all members in band
          if status = looking for a band, then only show your own profile
          if admin, show all\
          admin will not be tied to status. Instead it will be tied to an id or something. I don't remember exactly how this works but its similar to userid as I recall. 
          */}
      {profiles.length ? 
        <>
          {profiles.map(profile=>
          <div key={profile._id} className='card'>
            <div className='card-body'>
              <p>{profile.name}</p>
              <ProfileDetails profile={profile} />
              <p></p>
            </div>
          </div>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles
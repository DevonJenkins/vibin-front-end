import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar';
import * as profileService from '../../services/profileService'

// import * as instrumentService from '../../services/instrumentService'
// import * as genreService from '../../services/genreService'
// import * as reviewService from '../../services/reviewService'


const ProfileDetails = (props ) => {
  const [profile, setProfile] = useState([])
  const [instrumentData, setInstrumentData] = useState([])
  const [genreData, setGenreData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const imageUrl = props.profile.photo ? props.profile.photo : 'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg'

  useEffect(() => {
    profileService.getProfile(props.profile._id)
    .then(profileData => {
      setProfile(profileData)
      setInstrumentData(profileData.instruments)
      setGenreData(profileData.genres)
    })
  }, [props.profile._id])

  return ( 
    <div className='card' id='profile-card' >

      <img src={imageUrl} alt={props.profile.photo} height={300} width={300} />
      <details className='margin-2'>
          <summary>Profile Details</summary>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.zip}</p>
          <p>{profile.bio}</p>
          <p>{profile.reviews}</p>
          <details>
            <summary>Instruments</summary>
            {instrumentData ? 
            <>
              {instrumentData.map(instrument => 
                  <p key={instrument._id}>{instrument.name}</p>
              )}
            </>
            :
            <>
              <p>No Instruments Yet</p>
            </>
            }
          </details>
          <details>
            <summary>Genres</summary>
            {genreData ?
            <>
              {genreData.map(genre => 
                <p key={genre._id}>{genre.name}</p>
              )}
            </>
            :
            <>
              <p>No Genres Yet</p>
            </>
            }
          </details>
      </details> 
    </div>
  );
}

export default ProfileDetails;
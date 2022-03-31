import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

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

  const handleDeleteInstrument = (profileId, instrumentId ) => {
    profileService.deleteInstrument(profileId, instrumentId)
    // .then(profileData => [...profile, setProfile(profileData)])
  }

  const handleDeleteGenre = (profileId, genreId) => {
    profileService.deleteGenre(profileId, genreId)
    // .then(profileData => [...profile, setProfile(profileData)])
  }
  
  return ( 
    <div className='margin-2
    card column-container yellowbg'id='profile-card' >

      <img src={imageUrl} alt={props.profile.photo} height={250} width={250} className='margin-2' />
      <details className='margin-2' >

        <table className='profile-detail-table'>
          <tbody>
            <tr>
              <td> 
                <p>Email:</p> 
              </td>
              <td><p> {profile.email} </p></td>
            </tr>
            <tr>
              <td> 
                <p>Zip: </p>
              </td>
              <td> <p>{profile.zip}</p></td>
            </tr>
          </tbody>
        </table>
          <summary> <b>Profile Details</b> </summary>
          {profile.bio ? 
          <div className='card bluebg'>
          <p className='whitefnt'>{profile.bio}</p>
          </div>
          :
          ""
          }
          <details>

            <summary>Instruments</summary>
            {instrumentData ? 
            <>
              {instrumentData.map((instrument, idx) => 
                <>
                  <p key={idx}>{instrument.name}</p>
                  <button 
                    className='btn btn-danger' 
                    onClick={() => handleDeleteInstrument(profile._id, instrument._id)}
                  >Delete</button>
                </>
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
              {genreData.map((genre, idx) => 
              <>
                <p key={idx}>{genre.name}</p>
                <button 
                    className='btn btn-danger' 
                    onClick={() => handleDeleteGenre(profile._id, genre._id)}
                  >Delete</button>
              </>
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
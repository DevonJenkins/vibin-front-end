import React, { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const ProfileDetails = ({profile, handleDeleteGenre, handleDeleteInstrument}) => {
  const [instrumentData, setInstrumentData] = useState([])
  const [genreData, setGenreData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const imageUrl = profile?.photo ? profile.photo : 'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?w=300&ssl=1'

  useEffect(() => {
    if(profile?.name){
      setInstrumentData(profile.instruments)
      setGenreData(profile.genres)
    }
  }, [profile])
  


  // console.log(props.profile.instruments)
  
  return ( 
    <div className='margin-2
    card column-container yellowbg'id='profile-card' >

      <img src={imageUrl} alt={profile?.photo} height={250} width={250} className='margin-2' /> 
      <details className='margin-2' >

        <table className='profile-detail-table'>
          <tbody>
            <tr>
              <td> 
                <p>Email:</p> 
              </td>
              <td><p> {profile?.email} </p></td>
            </tr>
            <tr>
              <td> 
                <p>Zip: </p>
              </td>
              <td> <p>{profile?.zip}</p></td>
            </tr>
          </tbody>
        </table>
          <summary> <b>Profile Details</b> </summary>
          {profile?.bio ? 
          <div className='card bluebg'>
          <p className='whitefnt'>{profile?.bio}</p>
          </div>
          :
          ""
          }
          <details>

            <summary>Instruments</summary>
            {instrumentData ? 
            <>
              {instrumentData.map((instrument, idx) => 
                <React.Fragment key={idx}>
                  <p>{instrument.name}</p>
                  <button 
                    className='btn btn-danger' 
                    onClick={() => handleDeleteInstrument(profile._id, instrument._id)}
                  >Delete</button>
                </React.Fragment>
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
              <React.Fragment key={idx}>
                <p>{genre.name}</p>
                <button 
                    className='btn btn-danger' 
                    onClick={() => handleDeleteGenre(profile._id, genre._id)}
                  >Delete</button>
              </React.Fragment>
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
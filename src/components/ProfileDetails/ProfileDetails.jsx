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
  

  
  return ( 
    <div className='margin-2 column-container bluebg box-shadow'id='profile-card' >
      <img src={imageUrl} alt="profile-photo" height={250} width={250} className='margin-2 card-top' />
      <details className='margin-2 card-body' >
        <summary className='whitefnt asap summary'>Profile Details</summary>
        <table className="whitefnt">
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
          {profile?.bio ? 
          <div className='card bluebg'>
          <p className='whitefnt'>{profile?.bio}</p>
          </div>
          :
          ""
          }
          <details>
            <summary className='whitefnt asap summary'>Instruments</summary>
            {instrumentData ? 
            <>
              {instrumentData.map((instrument, idx) => 
                <React.Fragment key={idx}>
                  <table className="whitefnt" cellPadding={5}>
                  <tbody>
                    <tr>
                      <td> 
                        <p>{instrument.name}</p>
                      </td>
                      <td>
                        <button 
                          className='btn btn-danger' 
                          onClick={() => handleDeleteInstrument(profile._id, instrument._id)}
                        >Delete</button>
                        </td>
                    </tr>
                  </tbody>
                </table>
                  
                </React.Fragment>
              )}
            </>
            :
            <>
              <p className='whitefnt'>No Instruments Yet</p>
            </>
            }
          </details>
          <details>
            <summary className='whitefnt asap summary'>Genres</summary>
            {genreData ?
            <>
              {genreData.map((genre, idx) => 
              <React.Fragment key={idx}>
                <table className="whitefnt" cellPadding={5}>
                  <tbody>
                    <tr>
                      <td> 
                        <p>{genre.name}</p>
                      </td>
                      <td>
                        <button 
                            className='btn btn-danger' 
                            onClick={() => handleDeleteGenre(profile._id, genre._id)}
                          >Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
              )}
            </>
            :
            <>
              <p className='whitefnt'>No Genres Yet</p>
            </>
            }
          </details>
      </details> 
    </div>
  );
}

export default ProfileDetails;
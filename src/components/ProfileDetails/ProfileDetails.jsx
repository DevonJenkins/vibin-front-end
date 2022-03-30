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
    // .then(data => console.log(data))
    // console.log(props.profile.instruments)
    // instrumentService.getProfileInstruments(props.profile.instruments)
    // .then(instruments => setInstrumentData(instruments))
  }, [props.profile._id])

  // useEffect(() => {
  //   genreService.getAllGenres()
  //   .then(genres => setGenreData(genres))
  // }, [])

  // useEffect(() => {
  //   reviewService.getAllReviews()
  //   .then(reviews => setReviewData(reviews))
  // }, [])

  //how do I get profile details
  return ( 
    <div className='card' id='profile-card' >
      
      <img src={imageUrl} alt={props.profile.photo} height={300} width={300} />
      <details>
        <summary>Profile details</summary>
    
      <p>
        {props.profile.name}
      </p>
      <p>
        {props.profile.email}
      </p>
      <p>
        {props.profile.zip}
      </p>
      <details>
        <summary>Instruments</summary>
      {instrumentData.map(instrument => 
        <p key={instrument._id}>{instrument.name}</p>
                  )}
      </details>
      <details>
        <summary>Genres</summary>
      {genreData.map(genre => 
        <p key={genre._id}>{genre.name}</p>
                  )}
      </details>
      <p>
        {props.profile.bio}
      </p>
      <p>
        {props.profile.reviews}
      </p>


      </details> 
    </div>
  );
}

export default ProfileDetails;
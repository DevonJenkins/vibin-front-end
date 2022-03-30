import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import * as instrumentService from '../../services/instrumentService'
import * as genreService from '../../services/genreService'
import * as profileService from '../../services/profileService'

const AddBand = ({ user, handleLogout }) => {
  const formElement = useRef()
  const navigate = useNavigate()
  const [instruments, setInstruments] = useState([])
  const [genres, setGenres] = useState([])
  const [profiles, setProfiles] = useState([])
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    genres: '',
    creator: '',
    instruments: '',
    members: '',
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  useEffect(() => {
    instrumentService.getAllInstruments()
    .then(instrumentData => setInstruments(instrumentData))
  }, [])

  useEffect(() => {
    genreService.getAllGenres()
    .then(genreData => setGenres(genreData))
  }, [])

  useEffect(() => {
    profileService.getAllProfiles()
    .then(profileData => setProfiles(profileData))
  }, [])

  return ( 
    <main className='card full-page-card column-container whitebg'>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='card edge-card column-container bluebg'>
        <h1 className='whitefnt'>Create a Band</h1>
        <form
          autoComplete="off"
          ref={formElement}
          onSubmit={handleSubmit}
        >
        <table cellPadding={5}>
          <tbody>
            <tr>
              <td className='whitefnt'>Name:</td>
              <td>
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className='whitefnt'>Genres:</td>
              {genres.length ?
              <td>
                <select 
                  id="genres"
                  value={formData.genres}
                  name="genres"
                  onChange={handleChange}
                >
                  <option value=''>--Choose--</option>
                  {genres.map(genre => {
                    return <option key={genre._id} value={genre._id}>{genre.name}</option>
                  })}
                </select>
              </td>
              : 
                <td className='whitefnt'>Loading...</td>
              }
            </tr>
            <tr>
              <td className='whitefnt'>Instruments:</td>
              {instruments.length ?
              <td>
                <select 
                  id='instruments'
                  value={formData.instruments}
                  name="instruments"
                  onChange={handleChange}
                >
                  <option value=''>--Choose--</option>
                  {instruments.map(instrument => {
                    return <option key={instrument._id} value={instrument._id}>{instrument.name}</option>
                  })}
                </select>
              </td>
              : 
                <td className='whitefnt'>Loading...</td>
              }
            </tr>
            <tr>
              <td className='whitefnt'>Members:</td>
              {instruments.length ?
              <td>
                <select 
                  id='members'
                  value={formData.members}
                  name="members"
                  onChange={handleChange}
                >
                  <option value=''>--Choose--</option>
                  {profiles.map(profile => {
                    return <option key={profile._id} value={profile._id}>{profile.name}</option>
                  })}
                </select>
              </td>
              : 
                <td className='whitefnt'>Loading...</td>
              }
            </tr>
          </tbody>
        </table>
        <div className='margin-top'>
          <button
            disabled={!validForm}
            className='margin-2 br padding-2 whitebrdr whitefnt blackbg'
          >
            Create Band
          </button>
          <Link to="/">
            <button className='margin-2 br padding-2 whitebrdr whitefnt blackbg'>Cancel</button>
          </Link>
        </div>
      </form>
      </div>
    </main> 
  );
}

export default AddBand;
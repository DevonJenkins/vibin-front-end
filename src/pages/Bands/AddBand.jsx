import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import * as instrumentService from '../../services/instrumentService'
import * as genreService from '../../services/genreService'

const AddBand = ({ user, handleLogout }) => {
  const formElement = useRef()
  const navigate = useNavigate()
  const [instrumentData, setInstrumentData] = useState([])
  const [genreData, setGenreData] = useState([])
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: ''
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
  }

  // useEffect(() => {
  //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // }, [formData])

  console.log(formElement)

  useEffect(() => {
    instrumentService.getAllInstruments()
    .then(instruments => setInstrumentData(instruments))
  }, [])

  useEffect(() => {
    genreService.getAllGenres()
    .then(genres => setGenreData(genres))
  }, [])

  return ( 
    <main className='card full-page-card column-container whitebg'>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='card edge-card column-container bluebg'>
        <h1 className='whitefnt'>Create a Band</h1>
        <form
          autoComplete="off"
          // onSubmit={handleSubmit}
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
              <td className='whitefnt'>Genre:</td>
              {genreData.length ?
              <td>
                <select name="genre">
                  {genreData.map(genre => {
                    return <option key={genre._id} value={genre.name}>{genre.name}</option>
                  })}
                </select>
              </td>
              : 
                <td className='whitefnt'>Loading...</td>
              }
            </tr>
            <tr>
              <td className='whitefnt'>Instrument:</td>
              {instrumentData.length ?
              <td>
                <select name="genre">
                  {instrumentData.map(instrument => {
                    return <option key={instrument._id} value={instrument.name}>{instrument.name}</option>
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
            // disabled={isFormInvalid()}
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
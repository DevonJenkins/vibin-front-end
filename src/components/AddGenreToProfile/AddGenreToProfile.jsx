import { useEffect, useState } from 'react'
import * as genreService from '../../services/genreService'
import * as profileService from '../../services/profileService'


const AddGenreToProfile = (props) => {
  const [genres, setGenres] = useState([])
  const [formData, setFormData] = useState({
    id: '',
  })

  useEffect(() => {
      genreService.getAllGenres()
    .then(genreData => {
      setGenres(genreData)
      setFormData({id: genreData[0]._id})
    })
  },[])

  const {id} = formData

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddGenre(props.profileId, formData.id)
  }

  return ( 
    <>
      <div>
        <details className='margin-2'>
          <summary className='whitefnt asap summary'>Add A Genre</summary>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <table cellPadding={5}>
              <tbody>
                <tr>
                  <td>
                    <select
                    id='instrument-select'
                    autoComplete='off'
                    className='inputs asap'
                    name='id'
                    value={id}
                    onChange={handleChange}
                    >
                      {genres.map((genre) => 
                        <option
                          key={genre._id} 
                          value={genre._id}
                        >{genre.name}</option>
                      )}
                    </select>
                  </td>
                  <td>
                    <button
                    type='submit'
                    className='margin-2 br padding-2 whitebrdr whitefnt blackbg'
                    >+</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </details>
      </div>
    </>
  );
}

export default AddGenreToProfile
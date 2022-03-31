import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import * as genreService from '../../services/genreService.js'

const AddGenre = props => {
  const navigate = useNavigate()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    try{
      genreService.create(formData)
      navigate('/genres')
      setFormData({
        name: '',
        tag: '',
      })
    } catch (err) {
      console.log(err)
    }
  
  }

  return (
    <>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <main className='card full-page-card column-container whitebg margin-top'>
        <h1 className="whitefnt">Add a Genre</h1>
        <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
          <div className='card edge-card column-container bluebg'>
            <div>
                <table cellPadding={5}>
                  <tbody>
                    <tr>
                      <td className='whitefnt'>Name</td>
                      <td>
                        <input
                          type='text'
                          className='form-control'
                          id='name-input'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className='whitefnt'>Tag</td>
                      <td>
                        <input
                          type='text'
                          className='form-control'
                          id='tag-input'
                          name='tag'
                          value={formData.tag}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className='margin-top'>
              <button
              type='submit'
              className='margin-2 br padding-2 whitebrdr whitefnt blackbg'
              disabled={!validForm}
              >Submit</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default AddGenre
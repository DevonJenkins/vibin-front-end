import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as instrumentService from '../../services/instrumentService'

const AddInstrument = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
  })
  const { name, tag } = formData

  const handleChange = evt => {
    console.log(evt)
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    try{
      instrumentService.create(formData)
      navigate('/instruments')
      setFormData({
        name: '',
        tag: '',
      })
    } catch (err) {
      console.log(err)
    }
  
  }

  return ( 
    <main className='card full-page-card column-container whitebg'>
      <h1 className="whitefnt">Add an Instrument</h1>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className='card edge-card column-container bluebg'>
          <div>
              <table cellPadding={5}>
                <tbody>
                  <tr>
                    <td className='whitefnt'>Name</td>
                    <td>
                      <input
                        type='text'
                        id='name-input'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='whitefnt'>Tag</td>
                    <td>
                      <select 
                      id='tag-select'
                      autoComplete='off'
                      name='tag'
                      value={tag}
                      onChange={handleChange}
                      required
                      >
                        <option value={null}>--Please Choose--</option>
                        <option className='text-truncate' value='percussion'>Percussion</option>
                        <option className='text-truncate' value='string'>String</option>
                        <option className='text-truncate' value='wind'>Wind</option>
                        <option className='text-truncate' value='voice'>Voice</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className='margin-top'>
            <button
            type='submit'
            className='margin-2 br padding-2 whitebrdr whitefnt blackbg'
            >Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default AddInstrument
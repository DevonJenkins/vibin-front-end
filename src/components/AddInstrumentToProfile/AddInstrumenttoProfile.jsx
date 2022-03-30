import { useEffect, useState } from 'react'
import * as instrumentService from '../../services/instrumentService'
import * as profileService from '../../services/profileService'


const AddInstrumentToProfile = (props) => {
  const [instruments, setInstruments] = useState([])
  const [formData, setFormData] = useState({
    id: '',
  })

  useEffect(() => {
      instrumentService.getAllInstruments()
    .then(instrumentsData => setInstruments(instrumentsData))
  },[])

  const id = formData

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    try{
      profileService.addInstrumentToProfile(formData)
      setFormData({
        id: '',
      })
    }catch (err){
      console.log('Error:', err)
    }
  }

  return ( 
    <>
      <div className='card'>
        <details>
          <summary>Add An Instrument</summary>
          <p>Potential Error Message Here</p>
          <form className='row-container' autoComplete='off' onSubmit={handleSubmit}>
            <table cellPadding={5}>
              <tbody>
                <tr>
                  <td>
                    <select
                    id='instrument-select'
                    autoComplete='off'
                    name='id'
                    value={id}
                    onChange={handleChange}
                    >
                      {instruments.map((instrument) => 
                        <option 
                          key={instrument._id} 
                          value={instrument._id}
                        >{instrument.name}</option>
                      )}
                    </select>
                  </td>
                  <td>
                    <button
                    type='submit'
                    className='margin-2 br padding-2 whitebrdr whitefnt blackbg'
                    >Add</button>
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

export default AddInstrumentToProfile
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
    .then(instrumentsData => {
      setInstruments(instrumentsData)
      //Experimenting here-- trying to get the first instrument in the select form to occupy state
      setFormData({id: instrumentsData[0]._id})
    })
  },[])

  const {id} = formData

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddInstrument(props.profileId, formData.id)
  }

  return ( 
    <>
      <div className='card'>
        <details className='margin-2'>
          <summary>Add An Instrument</summary>
          <form className='row-container' autoComplete='off' onSubmit={handleSubmit}>
            <table cellPadding={5}>
              <tbody>
                <tr>
                  <td>
                    <select
                    id='instrument-select'
                    // autoComplete='off'
                    className="asap inputs"
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
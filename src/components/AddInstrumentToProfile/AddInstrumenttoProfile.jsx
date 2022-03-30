import { useEffect, useState } from 'react'
import * as instrumentService from '../../services/instrumentService'


const AddInstrumentToProfile = (props) => {
  const [instruments, setInstruments] = useState([])
  const [formData, setFormData] = useState({
    id: '',
  })

  useEffect(() => {
      instrumentService.getAllInstruments()
    .then(instrumentsData => setInstruments(instrumentsData))
  },[])

  const { id } = formData

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return ( 
    <>
      <div className='card'>
        <details>
          <summary>Add An Instrument</summary>
          <form>
            <select>
              {instruments.map((instrument) => 
                <option 
                  key={instrument._id} 
                  value={instrument._id}
                >{instrument.name}</option>  
              )}
            </select>
            <button>Add</button>
          </form>
        </details>
      </div>
    </>
  );
}

export default AddInstrumentToProfile
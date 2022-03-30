import * as profileService from '../../services/profileService.js'

const DeleteInstrumentFromProfile = (props) => {
  const handleDeleteInstrument = (profileId, instrumentId) => {

  }
  return ( 
    <>
      <button className='btn btn-danger' onClick={handleDeleteInstrument}>Delete</button>
    </>
  );
}

export default DeleteInstrumentFromProfile
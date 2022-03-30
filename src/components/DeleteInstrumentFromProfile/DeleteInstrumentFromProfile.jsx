import * as profileService from '../../services/profileService.js'

const DeleteInstrumentFromProfile = (props) => {
  const handleDeleteInstrument = () => {
    profileService.deleteInstrument(props.profileId, props.instrumentId)
  }
  return ( 
    <>
      <button className='btn btn-danger' onClick={handleDeleteInstrument}>Delete</button>
    </>
  );
}

export default DeleteInstrumentFromProfile
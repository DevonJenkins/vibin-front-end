import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const AddBand = ({ user, handleLogout }) => {
  return ( 
    <main className='card full-page-card column-container whitebg'>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='card edge-card column-container bluebg'>
        <h1 className='whitefnt'>Create a Band</h1>
      </div>
    </main> 
  );
}

export default AddBand;
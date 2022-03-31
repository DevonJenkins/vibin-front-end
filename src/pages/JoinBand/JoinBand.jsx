import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const JoinBand = ({ user, handleLogout }) => {
  return (  
    <>
    <NavBar user={user} handleLogout={handleLogout} />

    <main className='card full-page-card column-container whitebg'>
      
      <div className='card edge-card column-container bluebg'>
        <div className='card landing-logo center-card whitebg'>
          <img src="..//assets/bad-note.png" alt="in-progress-image" />

          {user ? 
            <div className='card'>
              <h3 className='pacifico'>Sorry!</h3>
            </div>
            // map bands based on genre
            //if band.genre && band.genre.tag == profile.genre && profile genre.tag then map the band to a card 

            //How would I display an individual profile card?
              //would it be possible to take our array of profiles, and map them if band.genre==user.genre OR are band and user are NOT matched, OR band and user are NOT rejected
              

              //THEN take that mapped array and split or shift it somehow? 

              //Will I need a handler that takes care of this every time i click? 

              //for each band, on button click, check to see what bands fit the criteria, then display the first band from that bands array. 

              //On Click, the process will happen again to bring up a new band.
              
              //to simplify this, a user will have to select a preferred genre. It seems more simple to base it on one genre rather than an array of genres. 

                  //How would we do it with an array?
                  // If any item in genre array matches any item in band genre  array, then display profile 
            
            
            //ANOTHER APPROACH

            // pick a random profile based on preferences, then go to that profile details view. 
              //preferences
                //Not yet Accepted
                //Not yet Rejected
                //Matches Genre Preference 

            //When in profile details view, 
              //if band, then show accept/reject buttons 
              //if not band, then direct to the "start a band" page 
              //if not user then direct to the signup page

          :
            <h3>Nothing Here Yet!</h3>
          }

        </div>
          <h4 className='whitefnt asap'>We're Still Finding Our Sound Here!</h4>
          <p className='whitefnt asap'>Come back when we've done some more <br/> fine-tuning!</p>
          <div className=' card margin-2  br-5 padding-2 whitebrdr card blackbg asap'>
            <Link className='whitefnt' to='/'>Back</Link>
          </div>
      </div>
    
    </main>
    </>
  );
}

export default JoinBand;
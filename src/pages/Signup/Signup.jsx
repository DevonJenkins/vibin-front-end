import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='card full-page-card column-container whitebg'>
      <div className='card edge-card column-container bluebg'>
        <div>
          <h1 className='whitefnt pacifico'>Sign Up</h1>
          <p className='alertfnt margin-btm'>{message}</p>
          <SignupForm {...props} updateMessage={updateMessage} />
        </div>
      </div>
    </main>
  )
}

export default Signup

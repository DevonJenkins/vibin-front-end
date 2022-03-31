import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='card full-page-card column-container whitebg'>
      <p>{message}</p>
      <div className='card edge-card column-container bluebg'>
      <h1 className='whitefnt' >Change Password</h1>

      <ChangePasswordForm {...props} updateMessage={updateMessage}  />
      </div>
    </main>
  )
}

export default ChangePassword

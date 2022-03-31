import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='card full-page-card column-container whitebg margin-top'>
      <p>{message}</p>
      <div className='card edge-card column-container svgbg'>
      <h1 className='whitefnt pacifico margin-btm' >Change Password</h1>
      <ChangePasswordForm {...props} updateMessage={updateMessage}  />
      </div>
    </main>
  )
}

export default ChangePassword

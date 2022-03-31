import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='card full-page-card column-container whitebg margin-top'>
      <div className='card edge-card column-container svgbg'>
        <div>
          <h1 className='whitefnt pacifico'>Log In</h1>
          <p className='alertfnt asap margin-btm'>{message}</p>
          <LoginForm
            handleSignupOrLogin={props.handleSignupOrLogin}
            updateMessage={updateMessage}
          />
        </div>
      </div>        
    </main>
  )
}

export default LoginPage

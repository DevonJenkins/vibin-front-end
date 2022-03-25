import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='{styles.container}'
    >
      <table>
        <tbody>
          <tr>
            <td className='whitefnt'>Email</td>
            <td><input
                type="text"
                autoComplete="off"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              /></td>
          </tr>
          <tr>
            <td className='whitefnt'>Password</td>
            <td><input
              type="password"
              autoComplete="off"
              id="password"
              value={formData.pw}
              name="pw"
              onChange={handleChange}
            /></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button className='{styles.button}'>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='{styles.container}'
    >
      
      <table cellPadding={5}>
        <tbody>
          <tr>
            <td className='whitefnt labels asap' >Current Password</td>
            <td htmlFor="password" className='whitefnt' >
                <input
                    className='inputs asap'
                type="password"
                autoComplete="off"
                id="password"
                value={pw}
                name="pw"
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td className='whitefnt labels asap' htmlFor="newPassword"  >
                New Password
            </td>
            <td>
            <input
                className='inputs asap'
                type="password"
                autoComplete="off"
                id="newPassword"
                value={newPw}
                name="newPw"
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td className='whitefnt labels asap' htmlFor="newPasswordConf"  >
              Confirm New Password
            </td>
            <td>
            <input
                className='inputs asap'
                type="password"
                autoComplete="off"
                id="newPasswordConf"
                value={newPwConf}
                name="newPwConf"
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className='margin-top row-container'>
        <button disabled={isFormInvalid()} className='margin-2  br-5 padding-2 whitebrdr card blackbg asap'>
          Change Password
        </button>
        <Link to="/">
          <button className='margin-2  br-5 padding-2 whitebrdr card blackbg asap whitefnt'>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default ChangePasswordForm

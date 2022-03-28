import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    avatar: '',
    instruments: '',
    zip: '',
    status: '',
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
    const userFormData = new FormData()
    userFormData.append('photo', formData.avatar)
    userFormData.append('name', formData.name)
    // props.handleAddUser(userFormData)
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const handleChangePhoto = (evt) => {
    setFormData({...formData, photo: evt.target.files[0]})
  }

  const { name, email, password, passwordConf, avatar, instruments, zip, status } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
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
            <td className='whitefnt'>Name</td>
            <td>
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>Email</td>
            <td>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>Password</td>
            <td>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>Confirm Password</td>
            <td>
              <input
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>Profile Photo</td>
            <td>
              <input
                type="text"
                autoComplete="off"
                id="avatar"
                value={avatar}
                name="avatar"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>What instrument(s) do you play?</td>
            <td>
              <input
                type="text"
                autoComplete="off"
                id="instruments"
                value={instruments}
                name="instruments"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>What is your zip code?</td>
            <td>
              <input
                type="text"
                pattern="[0-9]*"
                autoComplete="off"
                id="zip"
                value={zip}
                name="zip"
                onChange={handleChange}
                placeholder="Zip Code"
              />
            </td>
          </tr>
          <tr>
            <td className='whitefnt'>What is your band status?</td>
            <td>
              <select
                type="text"
                autoComplete="off"
                id="status"
                value={status}
                name="status"
                onChange={handleChange}
              >
                  <option value="seeking-band">Seeking Band</option>
                  <option className='text-truncate' value="seeking-band-members">Band Owner Seeking Members</option>
              </select>

            </td>
          </tr>
        </tbody>
      </table>
      <div className='margin-top'>
        <button disabled={isFormInvalid()} className='margin-2 br padding-2 whitebrdr whitefnt blackbg'>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm

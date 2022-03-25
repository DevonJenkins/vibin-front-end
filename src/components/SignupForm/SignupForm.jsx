import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
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
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf, avatar, instruments, zip, status } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="avatar" className={styles.label}>
          Profile Photo
        </label>
        <input
          type="text"
          autoComplete="off"
          id="avatar"
          value={avatar}
          name="avatar"
          onChange={handleChange}
        />
      </div>
      {/* <div className={styles.inputContainer}>
        <label htmlFor="instruments" className={styles.label}>
          What instrument/s do you play?
        </label>
        <input
          type="text"
          autoComplete="off"
          id="instruments"
          value={instruments}
          name="instruments"
          onChange={handleChange}
        />
      </div> */}
      <div className={styles.inputContainer}>
        <label htmlFor="zip" className={styles.label}>
          Where are you located?
        </label>
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
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="status" className={styles.label}>
          What is your band status? 
        </label>
        <select
          type="text"
          autoComplete="off"
          id="status"
          value={status}
          name="status"
          onChange={handleChange}
        >
            <option value="seeking-band">Seeking Band</option>
            <option value="seeking-band-members">Band Owner Seeking Members</option>
          </select>
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
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

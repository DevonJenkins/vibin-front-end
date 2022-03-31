import * as styles from './App.css'
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import MyProfile from './pages/Profiles/MyProfile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddBand from './pages/Bands/AddBand'
import * as authService from './services/authService'
import AddGenre from './pages/Genres/AddGenre'
import * as genreService from './services/genreService'
import AddInstrument from './pages/Instruments/AddInstrument'
import * as instrumentService from './services/instrumentService.js'
import JoinBand from './pages/JoinBand/JoinBand'

const App = () => {
  const [genres, setGenres] = useState([])
  const [instruments, setInstruments] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddGenre = newGenreData => {
    genreService.create(newGenreData)
    .then(newGenre => setGenres([...genres, newGenre]))
    .then(navigate('/'))
    .catch(err => console.log(err))
  }

  const handleAddInstrument = newInstrumentData => {
    instrumentService.create(newInstrumentData)
    .then(newInstrument => setInstruments([...instrumentService, newInstrument]))
    .then(navigate('/'))
    .catch(err => console.log(err))
  }

  const getAllInstruments = () => {
    instrumentService.getAllInstruments()
    .then(allInstrumentData => setInstruments(allInstrumentData))
    .catch(err => console.log(err))
  }

  return (
    <>
      <Routes>
        <Route 
        path="/" 
        element={<Landing 
                  user={user}  
                  handleLogout={handleLogout}
                  navigate={navigate}
          />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path='/myprofile' element={user ? <MyProfile 
                                              user={user}
                                              navigate={navigate}
                                              getAllInstruments={getAllInstruments}
                                              /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/genres"
          element={user ? <AddGenre handleAddGenre={handleAddGenre} /> : <Navigate to="/login" />}
        />
        <Route 
          path="/instruments"
          element={user ? <AddInstrument handleAddInstrument={handleAddInstrument} /> : <Navigate to="/login" />}
        />
        <Route 
        path="/joinBand"
        element={ <JoinBand/>  }
        />
        <Route
          path="/createBand"
          element={
            user ? <AddBand
              user={user}  
              handleLogout={handleLogout}
              navigate={navigate}
            /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App

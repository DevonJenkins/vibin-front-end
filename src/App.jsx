import * as styles from './App.css'
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddGenre from './pages/Genres/AddGenre'
import * as genreService from './services/genreService'

const App = () => {
  const [genres, setGenres] = useState([])
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
      </Routes>
    </>
  )
}

export default App

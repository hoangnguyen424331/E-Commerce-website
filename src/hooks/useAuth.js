import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LocalStorage from 'src/constants/localStorage'
import { path } from '../constants/path'
import { auth } from 'src/firebase/firebase'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from '@firebase/auth'
import { register, fetchUser } from 'src/pages/Auth/auth.slice'

const useAuth = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState(null)
  const authenticated = useSelector(state => Boolean(state.auth.profile.id))

  const registerWithEmailAndPassword = async data => {
    const { firstName, lastName, email, password } = data

    try {
      const reponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
        photoURL:
          'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
      })

      if (reponse.user) {
        const { accessToken, uid, displayName, photoURL } = reponse.user
        const newUser = {
          accessToken,
          id: uid,
          displayName,
          photoURL,
          role: 'user',
          firstName,
          lastName,
          email
        }

        localStorage.setItem(LocalStorage.accessToken, accessToken)
        dispatch(register(newUser))
        setError(null)
        history.push(path.login)
      }
    } catch (error) {
      setError(error)
    }
  }

  const loginWithEmailAndPassword = async data => {
    const { email, password } = data
    try {
      const reponse = await signInWithEmailAndPassword(auth, email, password)
      if (reponse.user) {
        const { accessToken, uid: userId } = reponse.user

        localStorage.setItem(localStorage.accessToken, accessToken)
        dispatch(fetchUser(userId))
        setError(null)
        history.push(path.home)
      }
    } catch (error) {
      setError(error)
    }
  }

  let errorMessage
  switch (error?.code) {
    case 'auth/email-already-in-use':
      errorMessage = 'Email nãy đã sử dụng'
      break
    case 'auth/wrong-password':
      errorMessage = 'Sai mật khẩu'
      break
    case 'auth/wrong-not-found':
      errorMessage = 'Tài khoản này không tồn tại'
      break
    default:
      errorMessage = error?.code
  }

  return {
    authenticated,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    error: errorMessage
  }
}

export default useAuth

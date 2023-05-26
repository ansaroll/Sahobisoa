import React, { useEffect } from 'react'
import { auth } from '../../firebase'
import MainLoader from '../../components/atom/MainLoader'

const Logout = () => {

  useEffect(() => {
    localStorage.removeItem("token")
    auth.signOut()
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        window.location.href = "/"
      }
    })
    return () => unsubscribe()
  }, [auth])

  return (
    <MainLoader />
  )
}

export default Logout
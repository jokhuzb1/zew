import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './NotFound.module.css'
export default function NotFound() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  setInterval(() => {
    setSeconds(seconds - 1);
  }, 1000)
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  return (
    <div className={cls.notFound}>
      <h1> Page Not Found</h1>
      <h5>You are being redirected to Home page in {seconds}...</h5>
    </div>
  )
}

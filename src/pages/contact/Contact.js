import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import cls from "./Contact.module.css"
export default function Contact() {
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setError("Unexpected error occured, please try again later or use alternative contact method");
    setTimeout(() => {
      setError('')
    }, 10000)
  }
  return (
    <div className={cls.contact}>
      <div className={cls.cDetails} >
        <div className={cls.address}>
          <span className={cls.top}><FontAwesomeIcon className={cls.icon} icon={faLocationDot} /> <span>Address</span></span>
          <p>Namangan City, LOLA MFY, Boburshoh street 44
            Namangan Province Uzbekistan</p>
        </div>
        <div className={cls.address}>
          <span className={cls.top}><FontAwesomeIcon className={cls.icon} icon={faPhone} /> <span>Phone</span></span>
          <p> +998951057870</p>
          <p> +998972457717</p>
        </div>
        <div className={cls.address}>
          <span className={cls.top}><FontAwesomeIcon className={cls.icon} icon={faEnvelope} /> <span>Email</span></span>
          <p> zeytun-text@gmail.com</p>
          <p> jokhuzb@mail.ru</p>
        </div>
      </div>
      <div className={cls.map} >
        <form onSubmit={handleSubmit}>
          <label >Full Name</label>
          <input type="text" />
          <label >Email</label>
          <input type="text" />
          <label>Message</label>
          <input type="textarea" className={cls.textarea} />
          <button type="submit">Send </button>
          <p className={cls.error}>{error}</p>
        </form>
      </div>
    </div>
  )
}

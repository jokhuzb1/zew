import React from 'react'
import ImageGallery from '../../components/imageGallery/ImageGallery'
import cls from './About.module.css';
export default function About() {
  return (
    <div>
      <div className={cls.description}>
        <h1>About Us</h1>
        <h5>
          "Zeytun-textile" MChJ has been established in 2022 under the "KIA MOTORS TRADING GROUP", with its new brand name company has rapidly gained popularity within local businesses and currently expanding to easter european countries. "Zeytun-textile" currently operates with its brand new 2022 technology Wiltop-tex Air jet loom 9100 and producing up-to 70 tonns of poplin fabrics per month and still expanding.
          at the moment company has almost 200 employees working daily over three shifts. Each per square meter is thoroughly inspected in order to achieve for best quality
        </h5>
        <h5>
          Textile industry has been family business for over 30 years, up until now and still we have been producing high quality towels at our "BUNYOD MChJ" company, which has been successfully exported to Eastern european countries and very well known to local businesses
        </h5>
      </div>
      <ImageGallery />

    </div>
  )
}

import React from 'react'
import img1 from '../../assets/gallery/1.jpg'
import img2 from '../../assets/gallery/2.jpg'
import img3 from '../../assets/gallery/3.jpg'
import img4 from '../../assets/gallery/4.jpg'
import img5 from '../../assets/gallery/5.jpg'
import cls from './Image.module.css';
export default function ImageGallery() {
  return (
    <div className={cls.gallery}>
      <div className={cls.description}>
        <p>In Ausgust 2022 company have had opening day and welcomed people across the country to present production process, One of the main guests were city Governors and local expoters </p>
      </div>
      <div className={cls.top}>
        <img className={cls.im} src={img1} alt="fac" />
        <img className={cls.im} src={img3} alt="fac" />
      </div>
      <div className={cls.bottom}>
        <img className={cls.im} src={img2} alt="fac" />
        <img className={cls.im} src={img4} alt="fac" />
        <img className={cls.im} src={img5} alt="fac" />
      </div>
    </div>
  )
}

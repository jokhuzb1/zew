import React from 'react'
import CarouselContainer from '../../components/carousel/CarouselContainer'
import Content from '../../components/content/Content'
import Export from '../../components/export/Export'
import cls from './Home.module.css'
import factoryImage from '../../assets/d.JPG'
import productImage from '../../assets/p2.jpg'


export default function Home() {


  return (
    <div className={cls.home}>
      <CarouselContainer />
      <Content img={factoryImage} />
      <Export />
      <Content img={productImage} />
    </div>
  )
}

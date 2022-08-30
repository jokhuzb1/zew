import Carousel from 'react-bootstrap/Carousel';
import cls from './Carousel.module.css';
import bg1 from '../../assets/bg.jpg'
import bg2 from '../../assets/bg2.JPG'
import bg3 from '../../assets/bg3.JPG'
export default function CarouselContainer() {
  return (
    <div className={cls.carouselContainer} >
      <h1>Zeytun tex</h1>
      <Carousel
        fade
        className={cls.carousel}
        controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Poplin fabrics</h3>
            <p>Made with 100% cotton</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Latest equipment</h3>
            <p>2022 Equipped with Wiltop-Tex Air Jet Loom 9100</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Worldwide export</h3>
            <p>
              Exporting across all europe and asia
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

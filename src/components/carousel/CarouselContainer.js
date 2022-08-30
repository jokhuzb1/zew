import Carousel from 'react-bootstrap/Carousel';
import cls from './Carousel.module.css';

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
            src='https://2.downloader.disk.yandex.com/preview/0687fa75bab92368ab1fcca59fed79d459293dfa5e46add76d750e33851acc7c/inf/sGVaZ3o8uWse3ZSp-v8ueLGD-DuqE-OPQFnnnVa_q3CuMc_9FTX9A9FSUFCF7SjP4Od8QAhZxDBjWxqyoPlBlQ%3D%3D?uid=1680697291&filename=bg.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976'
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
            src='https://2.downloader.disk.yandex.com/preview/84286ee76929c3089210247ca7080d4fafed8ef372571149f855107a58944f61/inf/vdkkxkrPbQX5nWU5SYQvCf373ZX4NIguH7EqX1J5M3JubHIraIVR4tJ3OTCsBzgaGHqSRMPsHtOtm9ymhGn_cg%3D%3D?uid=1680697291&filename=bg2.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976'
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
            src='https://1.downloader.disk.yandex.com/preview/796f49915a14cf3e257d410473e28d42e2fe2721ac5cccfb28357a8e33e51dc8/inf/7fcGD-BWVl0wR1FBtN9oAsbfF5X2N8pqPsh8cjHFsXGbWhOWfsFQYF6Xsv8albzEbLhBIbTvnGKpaEygsHyg_g%3D%3D?uid=1680697291&filename=bg3.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976'
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

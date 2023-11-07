import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/posto1.png' alt="" />
        <Carousel.Caption>
          <h3>Petobras</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/posto2.png' alt="" />
        <Carousel.Caption>
          <h3>Abertos a noite</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/posto3.png' alt="" />
        <Carousel.Caption>
          <h3>24 horas</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;
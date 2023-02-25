import { Carousel } from 'antd';

import ourStory from './../Assets/walking3.jpg';
import mainPhoto from './../Assets/mainPhoto.jpg';
import rings from './../Assets/rings.png';
import walking from './../Assets/walking.jpg';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  // background: '#f0ccbb',
};

function CarouselSlider() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
        <img
          src={ourStory}
          className="carousel__img"
          alt="logo iryna & yurii wedding"/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          src={mainPhoto}
          className="carousel__img"
          alt="logo iryna & yurii wedding"/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          src={rings}
          className="carousel__img"
          alt="logo iryna & yurii wedding"/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          src={ourStory}
          className="carousel__img"
          alt="logo iryna & yurii wedding"/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          src={walking}
          className="carousel__img"
          alt="logo iryna & yurii wedding"/>
        </h3>
      </div>
    </Carousel>
  );
}

export default CarouselSlider;

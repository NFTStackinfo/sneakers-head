import { ComingSoonStyle } from './ComingSoon.style';
import AirModel from '../AirModel/AirModel';
import Preloader from '../Preloader/Preloader';
import { Icon } from '../UIKit';

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      <Preloader />
        <img className='img-abs cloud1' src="assets/coming-soon/cloud1.png" alt=""/>
        <img className='img-abs cloud2' src="assets/coming-soon/cloud2.png" alt=""/>
        <img className='img-abs head1' src="assets/coming-soon/floating-head-1.png" alt=""/>
        <img className='img-abs head2' src="assets/coming-soon/floating-head-2.png" alt=""/>
        <div className='top'>
            <div className="title-wrapper">
                <img src="assets/coming-soon/title.png" alt=""/>
            </div>
            <div>
                <ul className='social'>
                    <li>
                        <a
                            target='_blank'
                            href='https://twitter.com/sneakerheadsoff'
                            rel='noreferrer'
                            className='social-btn'
                        >
                            <Icon name='twitter' size={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      <div className='content'>

        <div className='left'>
          {/*<AirModel />*/}
            <img src="assets/coming-soon/model.png" alt="Sneakers Head"/>
        </div>
        <div className='right'>
          <div>
            <h1 className='title'>
              We're still <br /> building...
            </h1>
          </div>
          <p className='text'>
              Our genesis collection of 10,000  Sneakerheads has been meticulously designed by our legendary artist Ali Dawood. Ali has created over 50+ 3D hand-drawn base models called “Sneakerheads” that will act as the OG pieces in everything we do
          </p>
          <span>
            By <a href='https://mobile.twitter.com/ill_lawi' target='_blank' rel='noreferrer'>ALI DAWOOD</a>
          </span>
        </div>
      </div>
    </ComingSoonStyle>
  );
};

export default ComingSoon;

import { ComingSoonStyle } from './ComingSoon.style';
import AirModel from '../AirModel/AirModel';
import Preloader from '../Preloader/Preloader';
import { Icon } from '../UIKit';

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      <Preloader />
      <div className='content'>
        <div className='top'>
          <h4>Sneakers Head</h4>
          <div>
            <ul className='social'>
              <li>
                <a
                  target='_blank'
                  href='#'
                  rel='noreferrer'
                  className='social-btn'
                >
                  <Icon name='twitter' size={32} />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='#'
                  rel='noreferrer'
                  className='social-btn'
                >
                  <Icon name='discord' size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='left'>
          <AirModel />
        </div>
        <div className='right'>
          <div>
            <h1 className='title'>
              We're still <br /> building...
            </h1>
          </div>
          <p className='text'>
            Sneaker Head is a project composed of 8,888 NFTs crafted by talented
            and expert designers and developers. We unified the most experienced
            people in the industry to deliver a remarkable, cutting-edge
            product.
          </p>
          <span>
            By <a href='#'>ALI DAWOOD</a>
          </span>
        </div>
      </div>
    </ComingSoonStyle>
  );
};

export default ComingSoon;

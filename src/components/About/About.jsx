import { forwardRef, useEffect, useRef, useState } from 'react';
import { AboutStyle } from './About.style';
import { Fade } from 'react-awesome-reveal';
import { useOnScreen } from '../../hooks/useOnScreen';

const HaveIdea = forwardRef((props, ref) => {
  const [onScreen, setOnScreen] = useState(false);
  const aboutRef = useRef();
  const aboutScreen = useOnScreen(aboutRef);

  useEffect(() => {
    if (aboutScreen) {
      setOnScreen(true);
    }
  }, [aboutScreen]);

  return (
    <AboutStyle ref={ref}>
      <div className='container'>
        <div className='content'>
          <div className='content-top'>
            <div className='info'>
              <div className={`animated ${onScreen ? 'fade-in' : ''}`}>
                <h1 className='title'>SNEAKERS HEAD</h1>
              </div>
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.9}
                delay={800}
                duration={800}
              >
                <p className='text'>
                  Sneaker Head is a project composed of 8,888 NFTs crafted by
                  talented and expert designers and developers.
                </p>
                <p className='text'>
                  We unified the most experienced people in the industry to
                  deliver a remarkable, cutting-edge product.
                </p>
              </Fade>
            </div>
            <div className='image'>
              <img src='/assets/goldHead.png' alt='' />
            </div>
          </div>
          <div className='content-bottom'>
            <div className='content-bottom-image'>
              <img src='assets/faces.png' alt='faces' />
            </div>
            <div className='content-bottom-text'>
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.9}
                delay={800}
                duration={800}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  non magna a massa tincidunt facilisis.
                </p>
              </Fade>
            </div>
          </div>
          <div ref={aboutRef} />
        </div>
      </div>
    </AboutStyle>
  );
});

export default HaveIdea;
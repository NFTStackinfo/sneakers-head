import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PreloaderStyle } from './Preloader.style';

function Preloader({ handleLoad }) {
  const [value, setValue] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const counter = React.useRef(0);

  React.useEffect(() => {
    let images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img.complete) {
        incrementCounter(images.length);
      } else {
        img.addEventListener('load', () => incrementCounter(images.length));
      }
    });
    return () => {
      setValue(0);
      counter.current = 0;
    };
  }, []);

  function incrementCounter(len) {
    counter.current++;
    if (counter.current === len) {
      setValue(100);
      setTimeout(() => {
        setLoaded(true);
      }, 400);
    } else {
      setValue((counter.current * 100) / 80);
    }
  }
  React.useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        if (handleLoad) {
          handleLoad();
        }
      }, 400);
    }
  }, [loaded, handleLoad]);

  return loaded ? null : (
    <PreloaderStyle>
      <div className='progress'>
        <CircularProgressbarWithChildren value={value}>
          <img src={'assets/roadmap/1.png'} alt='loader' />
        </CircularProgressbarWithChildren>
      </div>
      <span>{value.toFixed()}%</span>
    </PreloaderStyle>
  );
}

export default React.memo(Preloader);

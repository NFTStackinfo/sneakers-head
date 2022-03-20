import React, { forwardRef, useState } from 'react';
import { theme } from '../../styles/theme';
import { RoadmapStyle } from './Roadmap.style';
import { Fade } from 'react-awesome-reveal';
import { init, render } from '../shader';
import ShaderEffect from '../ShaderEffect/ShaderEffect';

const cards = [
  {
    phase: 'PHASE 01',
    title: 'Imeginations Run Wild',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non magna a massa tincidunt facilisis.',
  },
  {
    phase: 'PHASE 01',
    title: 'Imeginations Run Wild',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non magna a massa tincidunt facilisis.',
  },
  {
    phase: 'PHASE 01',
    title: 'Imeginations Run Wild',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non magna a massa tincidunt facilisis.',
  },
];
const Roadmap = forwardRef((props, ref) => {
  const onCallback = (e) => {
    console.log(e);
  };
  React.useEffect(() => {}, []);
  return (
    <RoadmapStyle ref={ref}>
      <div className='container'>
        <div className='content'>
          <Fade triggerOnce direction={'up'} fraction={0.5} duration={800}>
            <h1 className='title'>ROADMAP TEASER</h1>
          </Fade>
          <div className='cards-container'>
            {cards.map(({ phase, title, info }, index) => (
              <div key={index} className='roadmap-card'>
                <div className='card-image'>
                  <img src={`assets/roadmap/${index + 1}.png`} alt='' />
                  <canvas id={'canvas' + index} />
                </div>
                <Fade
                  triggerOnce
                  direction={'up'}
                  fraction={0.5}
                  duration={800}
                >
                  <div className='card-info'>
                    <span>{phase}</span>
                    <h4>{title}</h4>
                    <p>{info}</p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RoadmapStyle>
  );
});

export default Roadmap;

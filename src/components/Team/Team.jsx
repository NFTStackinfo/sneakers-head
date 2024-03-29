import React, { forwardRef } from 'react';
import { TeamStyle } from './Team.style';
import { Fade } from 'react-awesome-reveal';
import { Icon } from '../UIKit';

const teamList = [
  {
    position: 'Artist',
    name: 'Onix Animations',
  },
  {
    position: 'Business & Project Lead',
    name: 'MetaGoat',
  },
  {
    position: 'Marketing & Promotions',
    name: 'MetaGoat Tech',
  },
  {
    position: 'Software Development',
    name: 'NFT stack',
  },
  {
    position: 'Marketing & Promotions',
    name: 'MetaGoat Tech',
  },
  {
    position: 'Software Development',
    name: 'NFT stack',
  },
];

const Team = forwardRef((props, ref) => {
  return (
    <TeamStyle ref={ref}>
      <div className='container'>
        <div className='content'>
          <Fade
            triggerOnce
            direction={'up'}
            fraction={0.8}
            duration={1000}
            delay={0}
          >
            <h1 className='title'>DISCOVER OUR TEAM</h1>
          </Fade>
          <Fade triggerOnce direction={'up'} fraction={0.8} duration={1000}>
            <div className='team-card main-artist'>
              <div className='img-wrapper'>
                <img src='/assets/team/artist.png' alt='BamBoozles' />
              </div>
              <p className='name'>Name</p>
              <p className='position'>Artist</p>
            </div>
          </Fade>
          <Fade triggerOnce direction={'up'} fraction={0.8} duration={1000}>
            <ul className='team-list'>
              {teamList.map(({ name, position, url }) => {
                return (
                  <li className='team-card' key={name}>
                    <div className='img-wrapper'>
                      <img src='/assets/team/maskHead.png' alt='BamBoozles' />
                    </div>
                    <p className='name'>
                      {url ? (
                        <a href={url} target='_blank' rel='noreferrer'>
                          {name}
                          <Icon name='link' size={24} />
                        </a>
                      ) : (
                        name
                      )}
                    </p>
                    <p className='position'>{position}</p>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </TeamStyle>
  );
});

export default Team;

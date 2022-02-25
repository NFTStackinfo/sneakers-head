import React from 'react';
import s from './AppLinkBtnTwitter.module.scss'
import Twitter from "../icons/Twitter";

function AppLinkBtnTwitter({join=false, bg='#4997DF', fill="#ffffff", text="#ffffff"}){
    return (
        <a className={`${s.button}`} href="https://mobile.twitter.com/sneakerheadoff" target="_blank"
           rel="noreferrer"
            style={{backgroundColor: bg, color: text}}
        >
            <Twitter fill={fill}/>
            {join ? 'Join Our' : ''} Twitter
        </a>
    );
}

export default AppLinkBtnTwitter;
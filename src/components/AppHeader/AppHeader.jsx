import React, {useEffect, useState} from 'react';
import s from './AppHeader.module.scss'
import Twitter from "../UI/icons/Twitter";
import MenuBurger from "../UI/icons/MenuBurger";
import Close from "../UI/icons/Close";
import {getCoords, scrollToSmoothly, smoothScrollTo,} from "../../utils/smootScroll";
import {isSafari} from "react-device-detect";
import AppLinkBtnTwitter from "../UI/AppLinkBtnTwitter/AppLinkBtnTwitter";

function AppHeader(props) {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [positions, setPositions] = useState({})

    const scrollTo = (name) => {
        if (isSafari) {
            smoothScrollTo( document.documentElement, positions[name] - 100, 1350)
        } else {
            scrollToSmoothly( positions[name] - 100, 1)
        }
    }

    useEffect(() => {
        setPositions({
            about_us:  getCoords(document.querySelector(`#about_us`)).top,
            roadmap:  getCoords(document.querySelector(`#roadmap`)).top,
        })
    }, [])

    return (
        <div>
            <div className={s.fh} />
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <a href="#"><img src="/assets/images/logo.svg" alt=""/></a>
                    </div>

                    <nav className={s.nav}>
                        <ul>
                            <li><a onClick={() => scrollTo('about_us')}>About</a></li>
                            <li><a onClick={() => scrollTo('roadmap')}>Roadmap</a></li>
                        </ul>
                    </nav>

                    <div className={s.rightMenu}>
                        <div className={s.socialsContainer}>
                            <AppLinkBtnTwitter/>
                        </div>

                        <div>
                            <button className={s.mobileMenu} onClick={() => setShowMobileNav(true)}>
                                <MenuBurger />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${s.mobileNav} ${showMobileNav ? s.active : ''}`}>
                <div className={s.mobileNavHeader}>
                    <button className={s.btnIcon} onClick={() => setShowMobileNav(false)}><Close/></button>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about_us" onClick={() => setShowMobileNav(false)}>About</a></li>
                        <li><a href="#roadmap" onClick={() => setShowMobileNav(false)}>Roadmap</a></li>
                    </ul>
                </nav>
                <div className={s.mobileSocialsContainer}>
                    <AppLinkBtnTwitter/>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
import React, {useEffect, useRef} from 'react';
import s from './AppFooter.module.scss'
import Twitter from "../UI/icons/Twitter";

function AppFooter(props) {
    return (
        <div className={s.section}>
            <footer className={s.footer}>
                <div className={s.container}>
                    <p>©All rights reserved. 2022</p>

                    <ul className={s.socials}>
                        <li>
                            <a href="https://mobile.twitter.com/sneakerheadoff" target="_blank" rel="noreferrer">
                            <Twitter/>
                        </a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default AppFooter;
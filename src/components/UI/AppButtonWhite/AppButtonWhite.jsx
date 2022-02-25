import React from 'react';
import s from './AppButtonWhite.module.scss'

function AppButtonWhite({children, to=''}) {
    return (
        <a className={`${s.button}`} href={to} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}

export default AppButtonWhite;
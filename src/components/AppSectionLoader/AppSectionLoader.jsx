import React, {useEffect} from 'react';
import s from './AppSectionLoader.module.scss'

function AppSectionLoader(props) {
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};
    const preventDefault = (e) => {
        e.preventDefault();
    }

    const preventDefaultForScrollKeys = (e) => {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    let supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get() {
                supportsPassive = true;
            }
        }));
    } catch (e) {
    }

    const wheelOpt = supportsPassive ? {passive: false} : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    const addDisableScroll = () => {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    const removeDisableScroll = () => {
        window.removeEventListener('DOMMouseScroll', preventDefault); // older FF
        window.removeEventListener(wheelEvent, preventDefault); // modern desktop
        window.removeEventListener('touchmove', preventDefault); // mobile
        window.removeEventListener('keydown', preventDefaultForScrollKeys);
    }

    useEffect(() => {
        addDisableScroll()
        return () => {
            removeDisableScroll()
        }
    }, [])


    return (
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.containerImg}>
                    <img src="/assets/images/logo.png" alt="Sneaker Head"/>
                </div>
            </div>
        </div>
    );
}

export default AppSectionLoader;
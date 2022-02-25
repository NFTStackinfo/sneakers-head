import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import s from './SectionGallery.module.scss'
import Glide, {Autoplay} from '@glidejs/glide/dist/glide.modular.esm'

function AppSectionGallery(props) {
    const srcGallery = `/assets/images/gallery/`
    const gallery = [
        `${srcGallery}g-1.png`, `${srcGallery}g-2.png`, `${srcGallery}g-3.png`,
        `${srcGallery}g-4.png`, `${srcGallery}g-5.png`, `${srcGallery}g-6.png`,
        `${srcGallery}g-7.png`, `${srcGallery}g-8.png`, `${srcGallery}g-9.png`,
        `${srcGallery}g-10.png`, `${srcGallery}g-11.png`,
    ];
    const [slidesPerView, setSlidesPerView] = useState(4)
    const [glide, setGlide] = useState(new Glide('.gallery-carousel', {
        type: 'carousel',
        startAt: 0,
        perView: slidesPerView,
        gap: 0,
        autoplay: true,
        hoverpause: false,
        keyboard: false,
        animationDuration: 3000,
        rewind: false,
        animationTimingFunc: 'linear'
    }))

    function setSlidesCount() {
        const windowWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        let imageWidth = 184

        if (windowWidth >= 576) {
            imageWidth = 310
        }

        const slidesCount = +((windowWidth / imageWidth).toFixed(2))
        setSlidesPerView(slidesCount)
    }

    const $container = useRef(null)

    useEffect(() => {
        setSlidesCount()
        window.addEventListener('resize', setSlidesCount, false)
        glide.mount({Autoplay})

        return () => {
            window.removeEventListener('resize', setSlidesCount)
        }
    }, [])

    useEffect(() => {
        glide.update({ perView: slidesPerView })
    }, [slidesPerView])


    return (
        <section className={s.section} id="gallery">
            <div className={s.container} ref={$container}>
                <div className="glide gallery-carousel">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {gallery.map(src => (
                                <li key={src}>
                                    <div className={s.imgContainer}>
                                        <img src={src} alt="Ape"/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

// {gallery.map(src => (
//     <SplideSlide key={src}>
//         <div className={s.imgContainer}>
//             <img src={src} alt="Ape"/>
//         </div>
//     </SplideSlide>
// ))}

export default AppSectionGallery;
import React, {useEffect, useRef} from 'react';
import AppSectionTextContent from "../AppSectionTextContent/AppSectionTextContent";
import s from './AppSectionAboutUs.module.scss'

function AppSectionAboutUs(props) {
    const paragraphs = [
        'Sneaker Head represents the synergy between the world of fashion and digital ownership. When buying a Sneaker Head you are not only owning a digital collectible but also gaining access to the forefront of evolution in the fashion industry in the metaverse. We are going to create exclusive digital collections with well-known clothing brands reserved for Sneaker Head holders.',
        'The blockchain brings the decentralization and community around new digital initiatives, and we have the vision to keep it that way. That’s why we decided to split the revenue made with the fashion industry directly with our community and core holders.',
        'The money earned will be given to our holders in terms of tokens, exclusive branded NFT drops, and physical merch drops from all our fashion partners.',
    ]

    return (
        <section className={s.section} id="about_us">
            <div className={s.container}>
                <div className={s.left} id="aboutUs">
                    <AppSectionTextContent
                        paragraphs={paragraphs}
                        name="About"
                        title="ABOUT SNEAKER HEAD "
                    />
                </div>

                <div className={s.imgContainer}>
                    <div className={s.imgBlock}>
                        <img src="/assets/images/about/about.jpg" alt="About us"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppSectionAboutUs;
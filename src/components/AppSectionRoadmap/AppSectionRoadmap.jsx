import React, {useEffect, useRef} from 'react';
import s from './AppSectionRoadmap.module.scss'
import AppSectionRoadmapStep from "../AppSectionRoadmapStep/AppSectionRoadmapStep";
import {animateVisible} from "../../utils/animateVisible";
import AppSectionTitleAnimated from "../AppSectionTitleAnimated/AppSectionTitleAnimated";

function AppSectionRoadmap(props) {
    const roadmapData = [
        {
            number: '01',
            title: 'GENESIS',
            description: `We took more than two months to create each of the sneaker head to make them look as best as possible. We then designed each of their design – the materials and textures with our team. Our goal was to go beyond the boundaries of everything made so far and provide a fashion look through detailed and fabrics.`,
        },
        {
            number: '02',
            title: 'SALE EVENT',
            description: `The collection of 8,888 NFTs will be directly available for purchase on our website. Please use only the link provided by our social media account or in Discord . The security of our holders is our top priority, and so we have spent an immense amount of time with our cyber security experts to secure and protect our website against any attack or scams, as well as to provide our holders with the most gas efficient ERC-721 token possible.`,
        },
        {
            number: '03',
            title: 'DISCOVERY',
            description: `After the reveal of the artwork, you will be able to know which character, ethnicity, and clothing style you successfully minted. The rarity rank of your NFT will be directly available across the main two rarity services available – Rarity Tools and Rarity Sniper.`,
        },
        {
            number: '04',
            title: 'CONQUER THE METAVERSE',
            description: `One week after the mint, we will create the token economics for our ecosystem. Our goal is to be the pioneers of luxury fashion in the metaverse. We will provide support for luxury fashion brands around the world to showcase their digital collection with our 3D model.`,
        },
        {
            number: '05',
            title: 'READY PLAYER ONE',
            description: `After a few successful partnerships in Q1, 2022, we will implement ourselves in Sandbox and Decentraland. We will create a virtual fashion show with all our partners that will be retransmitted live across social media. The goal is to replicate the real world’s well-known fashion parade and make it an unbelievable digital experience.`,
        },
    ]

    const $stepsCont = useRef(null)
    let $steps = []
    let stepsLength
    let $stepsContent = []


    const animate = () => {
        let activeAnimations = stepsLength
        $steps.forEach(($s, idx) => {
            if (!$stepsContent[idx].classList.contains('active')) {
                animateVisible({
                    visibleEl: $s,
                    animateEl: $stepsContent[idx],
                    duration: 1,
                    visiblePart: 0.2,
                    animationName: 'fadeInUp__50',
                    presetClass: 'fadeInUp__50__preset'
                })
                activeAnimations -= 1
            }
        });
        if (activeAnimations === stepsLength) {
            removeEventListeners()
        }
    }



    function addEventListeners () {
        document.addEventListener('DOMContentLoaded', animate, false);
        document.addEventListener('load', animate, false);
        document.addEventListener('scroll', animate, false);
        document.addEventListener('resize', animate, false);
    }

    function removeEventListeners () {
        document.removeEventListener('DOMContentLoaded', animate, false);
        document.removeEventListener('load', animate, false);
        document.removeEventListener('scroll', animate, false);
        document.removeEventListener('resize', animate, false);
    }

    useEffect(() => {
        addEventListeners()
        $steps = [...$stepsCont.current.querySelectorAll(`[data-type="step-cont"]`)]
        stepsLength = $steps.length
        $stepsContent = $stepsCont.current.querySelectorAll(`[data-type="roadmap-step-content"]`)
        animate()
        return () => {
          removeEventListeners()
        }
    }, [])


    return (
        <section className={s.section} id="roadmap">
            <div className={s.container}>
                <AppSectionTitleAnimated
                    name={'Roadmap'}
                    title={'We Have big plans for SNEAKER HEAD'}
                />

                <div className={s.steps} ref={$stepsCont}>
                    {roadmapData.map((st, idx) => (
                        <div key={st.number} className={s.stepCont} data-type="step-cont">
                                <AppSectionRoadmapStep
                                    number={st.number}
                                    title={st.title}
                                    description={st.description}
                                    line={roadmapData.length-1 > idx}
                                />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default AppSectionRoadmap;
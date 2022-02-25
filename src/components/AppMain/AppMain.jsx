import React from 'react';
import s from './AppMain.module.scss'
import ToDown from "../UI/icons/ToDown";
import AppButtonWhiteBig from "../UI/AppButtonWhiteBig/AppButtonWhiteBig";
import AppLinkBtnTwitter from "../UI/AppLinkBtnTwitter/AppLinkBtnTwitter";

function AppMain(props) {
    return (
        <div>
            <main className={s.main}>
                <div className={s.container}>
                    <div className={s.content}>
                        <h1 className="animate__bounceInDown animation animate__duration-1500">
                            SNEAKER HEAD
                        </h1>
                        <div className={`${s.contentText} animate__fadeInUp__75  animation  animate__duration-1500`}>
                            <p className={s.mt6}>
                                Sneaker Head is a project composed of 8,888 NFTs crafted by talented and expert
                                designers and developers.
                            </p>
                            <p className={[s.mt4, s.mb6].join(' ')}>
                                We unified the most experienced people in the industry to deliver a remarkable, cutting-edge product.
                            </p>
                            <AppLinkBtnTwitter
                                join
                                text="#000000"
                                fill="#000000"
                                bg="#FFB800"
                            />
                        </div>
                    </div>

                    <div className="animate__bounce animation animate__duration-1500 animate__infinite">
                        <ToDown/>
                    </div>
                </div>
                <div className={`${s.banner} `}>
                    <img src="/assets/images/main/banner.jpg" alt=""
                         className={"animate__fadeInUpBig animation animate__duration-1750"}/>
                </div>
            </main>
        </div>

    );
}

export default AppMain;
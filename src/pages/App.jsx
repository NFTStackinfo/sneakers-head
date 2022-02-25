import React from 'react';
import AppSectionAboutUs from "../components/AppSectionAboutUs/AppSectionAboutUs";
import AppSectionRoadmap from "../components/AppSectionRoadmap/AppSectionRoadmap";
import AppFooter from "../components/AppFooter/AppFooter";
import AppMain from "../components/AppMain/AppMain";
import AppHeader from "../components/AppHeader/AppHeader";
import SectionGallery from "../components/SectionGallery/SectionGallery";
import AppServices from "../components/AppServices";

function App(props) {
    return (
        <div style={{background: 'black'}}>
            <AppHeader />
            <AppMain />
            <AppSectionAboutUs />
            <AppSectionRoadmap />
            <SectionGallery />
            <AppFooter />
            {/*<AppServices />*/}
        </div>
    );
}

export default App;
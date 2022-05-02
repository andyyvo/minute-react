// RESOURCES
// https://ui.dev/react-router-nested-routes

import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import OneMinRecordLayout from "../components/layouts/OneMinRecordLayout";
import AboutPage from "../components/pages/landing/AboutPage";
import HowItWorksPage from "../components/pages/landing/HowItWorksPage";
import LandingPage from "../components/pages/landing/LandingPage";
import PageNotFound from "../components/pages/main-app/PageNotFound";
import Rewriter from "../components/pages/main-app/RewriteSamplePage";
import GrammarPage from "../components/pages/recording/GrammarPage";
import Finished from "../components/pages/recording/FinishedPage";
import TopicRecordLayout from "../components/layouts/TopicRecordLayout";

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="about" element={<AboutPage />} />
            <Route exact path="how-it-works" element={<HowItWorksPage />} />
            <Route path="app/*" element={<AppLayout />} />
            <Route path="one-min" element={<OneMinRecordLayout />} />
            <Route path="topic-select" element={<TopicRecordLayout/>} />
            <Route path="finished" element={<Finished />} />
            <Route path="rewrite" element={<Rewriter />} />
            <Route path="grammar" element={<GrammarPage />} />
            <Route path="*" exact={true} element={<PageNotFound/>} />
        </Routes>
    );
}

export default AllRoutes;
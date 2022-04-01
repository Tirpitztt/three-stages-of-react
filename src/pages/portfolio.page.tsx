import React from 'react';
import './portfolio.page.scss';
import PortfolioContent from '@pages/portfolio.content';
import PortfolioForm from '@pages/portfolio.form';
import PortfolioHead from '@pages/portfolio.head';

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <PortfolioHead />
            <PortfolioContent />
            <PortfolioForm />
        </div>
    );
};

export default PortfolioPage;

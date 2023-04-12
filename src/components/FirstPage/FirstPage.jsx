import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const FirstPage = () => {
    
    return (
        <div>
            <header>
                <HeaderSection></HeaderSection>
            </header>
            <main>
                <section>
                    <div>
                        <JobCategory></JobCategory>
                    </div>
                    <div>
                        <FeaturedJobs></FeaturedJobs>
                    </div>
                </section>
            </main>
        </div>
    );
};



export default FirstPage;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();


    return (
        <div>
            <div className='container flex'>
                <div className='flex-1 ml-72'>
                    <img src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/6/5/5/509655_shutterstock_1506580442_769367.jpg" alt="" />
                </div>
                <div className='bg-cyan-400 w-72 flex-1'>
                    <p className='text-2xl text-white mt-4 p-5'>
                        This quiz website will make your brain strong. you will know more about programming languages. This website is the easy learning website. You can increase your knowledge.
                    </p>
                </div>

            </div>
            {/* <div>
                {
                    topics.map(topics => <Topics key={topics.data[1]} topics={topics}></Topics>)
                }
            </div> */}
        </div>

    );
};

export default Home; 
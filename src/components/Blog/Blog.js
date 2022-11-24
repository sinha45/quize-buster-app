import React from 'react';

const Blog = () => {
    return (
        <div className='container w-50 m-auto'>
            <div className='mt-12 bg-cyan-400 rounded-xl'>
                <h2 className='text-white font-semibold text-4xl'>Purpose of react router</h2>

                <p className='mt-8'>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page.</p>

            </div>
            <div className='mt-12  bg-cyan-400 rounded-xl'>
                <h2 className='text-white font-semibold text-4xl'>How does context api work</h2>

                <p className='mt-8'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>

            </div>
            <div className='mt-12  bg-cyan-400 rounded-xl'>
                <h2 className='text-white font-semibold text-4xl'>useRef</h2>

                <p className='mt-8'>useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders. There are a couple of specific uses cases for useRef and refs that I'd like to call out. Modifying a child DOM node outside of the typical React data flow.</p>

            </div>
        </div>
    );
};

export default Blog;
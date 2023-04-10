import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-14'>
            <div className='bg-blue-100 p-7 rounded-lg my-3'>
                <h2 className='text-2xl font-bold text-violet-500'>When should you use context API?</h2>
                <p>Answer: The context API usually use for passing data to the lower level components. If you want to pass data to the lower level components without prop drilling then you should use context API.</p>

            </div>
            <div className='bg-blue-100 p-7 rounded-lg my-3'>
                <h2 className='text-2xl font-bold text-violet-500'>What is custom hook?</h2>
                <p>Answer: A custom hook is a function that can make a reuseable logic and share with multiple components. Custom hook can make code more reuseable and maintainable easily.</p>

            </div>
            <div className='bg-blue-100 p-7 rounded-lg my-3'>
                <h2 className='text-2xl font-bold text-violet-500'>What is useRef? what is the use of useRef?</h2>
                <p>Answer: If we need to count how many times our state renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. useRef is a built-in React hook that accepts one argument as the initial value and returns a reference.</p>

            </div>
            <div className='bg-blue-100 p-7 rounded-lg my-3'>
                <h2 className='text-2xl font-bold text-violet-500'>What is useMemo?</h2>
                <p>Answer: The useMemo is a hook that can memoize the result of a function so that it is only re-evaluated when its dependencies change. This can help us to optimize the performance of our application by avoiding unnecessary re-renders. It takes two arguments: a function to be memoized and an array of dependencies.</p>

            </div>
        </div>
    );
};

export default Blog;
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    
  const { error, status } = useRouteError()

    return (
        <section className='flex items-center h-screen p-16 bg-gray-300 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <FaceFrownIcon className='w-32 h-32 text-violet-500' />
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-bold text-9xl text-rose-500'>
              <span className='sr-only'>Error</span>
              {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl text-red-500 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='btn-primary'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Error;
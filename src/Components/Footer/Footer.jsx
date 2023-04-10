import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 py-14'>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-10  text-gray-400 gap-4 w-11/12 lg:w-9/12 mx-auto py-10 border-b'>

                <div>
                    <h3 className='text-2xl text-white mb-3'>CareerHub</h3>
                    <p className='mb-7'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="./group.png" alt="social icons" />


                </div>
                <div>
                    <h4 className='text-xl text-white'>Company</h4>
                    <p className='my-2'>About Us</p>
                    <p>Work</p>
                    <p className='my-2'>Latest News</p>
                    <p>Careers</p>

                </div>
                <div>
                    <h4 className='text-xl text-white'>Product</h4>
                    <p className='my-2'>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p className='my-2'>Customers</p>
                    <p>Integrations</p>

                </div>
                <div>
                    <h4 className='text-xl text-white'>Support</h4>
                    <p className='my-2'>Help Desk</p>
                    <p>Sales</p>
                    <p className='my-2'>Become a Partner</p>
                    <p>Developers</p>

                </div>
                <div>
                    <h4 className='text-xl text-white'>Contact</h4>
                    <p className='my-2'>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>





            </div>
            <span className='ml-10 text-gray-400 text-center block mt-5'>@2023 CareerHub. All Rights Reserved</span>
        </div>
    );
};

export default Footer;
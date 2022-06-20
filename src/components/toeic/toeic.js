import React from 'react';

const featuredImages=[
  "./assets/c.jpg",
  "./assets/c.jpg",
  "./assets/c.jpg",
];

const Toeic = () => {
  return (
    <div>
        <div>
           <h1 className='flex justify-center items-center mt-16  font-semibold font-serif text-4xl border-b-4 border-[#5a161b]'> Are You Ready for Toeic Test? </h1> 
        </div>
      {/* My cards */}
        <div className='toeic grid grid-cols-3 lg:gap-5 justify-items-center'>
          {/* My First Card */}
          <div className='py-10 '>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
              <img className='w-full' src={featuredImages[0]} alt= ""/>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'> Free Reading Practice Test</div>
                <p className='text-gray-400'>Select your language level and start as per your level of learning.</p>
              </div>

              <div className='pb-2 px-6 flex justify-center'>
                <button className='bg-sky-600 hover:bg-[#003968] rounded-full px-3 py-1 text-sm font-base mb-2'>
                  Try it for free
                </button>
              </div>
            </div>

          </div>

          {/* My First Card */}
          <div className='py-10'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
              <img className='w-full' src={featuredImages[1]} alt= ""/>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'> Free Reading Practice Test </div>
                <p className='text-gray-400'>Select your language level and start as per your level of learning.</p>
              </div>

              <div className='pb-2 px-6 flex justify-center'>
                <button className='bg-sky-600 hover:bg-[#003968] rounded-full px-3 py-1 text-sm font-base mb-2'>
                  Try it for free
                </button>
              </div>
            </div>

          </div>

          {/* My First Card */}
          <div className='py-10'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
              <img className='w-full' src={featuredImages[2]} alt= ""/>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'> Jump for the Full-Length-Test</div>
                <p className='text-gray-400'>Select your language level and start as per your level of learning.</p>
              </div>

              <div className='pb-2 px-6 flex justify-center'>
                <button className='bg-sky-600 hover:bg-[#003968] rounded-full px-3 py-1 text-sm font-base mb-2'>
                  Payment Starts @ 1$
                </button>
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Toeic
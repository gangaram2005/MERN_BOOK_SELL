import React from 'react'
import python from '../img/pythonbook.jpeg'

function SingleBooks() {
  return (
    <div>
      <div className="details md:w-2/4 sm:w-full bg-slate-400 md:ml-48 md:mt-20 sm:mt-10 sm:ml-1 items-center">
        <div className="title">
            <h1 className='text-3xl text-center '>Book Title</h1>
        </div>
        <div className="images md:ml-20 sm:ml-1">
            <img src={python} alt="" />
            <div className='flex justify-between'>
                <div><p>Ganga Ram Jaisi</p></div>
                <div><p>$10.00</p></div>
            </div>
        </div>


      </div>
    </div>
  )
}

export default SingleBooks

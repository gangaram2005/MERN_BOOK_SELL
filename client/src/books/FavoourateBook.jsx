import React from 'react'
import python from '../img/pythonbook.jpeg'
import { Button } from 'flowbite-react'

function FavoourateBook() {
  return (
    <div>
      <div className="md:flex justify-between">
        <div className="img-part md:ml-10 sm:ml-5 md:w-1/2">
            <img src={python} alt="" className='sm:m-2'/>
            {/* <h1>Images part</h1> */}
        </div>
        <div className="text-part md:w-1/2">
            <div className='md:mr-10 sm:mr-3 md:w-1/2 text-size size md:ml-20'>
                <h1 className='md:text-4xl sm:text-4xl'>Find Your Favourate <span className='text-blue-600'>Book Here</span><br /> </h1>
            </div>
            <div>
                <p className='mt-11 md:ml-10'>
                    Lorem ipsum dolor sit, kohalpur model college is the good for the BBS students not for the bim students amet consectetur adipisicing elit. Ipsum praesentium asperiores veritatis, voluptatibus quisquam quasi corrupti ab voluptatum a? Nisi?
                </p>
                <div className="flex justify-around mt-10 size">
                    <div className="listning">8000+ <br />Book Listning</div>
                    <div className="users">550+ <br />Registered User</div>
                    <div className="downloads">1200+ <br />PDF Downloads</div>
                </div>
                <div className='mt-10 md:ml-20'>
                    <Button gradientDuoTone="purpleToPink">Explore More</Button>
                </div>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default FavoourateBook

import React from 'react'
import { Button} from 'flowbite-react'
import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom'
import Python from '../img/pythonbook.jpeg'
import demobook from '../img/demobkimg.jpg'
import BannerCard from './BannerCard.jsx';
import BookCards from './BookCards.jsx';
import FavoourateBook from '../books/FavoourateBook.jsx';
import Reviews from './Reviews.jsx';
export default function Home() {
  return (
    <div className=''>
      <section className="bg-teal-100">
        <div className="home ml-11 main flex md:flex-row justify-between sm: flex flex-col">
          <div className="text-part mt-10 md:w-2/4 sm:w-full">
            <div className='w-50 text-5xl'>
              <h1 className='text-size'>Buy and Sell Your <br /> Books <span className='text-blue-600'>for the best <br />Prices</span></h1>
            </div>
            <div className="desc-part mt-4 mb-5 w-4/5">
              <h2 className='leading-7'>Find and Reads more books you'll love, and keep track of the books you want to read.  Be part of the world's largest community of book lovers on Goodreads</h2>
            </div>
            <div className="search-part mt-9 mb-8">
              <input type="text" name="" id="" placeholder='Search a book here'/><button className='bg-blue-600 h-11 w-24'>Button</button>
            </div>
          </div>
          <div className="img-part mt-10 md:w-2/4 ml-4 mr-7 sm:w-full">
            {/* <img src={Python} alt="" className='remove-bg md:w-2/4 md:h-4/5 sm:w-full'/> */}
            <BannerCard/>
          </div>
        </div>
      </section>

      {/* Best Seller books */}
      <section className="best-seller-books mt-20">
        <div className='ml-11'>
          <div className="heading-part text-center">
            <h1 className='md:text-5xl sm:text-3xl'>Best Seller Books</h1>
          </div>
          <div className="img-part">
          {/* slide garauna ko lagi yesma react-fast-marquee use gareko  */}
            <div className="row">
              <div className="col-12 mt-14 mb-10">
                <BookCards/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* favourate Book */}
      <section className='favourate-book'>
        <div>
          <FavoourateBook/>
        </div>
      </section>

      <section className="bg-teal-100 mt-20 mb-20">
        <div className='md:flex justify-between'>
          <div className="text md:ml-10 md:mr-10 md:w-1/2 ">
            <p className='text-3xl size md:ml-10 md:mr-20 mt-10'>{new Date().getFullYear()} National book award for fiction shortlist</p>
            <div className='register-now md:ml-10 mt-10 mb-20'>
              <Link><Button gradientDuoTone="purpleToPink" className='rounded-lg'>Register Now</Button></Link>
            </div>
          </div>
          
          <div className="img md:w-1/2">
            <img src={demobook} alt="" className='md:w-1/3 md:h-44 md:mt-6 md:mb-5 sm:w-full sm:ml-0 sm:mb-5 sm:mt-5'/>
          </div>
        </div>
      </section>

      <section className='others-book'>
        <h1 className='text-center size md:text-3xl'>Others Book</h1>
        <div className="img-part">
          <BookCards/>
        </div>
      </section>

      <section className="reviews">
        <Reviews/>
      </section>
    </div>
  )
}

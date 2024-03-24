import React from 'react'
import { Button} from 'flowbite-react'
import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom'
import Python from '../img/pythonbook.jpeg'
export default function Home() {
  return (
    <div className='bg-teal-100'>
      <section className="home ml-11">
        <div className="main flex md:flex-row justify-between sm: flex flex-col">
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
            <img src={Python} alt="" className='remove-bg md:w-2/4 md:h-4/5 sm:w-full'/>
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
              <div className="col-12">
              <Marquee className='d-flex'>
                <div className='mx-4 w-24'>
                  <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>
                <div className='mx-4 mt-5 w-2/4'>
                  <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>
                <div className='mx-4 w-2/4'>
                <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>
                <div className='mx-4 w-2/4'>
                <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>
                <div className='mx-4 w-2/4'>
                  <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>
                <div className='mx-4 w-2/4'>
                  <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>
                <div className='mx-4 w-2/4'>
                  <Link>
                    <img src={Python} alt="brand" className='remove-bg reduce-size'/>
                    <div className="desc-part flex justify-between">
                      <div className="title">Python Programming Books</div>
                      <div className="price">$100</div>
                    </div>
                  </Link>
                </div>

              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

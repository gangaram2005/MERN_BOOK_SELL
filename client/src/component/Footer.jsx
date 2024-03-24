import React from 'react'
import { Footer,Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsDribbble} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <Button gradientDuoTone="purpleToPink" className='rounded-lg'>Gagan blog</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://www.100jsprojects.com.np' target='_blank' rel='nooperner noreferrer'>
                                100 js Projects
                            </Footer.Link>
                            <Footer.Link href='/about' target='_blank'>
                                gagan's Blog
                            </Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://www.github.com/92923232' target='_blank' rel='nooperner noreferrer'>
                                Ganga Ram jaisi
                            </Footer.Link>
                            <Footer.Link href='#' target='_blank'>
                                Discover
                            </Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' rel='nooperner noreferrer'>
                                privacy Policy
                            </Footer.Link>
                            <Footer.Link href='#' target='_blank'>
                                Terms &amp; Conditions
                            </Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            {/* footer divider le line aauxa */}
            <Footer.Divider/> 
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by='Gangaram Jaisi' year ={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

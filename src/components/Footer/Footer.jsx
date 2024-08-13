import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 mt-10 bg-[#DFD8CA] border border-t-2 border-t-black w-full text-[#9D6C53] font-custom text-xl">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm ">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-lg font-semibold uppercase ">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="  font-semibold "
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-lg font-semibold uppercase text-[#9D6C53]">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="  font-semibold text-[#9D6C53]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                
                                <li className="mb-4">
                                    <Link
                                        className="  font-semibold text-[#9D6C53]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-lg font-semibold uppercase text-[#9D6C53]">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="  font-semibold text-[#9D6C53]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="  font-semibold text-[#9D6C53]"
                                        to="/" 
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer
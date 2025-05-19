import React from 'react'
import { DocsNavigation } from '../../../datasets'
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Navigation = () => {
    return (
        <div className='w-full min-w-60 max-w-66 overflow-auto max-h-6/7 text-[14px]  p-6 px-4 font-para_inter ' >
            <div className='space-y-1.5 text-[15px]' >
                {
                    DocsNavigation.map((Data, index) => (
                        <div key={index} >
                            {
                                Data.head &&
                                <Link className='flex items-center space-x-2 mt-2  text-[16px] ' >
                                    <div><Data.headicon size={20} /></div>
                                    <div>{Data.head}</div>
                                </Link>
                            }
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    DocsNavigation.map((Data, index) => (
                        Data.titleData && Data.titleData.map((NavData, NavIndex) => (
                            <div className=' flex flex-col mt-4  ' >
                                <Link className='mb-1' >{NavData.title}</Link>
                                {
                                    NavData.subtitleData && NavData.subtitleData.map((SubData, SubIndex) => (
                                        <Link className='pl-4 ml-2 text-textgrey border-l-[1px] py-1 border-[#00000040] flex items-center space-x-1 group' >
                                            <span className='bg-bggrey relative z-10' >{SubData.subtitle}</span>
                                            <GoArrowRight className=' size-4 -translate-x-6 w-fit group-hover:translate-x-0 transition-transform duration-300' />
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default Navigation
import React from 'react'
import { DocsNavigation } from '../../../datasets'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='w-full max-w-66 overflow-auto max-h-6/7 text-[14px]  p-6 px-4 font-para_inter ' >
            <div className='space-y-1 text-[15px]' >
                {
                    DocsNavigation.map((Data, index) => (
                        <div key={index} >
                            {
                                Data.head &&
                                <Link className='flex items-center space-x-1 mt-1 ' >
                                    <div><Data.headicon /></div>
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
                                        <Link className='pl-4 ml-2 text-textgrey border-l-[1px] py-1 border-textgrey' >{SubData.subtitle}</Link>
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
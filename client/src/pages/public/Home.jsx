import React from 'react'
import "./../../index.css"
import images from '../../assets/images'
import { HorizontalReviewCard } from '../../components'

const Home = () => {
    return (
        <div className='bg-bggrey w-full h-full px-6 ' >
            <div>
                <div>
                    <div className=' px-6 h-screen flex items-center py-12 ' >
                        <div className='w-3/5'  >
                            <h1 className='text-8xl font-title flex flex-col ' >
                                <span>What They Say Can Build Empires</span>
                                <span> — Let It Echo Loud</span>
                            </h1>
                        </div>
                        <div className='w-2/5 h-full flex  flex-col justify-between ' >
                            <div className='space-y-6' >
                                <div className='flex-col flex items-center gap-4' >
                                    <div className='bg-bgyellow p-4 w-20 h-20 rounded-3xl' >
                                        <img src={images.Logo} alt="" srcset="" className='' />
                                    </div>
                                    <div className='text-5xl font-logo'  >Rumoro </div>
                                </div>
                                <div className=' w-full flex flex-col items-center' >
                                    <div className='w-3/5 text-center font-para_inter' >
                                        Behind every great creator is a quiet roar waiting to be heard 🔊 — where whispers turn into waves 🌊, recognition finds its rhythm 🎵, and the truth is spotlighted ✨ without the need for chasing or asking 🕊️.
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2 relative' >
                                <div className='flex justify-end ' >
                                    <div className='rounded-3xl p-2 bg-[#00000010] w-1/3  ' >
                                        <img src={images.CatGIF} className='h-28 w-full object-cover object-center rounded-2xl' alt="" srcset="" />
                                    </div>
                                </div>
                                <div className="bg-[#00000010] w-fit p-1.5 rounded-xl text-lg left-6 top-20 -rotate-3 absolute" >
                                    <span className='bg-bggrey text-textgrey font-code px-4 py-1.5 rounded-lg ' >API=<span className=' text-bgpink' > https://*********.com</span></span>
                                </div>
                                <div className='flex w-full justify-center' >
                                    <HorizontalReviewCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
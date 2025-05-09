import React, { useState } from 'react'
import "./../../index.css"
import images from '../../assets/images'
import { HorizontalReviewCard, Stats } from '../../components'
import { Link } from 'react-router-dom'
import { Flow, HorizontalLine } from '../../datasets'
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const Home = () => {

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;
    const overlapIndex = 2;

    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true); // Initially can't go back

    const handleNext = () => {
        const nextIndex = startIndex + overlapIndex;
        if (nextIndex < Flow.length) {
            setStartIndex(nextIndex);
            setIsPrevDisabled(false);
            // Disable next if going past end
            if (nextIndex + itemsPerPage >= Flow.length) setIsNextDisabled(true);
        }
    };

    const handlePrev = () => {
        const prevIndex = startIndex - overlapIndex;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
            setIsNextDisabled(false);
            // Disable prev if going before start
            if (prevIndex === 0) setIsPrevDisabled(true);
        }
    };

    return (
        <div className='bg-bggrey w-full h-full  ' style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23121514' fill-opacity='0.1'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`, backgroundAttachment: 'fixed', }} >
            <div>
                <div className='px-6' >
                    <div className=' px-6 h-screen flex items-center py-12 ' >
                        <div className='w-3/5'  >
                            <h1 className='text-8xl font-title flex flex-col ' >
                                <span>What They Say Can Build Empires</span>
                                <span> — Let It Echo Loud</span>
                            </h1>
                            <div className='' >
                                <div className=" flex space-x-3 mt-16 " >
                                    <Link className='bg-bgpink text-textdark px-6 py-3 rounded-full font-para_inter text-base ' to="/docs/get-started" >Get started</Link>
                                    <Link className='bg-bgdark text-white px-6 py-3 rounded-full font-para_inter text-base ' to="/register" >Register</Link>
                                </div>
                            </div>
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
                                    <div className='rounded-3xl p-2 shadow-sm bg-[#00000010] w-1/3  ' >
                                        <img src={images.CatGIF} className='h-28 w-full object-cover object-center rounded-2xl ' alt="" srcset="" />
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
                <div>
                    <div className='  h-full  py-12 pb-0 ' >
                        <div>
                            <div>
                                <div className='grid grid-cols-3 w-3/4 justify-self-center px-10 ' >
                                    <Stats number={`29K`} title='Users' />
                                    <Stats number={`150K`} title='Forms' />
                                    <Stats number={`1M`} title='Testimonials' />
                                </div>
                            </div>
                            <div className='relative h-full  w-full overflow-x-hidden py-20 pt-12  flex flex-col items-center' >
                                <div className='font-para_inter text-2xl bg-bgyellow py-2 px-3 flex  items-center space-x-16 rotate-2 overflow-x-hidden' >
                                    {
                                        HorizontalLine.slice(0, 10).map((Data, index) => (
                                            <div key={index} className='flex space-x-8  items-center ' >
                                                <div>{Data.title}</div>
                                                <img src={images.Star} className='w-6  ' />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='font-para_inter text-2xl bg-bgpink py-2 px-3 flex  items-center space-x-16 overflow-x-hidden -rotate-4' >
                                    {
                                        HorizontalLine.slice(11, 20).map((Data, index) => (
                                            <div key={index} className='flex space-x-8  items-center ' >
                                                <div>{Data.title}</div>
                                                <img src={images.Star} className='w-6  ' />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center flex-col space-y-6 my-12' >
                                    <div className='font-title_inter text-5xl mb-12 ' >Let’s Not Ghost Each Other, Okay?</div>
                                    <div className='flex space-x-8 items-center text-3xl w-3/5 font-para_inter justify-center ml-40  ' >
                                        <div className='w-2/5 p-2 border-black border-[1px] rounded-4xl' >
                                            <img src={images.Client} className='w-full rounded-3xl border-[1px] border-black ' />
                                        </div>
                                        <div className='w-3/5 ' >
                                            We’ve gone through long calls, endless revisions, and shared every detail to bring your idea to life. But at the end... just a “thanks”? 🤔 If the work made even a small impact — click the <span className='bg-bgyellow px-3 rounded-xl  border-[1px] text-xl  border-black  py-1 ' >button</span> to share this link listen to my feedback, dear. 💌
                                        </div>
                                    </div>
                                    <div className='flex space-x-8 items-center text-3xl w-3/5 font-para_inter justify-center text-end mr-40' >
                                        <div className='w-3/5' >
                                            As a creator, asking for feedback isn’t desperate — it’s powerful.
                                            Ditch those messy WhatsApp chats and lifeless Google Forms.
                                            Click below, <span className='bg-bgpink px-3 rounded-xl border-[1px] border-black text-xl  py-1 ' >craft</span> your own Rumoro form, and let your clients speak for your brilliance. 🎯✨
                                        </div>
                                        <div className='w-2/5 p-2 border-black border-[1px] rounded-4xl' >
                                            <img src={images.Creator} className='w-full rounded-3xl border-[1px] border-black ' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-bgyellow box_top h-20   ' ></div>
                    <div className='bg-bgyellow h-full px-20 py-8 pb-12' >
                        <div>
                            <div className='flex flex-col items-center space-y-10' >
                                <div className='font-title text-6xl text-center ' >What Exactly you need to Do ?</div>
                                <div className='flex  space-x-10 items-center' >
                                    <button  className={`text-7xl h-fit ${isPrevDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} disabled={isPrevDisabled} onClick={handlePrev}  ><HiArrowSmallLeft /></button>
                                    {
                                        Flow.slice(startIndex, startIndex + itemsPerPage).map((Data, index) => (
                                            <div className='border-[1px]  p-2 rounded-4xl' >
                                                <div className='bg-white relative  h-80 w-66 rounded-3xl border-[1px]   overflow-hidden' >
                                                    <div className='text-6xl absolute right-3 top-3  font-title ' >{startIndex + index + 1}</div>
                                                    <div className='flex justify-center ' ><img className='h-48 w-full object-cover' src={Data.img} alt="" srcset="" /></div>
                                                    <div className='flex flex-col items-center py-3 px-1 ' >
                                                        <div className='text-textgrey font-para_inter text-center  ' >{Data.text}</div>
                                                        <Link to={Data.link} className='bg-bgdark text-white w-full py-2.5 text-center rounded-2xl font-para_inter mt-3 ' >{Data.btnname}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <button disabled={isNextDisabled} className={`text-7xl h-fit ${isNextDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer '}`} onClick={handleNext}  ><HiArrowSmallRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-bgyellow box_bottom h-20 ' ></div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
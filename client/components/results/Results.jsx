import React from 'react'
import Image from 'next/image'
import gpt from '../../public/assets/images/gpt.jpg'
import article1 from '../../public/assets/images/articles/article1.png'
import { FaShare } from 'react-icons/fa'
import { IoMdShare } from 'react-icons/io'


export default function Results() {
    return (
        <div className='w-full border border-white border-b-gray-200 p-1 grid grid-cols-10 gap-5 items-center justify-center mb-1 ml-1'>
            <div className='md:col-span-8 xs:col-span-7 flex flex-col w-full'>
                <div className="flex items-center p-[2px] mb-2">
                    <Image src={article1} height={31} width={31} className="rounded-full h-[31px] w-[31px] relative" alt="no" />
                    <div className='flex md:items-center justify-start md:flex-row xs:flex-col'>
                        <span className='m-0 p-0 ml-2 font-candara text-gray-600 text-lg italic'>Fernanado Doglio<b className='font-extrabold text-[1.2rem]'>&nbsp;·</b>{" "}</span>
                        <span className='m-0 p-0 ml-2 font-candara leading-[10px] text-gray-500 italic text-xs'>Feb <span className='font-mono'>17</span></span>
                    </div>
                </div>
                <h1 className='font-candara md:text-2xl text-lg font-bold text-gray-800 leading-[22px] pl-2 pt-1'>I asked Chat GPT to build a To-Do app — Have we finally met our replacement?</h1>
                <p className='font-candara text-base text-gray-700 md:leading-[23px] xs:leading-[18px] pl-2 pt-1 md:text-[1rem] xs:text-[.9rem]'>Are we about to be replaced by an AI, again? — We saw the release of GitHub Copilot in October of 2021 and the whole dev community went...</p>
                <div className="flex items-center gap-2 mt-1 justify-between">
                    <div className="flex flex-wrap gap-2 md:my-2 mx-2 md:mt-2">
                        <span className="px-1 py-[2px] cursor-pointer text-xs border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Chat gpt</span>
                        <span className="px-1 py-[2px] cursor-pointer text-xs border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Ai</span>
                        <span className="px-1 py-[2px] cursor-pointer text-xs border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full"><span className='font-mono'>5</span> min read</span>
                    </div>
                    <IoMdShare className='text-2xl text-black cursor-pointer' />
                </div>
            </div>
            <div className='md:col-span-2 xs:col-span-3 relative w-full lg:h-[130px] md:h-[105px] xs:h-[100px] max-w-[140px]'>
                <Image src={gpt} alt="gpt" fill={true} />
            </div>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'
import SingleBlog from "@/components/singleBlog/SingleBlog"
import LatestBlogs from "@/components/latest/LatestBlogs"
import Results from '@/components/results/Results'

export default function page() {
  return (
    <div className="w-full m-0 p-0 flex justify-center items-center bg-[#ffffff]">
      <div className="w-full max-w-[1100px] m-0 p-1 grid md:grid-cols-10 justify-between gap-8">
        <div className='bg-white lg:col-span-7 md:col-span-6'>
          <h1 className='text-gray-500 text-[2.1rem] leading-[40px] font-candara font-bold mb-4 ml-2'>Results for <span className='text-gray-800'>chat gpt</span></h1>
          <Results />
          <Results />
          <Results />
          <Results />
        </div>
        <div className='bg-white lg:col-span-3 md:col-span-4 flex flex-col md:shadow-lg md:p-4 xs:p-2 md:border gap-[7px] rounded-md h-fit'>
          <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara my-1 mb-2 font-bold">Similar topics</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-[2px] cursor-pointer border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Medical</span>
            <span className="px-3 py-[2px] cursor-pointer border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Learn</span>
            <span className="px-3 py-[2px] cursor-pointer border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Biology</span>
            <span className="px-3 py-[2px] cursor-pointer border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Food</span>
            <span className="px-3 py-[2px] cursor-pointer border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Chemist</span>
            <span className="px-3 py-[2px] cursor-pointer border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">Pharmcy</span>
          </div>
          <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara mb-3 mt-3 font-bold">Hot Articles</p>
          <div className="space-y-1 flex flex-col justify-start items-start w-fit">
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
          </div>
        </div>
      </div>
    </div>
  )
}

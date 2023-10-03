import React from 'react'
import Image from 'next/image'
import cover2 from '../../public/assets/images/cover2.jpg'
import article1 from '../../public/assets/images/articles/article1.png'
import { RiEditCircleFill } from 'react-icons/ri'
import { CgMoreVertical } from 'react-icons/cg'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaRedditSquare } from 'react-icons/fa'
import india from '../../public/assets/images/india.png'
import { PiDotOutlineFill } from 'react-icons/pi'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { IoIosShareAlt } from 'react-icons/io'
import { BiEdit } from 'react-icons/bi'

export default function About() {
    return (
        <div className='flex w-full flex-col border-none pb-4 shadow-md'>
            <div className='flex w-full h-[150px] relative rounded-t-2xl'>
                <Image src={cover2} fill={true} className='w-full h-[150px] rounded-t-2xl' />
                <button className='bg-gray-500 text-gray-200 px-4 py-2 rounded-md text-sm ml-4 shadow-lg flex items-center absolute -bottom-14 right-4'>
                    <BiEdit className='mr-1' size={20} />
                    Edit Account
                </button>
                <div className='flex w-[140px] h-[140px] absolute -bottom-[40%] rounded-full left-10 border-white border-[4px] shadow-sm'>
                    <Image src={article1} fill={true} className='h-[90px] w-[90px] rounded-full' />
                </div>
            </div>
            <div className='flex mt-[70px] w-full px-12 flex-col gap-1'>
                <h1 className='text-black text-3xl font-bold flex items-center'>John Doe<sup><IoCheckmarkCircle color="cadetblue" className="mr-1 mt-3" size={14} /></sup></h1>
                <div className='flex items-center gap-2'>
                    <Image src={india} height={20} width={20} className='h-[20px] w-[20px] rounded-sm' />
                    <span className='flex items-center text-gray-400 text-sm cursor-pointer'>New Delhi, India</span>
                </div>
                <div className='flex items-center'>
                    <span className='flex items-center text-gray-600 text-sm cursor-pointer'>@johndoe</span>
                    <PiDotOutlineFill className='text-gray-500 text-sm cursor-pointer' size={20} />
                    <span className='flex items-center text-gray-600 text-sm cursor-pointer'>Lead Product designer at Google</span>
                    <PiDotOutlineFill className='text-gray-500 text-sm cursor-pointer' size={20} />
                    <span className='flex items-center text-gray-500 text-sm cursor-pointer'>Joined on May,2023</span>
                </div>
                <div className='flex mt-4 gap-0 flex-col'>
                    <h1 className='text-gray-700 text-xl font-bold'>About</h1>
                    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div className='flex gap-1 my-2 flex-col'>
                    <h1 className='text-gray-700 text-xl font-bold'>Connect with me</h1>
                    <div className='flex items-center gap-2'>
                        <BsLinkedin className='text-gray-500 text-sm cursor-pointer' size={24} />
                        <AiFillInstagram className='text-gray-500 text-sm cursor-pointer' size={24} />
                        <FaTwitterSquare className='text-gray-500 text-sm cursor-pointer' size={24} />
                        <FaRedditSquare className='text-gray-500 text-sm cursor-pointer' size={24} />
                        <button className='bg-[#1576DB] text-white px-1 py-[5px] rounded-md text-sm ml-4 shadow-lg flex items-center'>
                            <IoIosShareAlt className='mr-1' size={20} />
                            Share Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

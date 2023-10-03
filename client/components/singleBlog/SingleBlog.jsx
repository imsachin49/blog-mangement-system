"use client";
import cover from '../../public/assets/images/slider/slider1.jpg'
import article1 from '../../public/assets/images/articles/article1.png'
import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'
import Comments from '../comments/Comments'
import { IoShareSocialSharp } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BiSolidCommentEdit } from 'react-icons/bi'
import { RiSpeakFill } from 'react-icons/ri'
import { useState, useEffect, useRef } from 'react';

export default function SingleBlog() {
  const text = "In the age of digitalization, the world is moving towards a more modernized way of living. The internet has become a necessity for everyone. It has become a part of our daily lives. The internet has made our lives easier and more comfortable. It has made the world a global village. The internet has made it possible for us"

  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const voices = speechSynthesis.getVoices();

  useEffect(() => {
    const voices = speechSynthesis.getVoices();
    setSelectedVoice(voices[selectedVoice]);
    console.log("selectedVoice", selectedVoice)
  }, [selectedVoice]);

  const handleSpeak = () => {
    if (!isSpeaking) {
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      utteranceRef.current.voice = selectedVoice; // Set the selected voice for the utterance
      speechSynthesis.speak(utteranceRef.current);
      setIsSpeaking(true);
      speechSynthesis.onend = () => setIsSpeaking(false);
      speechSynthesis.onpause = () => setIsSpeaking(false);
    } else {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };


  return (
    <div className='w-full px-1 mb-8'>
      <div className='flex items-center justify-between'>
        <h3 className='py-1 text-gray-700 mb-3'>Home{" "}/ Blog{" "} / Article Title</h3>
        <IoShareSocialSharp size={24} className='cursor-pointer' />
      </div>
      <Image src={cover} alt="noImg" className='w-full h-full rounded-md max-h-[390px]' />
      <div className="flex justify-between items-center">
        <div className="flex py-4 pb-1">
          <Image src={article1} height={44} width={44} className="rounded-full" alt="no" />
          <div className="height={44} w-full mx-1 p-1 flex flex-col">
            <span className="p-0 m-0 leading-[18px] font-bold text-lg italic flex items-center">
              Jennifer Winget <sup><IoCheckmarkCircle color="cadetblue" className="mr-1" size={14} /></sup>
            </span>
            <span className="p-0 m-0 leading-[18px] text-[14px] text-gray-400 italic flex items-center my-[1px]">
              <span className='font-mono'>20&nbsp;</span> min read
              <span className='font-extrabold text-[2rem]'>&nbsp;·&nbsp;</span> Apr
              <span className='font-mono'>&nbsp;27,2018</span>
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <AiTwotoneDelete color='crimson' size={24} className='cursor-pointer' />
          <BiSolidCommentEdit color='green' size={24} className='cursor-pointer' />
        </div>
      </div>
      <p className="text-[#132431] text-[1.6rem] mt-5 mb-3 leading-[20px] font-candara font-bold">Help children get better education</p>
      <button onClick={handleSpeak} className='bg-gray-500 text-gray-200 px-4 py-2 rounded-md text-sm shadow-lg flex items-center'>
        <RiSpeakFill className='mr-1' size={20} /> {isSpeaking ? 'Pause' : 'Listen'}
      </button>
      <p className="font-candara text-gray-600 py-4 pb-6 pt-12text-start leading-[1.31rem] text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
      <div className='w-full relative mb-8'>
        <textarea rows={4} placeholder='Leave your comment here' className="font-mono w-full max-w-[96%] bg-[#fff] rounded-md p-3 text-gray-700 border border-gray-400 outline-none" />
        <button className="cursor-pointer bg-[#1576DB] text-white border px-4 shadow-md py-[1px] rounded-md  border-[#1576DB] font-bold absolute bottom-3 right-10">Send</button>
      </div>
      <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara mb-4 font-bold">All Comments(<span className='font-mono'>10</span>)</p>
      <Comments />
      <Comments />
      <Comments />
    </div>
  )
}

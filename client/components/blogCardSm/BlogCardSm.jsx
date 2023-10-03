import Image from "next/image"
import article1 from '../../public/assets/images/articles/article1.png'
import {IoCheckmarkCircle} from 'react-icons/io5'
import Link from "next/link"

export default function BlogCardSm() {
  return (
    <div className="flex flex-col rounded-md shadow-sh1">
        <div className="w-full h-[180px] relative rounded-t-md">
            <Image src={article1} fill={true} alt="mo" className="rounded-t-md" />
        </div>
        <div className="flex px-3 py-3 flex-col">
            <Link href="/blog/1232346" className="font-candara cursor-pointer text-[#183B56] text-[1.4rem] leading-[1.35rem] text-start font-bold">Future of Engineers</Link>
            <p className="font-candara text-gray-600 py-[4px] text-start leading-[1.31rem]">Lorem ipsum dolor sit amet etc consectetur adipiscing average</p>
            <div className="flex justify-between items-center">
                <div className="flex py-4 pb-1 h-[60px] items-center">
                    <Image src={article1} height={44} width={44} className="rounded-full md:h-[44px] md:w-[44px] xs:h-[35px] xs:w-[35px]" alt="no" />
                    <div className="height={44} w-full mx-1 p-1 flex flex-col gap-0">
                        <span className="p-0 m-0 leading-[18px] font-bold italic">Jennifer Winget</span>
                        <span className="p-0 m-0 leading-[15px] text-xs text-gray-400 italic flex items-center my-[1px]"><IoCheckmarkCircle color="cadetblue" className="mr-1" />verified writer</span>
                    </div>
                </div>
                <span className="font-candara capitalize italic text-sm font-bold text-gray-600"><span className="font-mono">02</span> may</span>
            </div>
        </div>
    </div>
  )
}
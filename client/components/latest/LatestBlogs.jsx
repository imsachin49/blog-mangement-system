import Image from "next/image"
import article1 from '../../public/assets/images/articles/article1.png'

export default function LatestBlogs() {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='flex gap-3 items-center mx-0 rounded-md justify-between cursor-pointer'>
            <Image src={article1} height={60} width={60} alt="no" className="rounded-md" />
            <div className="flex flex-col">
                <p className="text-[#132431] mb-[3px] text-[1rem] leading-[15px] font-candara  font-bold">Help children get better education</p>
                <p className="text-[#a2a7ad] text-[.8rem] font-candara pt-1">Jun <span className="font-mono">27,2022</span></p>
            </div>
        </div>
    </div>
  )
}

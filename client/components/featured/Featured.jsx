import BlogCardSm from "../blogCardSm/BlogCardSm"
import {HiOutlineArrowRight} from 'react-icons/hi'
import Link from "next/link"

export default function Featured() {
  return (
    <div className="w-full m-0 p-0 flex justify-center items-center">
        <div className="w-full max-w-[1100px] m-0 p-3 flex flex-col gap-3 mx-2">
            <h1 className="text-[#183B56] text-[2.5rem] leading-[2.75rem] my-3 text-start font-extrabold">Featured Articles</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:gap-6 md:gap-3 xs:gap-2">
                {
                    [1,2,3,5,6,7,8,9].map((m,index)=>{
                        return(
                            <BlogCardSm />
                        )
                    })
                }
            </div>
            <Link className="w-full flex items-center justify-center" href="/blogs/all">
                <button className="cursor-pointer text-[#1576DB] hover:bg-[#1576DB] hover:text-white border px-5 py-1 rounded-md my-4 border-[#1576DB] font-bold flex items-center justify-center gap-2">More Articles <HiOutlineArrowRight /></button>
            </Link>
        </div>
    </div>  
    )
}

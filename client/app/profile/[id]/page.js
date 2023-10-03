import About from "@/components/profile/About"
import UserBlogs from "@/components/profile/UserBlogs"

export default function Profile() {
  return (
    <div className="w-full m-0 p-0 flex justify-center items-center bg-[#ffffff]">
      <div className="w-full max-w-[800px] m-0 p-0 flex flex-col justify-between gap-8 rounded-t-lg">
        <About />
        <div className='flex w-full flex-col shadow-md px-8 py-2 gap-2 border pb-12'>
          <p className="text-[#0D2436] text-[1.6rem] leading-[15px] font-candara mb-4 mt-5 font-bold">Doe's Top Articles</p>
          <UserBlogs />
          <hr />
          <UserBlogs />
          <hr />
          <UserBlogs />
        </div>
      </div>
    </div>
  )
}

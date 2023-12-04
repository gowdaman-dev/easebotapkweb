import bg from "@/global/bg.png"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <div className="relative h-screen w-screen overflow-hidden">
                <Image src={bg} width={''} className="w-full"></Image>
                <div className="h-fit w-full bg-white p-4 absolute bottom-0 shadow-gray-400 shadow-[0_0_20px_1px] rounded-t-[20px]">
                    <p className='text-6xl font-black text-center bg-gradient-to-tr from-orange-300 to-yellow-400 text-transparent bg-clip-text py-2'>SignIn</p>
                    <p className=' text-lg text-orange-300 text-center py-1'>Welcome Back EaseBot User!</p>
                    <form className='flex px-4 flex-col gap-6 py-2' action="" method="post">
                        <input type="email" placeholder='Email Address' className='placeholder:tracking-[10px] placeholder:text-base focus: p-1 px-4 bg-gray-200 rounded w-full text-xl py-3 focus:outline outline-1 outline-blue-400 text-gray-800' name='name'/>
                        <input type="password" placeholder='Password' className='placeholder:tracking-[10px] placeholder:text-base focus: p-1 px-4 bg-gray-200 rounded w-full text-xl py-3 focus:outline outline-1 outline-blue-400 text-gray-800' name='name'/>
                        <button type="submit" className="rounded bg-orange-400 text-xl tracking-[10px] text-white py-2 font-semibold">SignIn</button>
                        <p className="tracking-[5px] text-gray-800">If Not a user click <Link className="text-orange-400" href={'/'}>Here</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

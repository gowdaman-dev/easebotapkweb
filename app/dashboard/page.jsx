import bg from "@/global/bg.png"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <div className="relative h-screen w-screen flex flex-col overflow-hidden bg-orange-200">

                <div className="h-full w-full "></div>

                <form>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-white">
                        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 " placeholder="Your notice..."></textarea>
                        <button type="submit" class="inline-flex justify-center p-2 text-orange-600 rounded-full cursor-pointer hover:bg-orange-200">
                            <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 18 20">
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

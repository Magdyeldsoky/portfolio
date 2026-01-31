import {useEffect, useState} from 'react'
import {Sun ,  Moon } from "lucide-react"
import cn from "../lib/utlis.js"

const ThemTuggle = () => {
    const [isdarkmod, setIsdarkmod] = useState(false);
useEffect(() => {
    const stor = localStorage.getItem("theme");
    if (stor==="dark") {
        setIsdarkmod(true);
        document.documentElement.classList.add("dark");
    }else {
        setIsdarkmod(false);
        document.documentElement.classList.remove("dark");
    }

},[])
    const tuggle = () => {
        if (isdarkmod) {
            setIsdarkmod(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsdarkmod(true);
        }
    }

    return (


        <>
            <button onClick={tuggle} className={cn("fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-all duration-300",
                "focus:outline-hidden",)}>{
                isdarkmod ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-blue-900" />
            }

            </button>
        </>

    )

}
export default ThemTuggle
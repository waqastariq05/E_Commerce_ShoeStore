import { Oswald } from "next/font/google"

const oswald = Oswald({
    subsets: ['cyrillic'],
})

const Header = (props) => {
    const { title, text } = props
    return (
        <div className="mt-20 mb-10 text-center relative">
            <h2 className={`uppercase sm:text-5xl text-4xl font-semibold tracking-wide mb-4 ${oswald.className}`}>{title}</h2>
            <span className="bg-[var(--text-green)] absolute sm:w-20 w-16 h-1 left-[50%] -translate-x-[50%]"></span>
            <p className="sm:text-lg text-sm font-semibold uppercase pt-4">{text}</p>
        </div>
    )
}

export default Header

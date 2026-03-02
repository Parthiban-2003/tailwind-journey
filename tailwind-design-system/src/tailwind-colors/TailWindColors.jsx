function TailWindColors() {
    return (
        <>
            <div className="bg-blue-300">
                <p className="text-red-300">Hello World, TailWind</p>
                <p className="text-red-600">Hello World, TailWind</p>
                <p className="text-red-900">Hello World, TailWind</p>
            </div><br />

            <div className="bg-[#000]">
                <p className="text-[#2596be]">Hello World, Tailwind CSS</p>
                <p className="text-[#f28945]">Hello World, Tailwind CSS</p>
                <p className="text-[#2ac2c2]">Hello World, Tailwind CSS</p>
            </div> <br />

            <div className="bg-[rgb(0,204,153)]">
                <p className="text-[rgb(255,0,0)]">Hello World, Tailwind CSS</p>
                <p className="text-[rgb(204,102,153)]">Hello World, Tailwind CSS</p>
                <p className="text-[rgb(153,255,153)]">Hello World, Tailwind CSS</p>
            </div>
        </>
    )
}

export default TailWindColors;
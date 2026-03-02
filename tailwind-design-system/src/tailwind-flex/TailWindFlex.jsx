function TailWindFlex() {
    return (
        <>
            {/* Flexbox with Gap between items */}
            <div className="flex gap-5 mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with items aligned to the right */}
            <div className="flex justify-end mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with items aligned to the center */}
            <div className="flex justify-center mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with space between items */}
            <div className="flex justify-between mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with space around items */}
            <div className="flex justify-around mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with items vertically aligned in the center */}
            <div className="flex items-center mb-4 h-32 bg-gray-200">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with items stretching to fill the container */}
            <div className="flex items-stretch mb-4 h-32 bg-gray-200">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with equal space for each item */}
            <div className="flex justify-evenly mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with column direction */}
            <div className="flex flex-col gap-5 mb-4">
                <p className="bg-blue-500 text-white p-2">Home</p>
                <p className="bg-green-500 text-white p-2">Login</p>
            </div>

            {/* Flexbox with items wrapping onto new lines */}
            <div className="flex flex-wrap gap-5 mb-4">
                <p className="bg-blue-500 text-white p-2 w-1/3">Home</p>
                <p className="bg-green-500 text-white p-2 w-1/3">Login</p>
                <p className="bg-red-500 text-white p-2 w-1/3">Sign Up</p>
            </div>
        </>
    );
}

export default TailWindFlex;
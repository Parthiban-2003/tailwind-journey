function TailWindHeightWeight() {
    return (
        <>
            <div className="p-4">
                {/* Width Utilities */}
                <h1 className="text-xl font-bold mb-4">Width Utilities</h1>
                <div className="bg-blue-500 text-white p-4 mb-4 w-32">
                    This div has a fixed width of 8rem (w-32).
                </div>
                <div className="bg-blue-500 text-white p-4 mb-4 w-1/4">
                    This div is 25% width of its parent container (w-1/4).
                </div>
                <div className="bg-green-500 text-white p-4 mb-4 w-1/2">
                    This div is 50% width of its parent container (w-1/2).
                </div>
                <div className="bg-red-500 text-white p-4 mb-4 w-full">
                    This div takes the full width of its parent container (w-full).
                </div>

                {/* Height Utilities */}
                <h1 className="text-xl font-bold mb-4">Height Utilities</h1>
                <div className="bg-yellow-500 text-white p-4 mb-4 h-32">
                    This div has a fixed height of 8rem (h-32).
                </div>
                <div className="bg-purple-500 text-white p-4 mb-4 h-64">
                    This div has a fixed height of 16rem (h-64).
                </div>
                <div className="bg-pink-500 text-white p-4 mb-4 h-screen">
                    This div takes the full height of the screen (h-screen).
                </div>
            </div>
        </>
    );
}

export default TailWindHeightWeight;
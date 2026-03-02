function TailWindGrid() {
    return (
        <>
            {/* Simple Grid Layout */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-500 text-white p-4">Item 1</div>
                <div className="bg-green-500 text-white p-4">Item 2</div>
                <div className="bg-red-500 text-white p-4">Item 3</div>
                <div className="bg-yellow-500 text-white p-4">Item 4</div>
                <div className="bg-purple-500 text-white p-4">Item 5</div>
                <div className="bg-indigo-500 text-white p-4">Item 6</div>
            </div>


            {/* Grid with Column Span */}
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="bg-blue-500 text-white p-4">Item 1</div>
                <div className="bg-green-500 text-white p-4 col-span-2">Item 2 (spans 2 columns)</div>
                <div className="bg-red-500 text-white p-4">Item 3</div>
                <div className="bg-yellow-500 text-white p-4">Item 4</div>
            </div>

            {/* Grid with Row Span */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-500 text-white p-4">Item 1</div>
                <div className="bg-green-500 text-white p-4 row-span-2">Item 2 (spans 2 rows)</div>
                <div className="bg-red-500 text-white p-4">Item 3</div>
                <div className="bg-yellow-500 text-white p-4">Item 4</div>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                <div className="bg-blue-500 text-white p-4">Item 1</div>
                <div className="bg-green-500 text-white p-4">Item 2</div>
                <div className="bg-red-500 text-white p-4">Item 3</div>
                <div className="bg-yellow-500 text-white p-4">Item 4</div>
                <div className="bg-purple-500 text-white p-4">Item 5</div>
                <div className="bg-indigo-500 text-white p-4">Item 6</div>
            </div>
        </>
    );
}

export default TailWindGrid;
function TailWindDisplayOverFlow() {
    return (
        <>
            <div className="p-4">
                {/* Display Utilities */}
                <h1 className="text-xl font-bold mb-4">Display Utilities</h1>
                <div className="bg-blue-500 text-white p-4 mb-4 block">
                    This div is a block-level element (display: block).
                </div>
                <div className="bg-green-500 text-white p-4 mb-4 inline">
                    This div is an inline element (display: inline).
                </div>
                <div className="bg-red-500 text-white p-4 mb-4 inline-block">
                    This div is an inline-block element (display: inline-block).
                </div>
                
                {/* Overflow Utilities */}
                <h1 className="text-xl font-bold mb-4">Overflow Utilities</h1>
                <div className="bg-blue-500 text-white p-4 mb-4 h-32 overflow-auto">
                    This div allows scrolling when content overflows (overflow-auto).
                    <p className="mt-4">
                        This is some extra text. This div allows scrolling when content exceeds the height.
                    </p>
                    <p className="mt-4">
                        Keep adding more content to test scrolling...
                    </p>
                </div>
                <div className="bg-green-500 text-white p-4 mb-4 h-32 overflow-hidden">
                    This div hides overflow content (overflow-hidden).
                    <p className="mt-4">
                        This content will be hidden because of the overflow-hidden property.
                    </p>
                </div>
                <div className="bg-red-500 text-white p-4 mb-4 h-32 overflow-scroll">
                    This div always shows a scrollbar, even if content doesn't overflow (overflow-scroll).
                    <p className="mt-4">
                        Scrollbars are always visible, even when there’s no overflow.
                    </p>
                </div>
            </div>
        </>
    );
}

export default TailWindDisplayOverFlow;
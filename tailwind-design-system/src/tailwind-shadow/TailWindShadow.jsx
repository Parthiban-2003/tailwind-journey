function TailWindShadow() {
    return (
        <>
            {/* Small Shadow */}
            <div className="shadow-sm p-4 mb-4 bg-white">
                This div has a Small Shadow (shadow-sm).
            </div>

            {/* Large Shadow */}
            <div className="shadow-lg p-4 mb-4 bg-white">
                This div has a Large Shadow (shadow-lg).
            </div>

            {/* Inner Shadow */}
            <div className="shadow-inner p-4 mb-4 bg-white">
                This div has an Inner Shadow (shadow-inner).
            </div>

            {/* Medium Shadow */}
            <div className="shadow-md p-4 mb-4 bg-white">
                This div has a Medium Shadow (shadow-md).
            </div>

            {/* Extra Large Shadow */}
            <div className="shadow-xl p-4 mb-4 bg-white">
                This div has an Extra Large Shadow (shadow-xl).
            </div>

            {/* 2x Extra Large Shadow */}
            <div className="shadow-2xl p-4 mb-4 bg-white">
                This div has a 2x Extra Large Shadow (shadow-2xl).
            </div>

            {/* No Shadow */}
            <div className="shadow-none p-4 mb-4 bg-white">
                This div has no shadow (shadow-none).
            </div>
        </>
    );
}

export default TailWindShadow;
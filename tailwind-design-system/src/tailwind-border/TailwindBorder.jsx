function TailWindBorder() {
    return (
        <>
            <div className="borders">
                {/* Border on all sides */}
                <p className="border p-4">This text has a border on all sides.</p>

                {/* Border on left side only */}
                <p className="border-l p-4">This text has a border on the left side.</p>

                {/* Border on right side only */}
                <p className="border-r p-4">This text has a border on the right side.</p>

                {/* Border on bottom side only */}
                <p className="border-b p-4">This text has a border on the bottom side.</p>

                {/* Border on top side only */}
                <p className="border-t p-4">This text has a border on the top side.</p>

                {/* Border with custom color (red) */}
                <p className="border-t border-red-600 p-4">This text has a red border on the top.</p>

                {/* Border with rounded corners */}
                <p className="border rounded p-4">This text has a border with rounded corners.</p>

                {/* Border with dashed style on the right side */}
                <p className="border border-dashed p-4">This text has a dashed border on the right side.</p>
            </div>
        </>
    );
}

export default TailWindBorder;
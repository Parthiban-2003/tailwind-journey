function TailWindTypography() {
    return (
        <>
            {/* Text Size */}
            <div className="text-size">
                <h1>Text Size</h1>
                <p className="text-sm">This is small text to demonstrate the smallest font size available in Tailwind CSS.</p>
                <p className="text-xl">This is extra large text to show the use of larger font sizes.</p>
                <p className="text-base">This is the default text size, which is commonly used for body text.</p>
                <p className="text-2xl">This is a larger text size, useful for headings or emphasizing content.</p>
                <p className="text-9xl">This is an extremely large text size, typically used for impactful titles or headers.</p>
            </div>
            <hr />

            {/* Font Weight and Font Family */}
            <div className="font-weight-family">
                <h1>Font Weight and Font Family</h1>
                <p className="font-thin font-sans">This text has a thin font weight and uses a sans-serif font for a clean, modern look.</p>
                <p className="font-bold font-serif">This text has a bold font weight and uses a serif font, which is great for creating emphasis in headings.</p>
                <p className="font-normal font-mono">This text has a normal font weight and uses a monospaced font, often used for code or technical content.</p>
                <p className="font-extrabold font-serif">This text has an extra bold font weight and uses a serif font, giving it a strong and authoritative presence.</p>
                <p className="text-black font-mono">This text uses a black color and a monospaced font, ideal for displaying code snippets.</p>
            </div>
            <hr />

            {/* Line Height and Letter Spacing */}
            <div className="line-height-letter-spacing">
                <h1>Line Height and Letter Spacing</h1>
                <p className="font-thin tracking-widest leading-6 font-sans">This text has wide letter spacing and a loose line height, which makes it more spacious and readable.</p>
                <p className="font-bold tracking-tighter leading-7 font-serif">This bold text has tighter letter spacing and a moderate line height, ideal for headings.</p>
                <p className="font-normal leading-8 font-mono">This text has a normal letter spacing with a relaxed line height, offering a balanced and comfortable reading experience.</p>
                <p className="font-extrabold leading-4 font-serif">This text has an extra bold font weight and compact line height, which can be great for making strong visual statements.</p>
                <p className="text-black leading-4 font-mono">This text uses a black color and a monospaced font with compact line height, commonly used for technical documentation.</p>
            </div>
            <hr />

            {/* Text Alignment and Letter Case */}
            <div className="alignment-letter-case">
                <h1>Text Alignment and Letter Case</h1>
                <p className="text-center uppercase underline">This text is centered, uppercase, and underlined, making it stand out with emphasis.</p>
                <p className="text-right lowercase line-through">This text is aligned to the right, in lowercase, with a line-through for a more casual, crossed-out effect.</p>
                <p className="text-left capitalize">This text is aligned to the left and capitalizes the first letter of each word for emphasis.</p>
                <p className="text-justify">This text is justified, meaning it aligns evenly along both the left and right edges, creating a clean block of text.</p>
            </div>
            <hr />

            {/* Responsive Text */}
            <div className="responsive-text">
                <h1>Responsive Text</h1>
                <p className="text-2xl">This text is 2xl on small screens.</p>
                <p className="text-2xl md:text-6xl lg:text-10xl">This text is 2xl on small screens, 6xl on medium screens, and 10xl on large screens. This helps with responsiveness!</p>
            </div>
        </>
    );
}

export default TailWindTypography;
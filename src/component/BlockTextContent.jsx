import TypeWriter from "./TypeWriter";

const BlockTextContent = ({ tag, text, examples }) => {
    return (
        <div className="w-full max-w-xl space-y-6 overflow-hidden">
            <div className="">
                <p className="mb-1.5 mt-1.5 text-2xl font-light uppercase">{tag}</p>
                <hr className="border-neutral-700" />
                <p className="max-w-4xl text-xl leading-relaxed mt-4 mb-4">{text}</p>

                <div className="">
                    <TypeWriter examples={examples} />
                    <hr className="border-neutral-300" />
                </div>
                <a href="https://nextjs.org/blog/next-15" target="_blank" rel="noopener noreferrer">
                    <button className="w-full mt-4 rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
                        Learn More
                    </button>
                </a>
            </div>
        </div>
    );
};

export default BlockTextContent;

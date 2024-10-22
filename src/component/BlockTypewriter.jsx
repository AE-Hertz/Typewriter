import BlockTextContent from "./BlockTextContent";

const BlockTypewriter = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
            <BlockTextContent
                tag="/ Next.js 15"
                text={
                    <>
                        <strong>Future of development! </strong> 
                        Next.js 15 is here with blazing performance, new features, and more. 
                    </>
                }
                examples={[
                    "What’s new in Next.js 15?",
                    "How can I optimize my app with Vercel?",
                    "Ready to take your projects to the next level?",
                    "How does Next.js 15 improve server-side rendering?",
                    "What’s the deal with the new streaming features?",
                    "Are you ready for faster builds and deploys?",
                    "How do the new API routes simplify my workflow?",
                    "What’s the latest in image optimization in Next.js 15?",
                ]}
            />
        </div>
    );
};

export default BlockTypewriter;

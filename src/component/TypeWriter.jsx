import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const TypeWriter = ({ examples }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((prev) => (prev + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, [examples]);

    return (
        <p className="mb-2.5 text-sm font-light uppercase">
            <span className="inline-block size-2 bg-neutral-950" />
            <span className="ml-3">
                Questions:{" "}
                {examples[exampleIndex].split("").map((letter, i) => (
                    <motion.span
                        key={`${exampleIndex}-${i}`}
                        className="relative"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{
                            delay: FADE_DELAY,
                            duration: MAIN_FADE_DURATION,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                duration: 0,
                            }}
                        >
                            {letter}
                        </motion.span>
                        <motion.span
                            className="absolute bottom-1 left-[1px] right-0 top-1 bg-neutral-950"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                times: [0, 0.1, 1],
                                duration: BOX_FADE_DURATION,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.span>
                ))}
            </span>
        </p>
    );
};

export default TypeWriter;

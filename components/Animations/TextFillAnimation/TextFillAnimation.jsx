import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FILL_DIRECTIONS = [
    "90deg",
    "270deg",
    "180deg",
    "0deg",
    "45deg",
    "135deg",
    "225deg",
    "315deg",
];

const renderAnimatedText = (children) =>
    React.Children.toArray(children).flatMap((child, childIndex) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { key: `element-${childIndex}` });
        }

        // Split plain text into character spans so GSAP can animate each fill independently.
        return String(child)
            .split("")
            .map((character, characterIndex) => {
                const key = `character-${childIndex}-${characterIndex}`;

                if (character === " ") {
                    return <React.Fragment key={key}> </React.Fragment>;
                }

                return (
                    <span
                        key={key}
                        className="text-fill-animation-character"
                        style={{
                            "--character-fill": "0%",
                            "--character-fill-direction": "90deg",
                            color: "transparent",
                            WebkitTextStroke: "1px var(--text-fill-color)",
                            backgroundImage:
                                "linear-gradient(var(--character-fill-direction), var(--text-fill-color) 0%, var(--text-fill-color) var(--character-fill), transparent var(--character-fill), transparent 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                        }}
                    >
                        {character}
                    </span>
                );
            });
    });

const TextFillAnimation = ({
    as: Component = "span",
    children,
    className = "",
    color = "#262D30",
    delay = 0.3,
    duration = 0.8,
}) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) {
            return undefined;
        }

        const ctx = gsap.context(() => {
            const characters = gsap.utils.toArray(".text-fill-animation-character");

            // Randomize each character fill direction to create the scattered reveal effect.
            characters.forEach((character) => {
                const direction =
                    FILL_DIRECTIONS[Math.floor(Math.random() * FILL_DIRECTIONS.length)];

                character.style.setProperty("--character-fill-direction", direction);
            });

            gsap.set(characters, {
                "--character-fill": "0%",
                WebkitTextStrokeColor: color,
            });

            // Fill characters in a random stagger, then fade the outline once the text is solid.
            gsap
                .timeline({ delay })
                .to(characters, {
                    "--character-fill": "100%",
                    duration,
                    ease: "power2.inOut",
                    stagger: {
                        // Spread the reveal across the group while each character keeps the same duration.
                        amount: 2.8,
                        from: "random",
                    },
                })
                .to(
                    characters,
                    {
                        WebkitTextStrokeColor: "transparent",
                        duration: 1,
                        ease: "power1.out",
                        stagger: {
                            amount: 0.6,
                            from: "random",
                        },
                    },
                    "-=0.2"
                );

            gsap.to(textRef.current, {
                "--fill": "100%",
                duration,
                ease: "power2.inOut",
            });
        }, textRef);

        return () => ctx.revert();
    }, [color, delay, duration]);

    const textFillStyle = {
        "--text-fill-color": color,
    };

    return React.createElement(
        Component,
        {
            ref: textRef,
            className,
            style: textFillStyle,
        },
        renderAnimatedText(children)
    );
};

export default TextFillAnimation;

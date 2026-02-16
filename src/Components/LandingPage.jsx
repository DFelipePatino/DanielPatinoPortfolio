import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function TypingText({
    text,
    speed = 50,
    className = ""
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span className={className}>{displayedText}</span>;
}


function LandingPage({ handleSkip }) {

    const [render, setRender] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRender(true)
        }, 1000);
    })

    return (

        <>



            <Box
                component="button"
                onClick={handleSkip}
                sx={{
                    all: "unset",
                    position: "fixed",
                    top: 16,
                    right: 16,
                    cursor: "pointer",
                    color: "text.secondary",
                    fontSize: "0.9rem",
                    opacity: 0.65,
                    transition: "opacity 0.2s ease",
                    "&:hover": {
                        opacity: 1,
                    },
                    "&:focus-visible": {
                        outline: "2px solid",
                        outlineColor: "primary.main",
                        outlineOffset: 2,
                    },
                }}
            >
                Skip
            </Box>


            <div
                style={{
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ whiteSpace: "pre-line", minHeight: "2.5em" }}
                >
                    {render ? (
                        <TypingText
                            text={"Hi, I'm Daniel.\nWelcome to my portfolio!\n🖥️📱🧩⚛️🧠🚀"}
                            speed={60}
                        />
                    ) : null}
                </Typography>
            </div>
        </>

    );
}

export default LandingPage;

"use client";
import { useState } from "react";
import { Button } from "./button";
import MyTimer from "./mytimer";

export default function NameCard({ data }: { data: string[] }) {
    const [name, setName] = useState<string>("click to start");
    const [score, setScore] = useState<number>(0);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);

    const handleClick = () => {
        if (!timerStarted) setTimerStarted(true);
        const randomIndex = Math.floor(Math.random() * data.length);
        setScore(score + 1);
        setName(data[randomIndex]);
    };

    return (
        <div className="touch-manipulation">
            <Button
                variant="ghost"
                className="h-24 px-16 text-3xl"
                onClick={handleClick}
            >
                {name}
            </Button>
            {timerStarted && <MyTimer duration={60} score={score} />}
        </div>
    );
}

"use client";
import { useRouter } from "next/navigation";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ duration = 60 }: { duration?: number }) {
    const router = useRouter();
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            router.push("/app/results");
        },
    });

    return (
        <div className="text-xl text-center mt-4">
            Time left: {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
    );
}

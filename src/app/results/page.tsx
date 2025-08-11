"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
    const searchParams = useSearchParams();
    const score = searchParams.get("score");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <p>score: {score}</p>
            <Button className="mt-2" asChild>
                <Link href="/">play again</Link>
            </Button>
        </div>
    );
}

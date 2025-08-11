"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Suspense } from "react";

function ResultsContent() {
    const searchParams = useSearchParams();
    const score = searchParams.get("score");

    return (
        <>
            <p>score: {score}</p>
            <Button className="mt-2" asChild>
                <Link href="/">play again</Link>
            </Button>
        </>
    );
}

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <Suspense fallback={<p>Loading...</p>}>
                <ResultsContent />
            </Suspense>
        </div>
    );
}

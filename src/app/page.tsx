import Link from "next/link";
import { Title, Button } from "@/components/ui";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col items-center">
                <Title />
                <div className="flex flex-col flex-wrap gap-4 justify-center my-10">
                    <Button asChild>
                        <Link href="/game/animals">animals</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/game/movies">movies</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/game/sports">sports</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

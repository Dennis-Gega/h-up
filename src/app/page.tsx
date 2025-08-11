import Title from "@/components/ui/title";
import { Button } from "../components/ui/button";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col items-center">
                <Title />
                <div className="flex flex-col flex-wrap gap-4 justify-center my-20">
                    <Button>animals</Button>
                    <Button>movies</Button>
                    <Button>sports</Button>
                    <Button>celebrities</Button>
                </div>
            </div>
        </div>
    );
}

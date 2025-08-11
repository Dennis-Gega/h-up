import NameCard from "@/components/ui/namecard";

export default async function Page({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;

    let data;
    try {
        data = (await import(`@/data/${category}.json`)).default;
    } catch {
        return <p>Category not found.</p>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <NameCard data={data} />
        </div>
    );
}

import Link from 'next/link';

async function getBuild(id) {
    const res = await fetch(`http://localhost:4000/builds/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/builds');
    const builds = await res.json();
    return builds.slice(0, 10).map(build => ({ id: build.id.toString() }));
}

export default async function BuildDetailPage({ params }) {
    const build = await getBuild(params.id);

    if (!build) {
        return <p>No PC Build with that ID exists.</p>
    }

    return (
        <div>
            <Link href="/collection" className="text-blue-500 underline">Back</Link>
            <h1 className="text-2x1 font-bold mt-4 mb-2">{build.build_name}</h1>
            <table className="table-auto border border-collapse mt-2">
                <tbody>
                    <tr><td className="border px-4 py-2">ID</td><td className="border px-4 py-2">{build.id}</td></tr>
                    <tr><td className="border px-4 py-2">CPU</td><td className="border px-4 py-2">{build.cpu}</td></tr>
                    <tr><td className="border px-4 py-2">GPU</td><td className="border px-4 py-2">{build.gpu}</td></tr>
                    <tr><td className="border px-4 py-2">Price</td> <td className="border px-4 py-2">${build.price}</td></tr>
                </tbody>
            </table>
        </div>
    );
}
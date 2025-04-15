import Link from 'next/link';

async function getBuilds() {
    const res = await fetch('http://localhost:4000/builds', { next: { revalidate: 0 } });
    return res.json();
}

export default async function CollectionPage() {
    const builds = await getBuilds();

    return (
        <div>
            <h1 className="text-2x1 font-bold mb-4">PC Builds Collection</h1>
            <u1 className="space-y-3">
                {builds.map(build => (
                    <li key={builds.id} className="p-4 border rounded shadow">
                        <p><strong>ID:</strong> {build.id}</p>
                        <p><strong>Build Name:</strong> {build.build_name}</p>
                        <Link className="text-blue-500 underline" href={`/collection/${build.id}`}>More</Link>
                    </li>
                ))}
            </u1>
        </div>
    );
}
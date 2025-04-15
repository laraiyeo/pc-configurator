import Link from 'next/link';
import BuildDetail from '@/components/BuildDetail';

export const dynamicParams = false;

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

export default async function BuildDetailPage(props) {
    const { params } = props;
    const build = await getBuild(params.id);

    if (!build) {
        return <p>No PC Build with that ID exists.</p>
    }

    return (
        <div>
            <Link href="/collection" className="text-blue-500 underline">Back</Link>
            <BuildDetail build={build} />
        </div>
    );
}
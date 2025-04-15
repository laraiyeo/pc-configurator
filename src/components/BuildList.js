import Link from 'next/link';

export default function BuildList({ builds }) {
  return (
    <div className="space-y-4">
      {builds.map((build) => (
        <div key={build.id} className="p-4 border rounded shadow">
          <p className="text-lg font-semibold">{build.id} - {build.build_name}</p>
          <Link href={`/collection/${build.id}`} className="text-blue-500 underline">more</Link>
        </div>
      ))}
    </div>
  );
}
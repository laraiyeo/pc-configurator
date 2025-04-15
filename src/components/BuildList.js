import Link from 'next/link';

export default function BuildList({ builds }) {
  if (!builds || builds.length === 0) {
    return <p>No builds available.</p>;
  }

  return (
    <ul className="space-y-3">
      {builds.map((build) => (
        <li key={build.id} className="p-4 border rounded shadow">
          <p><strong>ID:</strong> {build.id}</p>
          <p><strong>Build Name:</strong> {build.build_name}</p>
          <Link className="text-blue-500 underline" href={`/collection/${build.id}`}>More</Link>
        </li>
      ))}
    </ul>
  );
}

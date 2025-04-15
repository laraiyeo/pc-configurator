import BuildList from '@/components/BuildList';

async function getBuilds() {
  const res = await fetch('http://localhost:4000/builds', { cache: 'no-store' });
  return res.json();
}

export default async function CollectionPage() {
  const builds = await getBuilds();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PC Builds Collection</h1>
      <BuildList builds={builds} />
    </div>
  );
}

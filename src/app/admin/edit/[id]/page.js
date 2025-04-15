import EditForm from '@/components/EditForm';

async function getBuild(id) {
    const res = await fetch(`http://localhost:4000/builds/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function EditPage({ params }) {
    const build = await getBuild(params.id);

    if (!build) {
        return <div className="text-red-500 text-xl">Build with ID {params.id} not found.</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Build: {build.build_name}</h1>
            <EditForm build={build} />
        </div>
    );
}
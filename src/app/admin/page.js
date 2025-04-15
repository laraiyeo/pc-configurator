import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import DeleteButton from '@/components/DeleteButton';

async function getBuilds() {
    const res = await fetch('http://localhost:4000/builds', { cache: 'no-store' });
    return res.json();
}

async function deleteBuild(id) {
    'use server'; // Mark as server-side function
    await fetch(`http://localhost:4000/builds/${id}`, { method: 'DELETE' });
    revalidatePath('/collection');
    revalidatePath(`/collection/${id}`);
    revalidatePath('/admin');
}

export default async function AdminPage() {
    const builds = await getBuilds();

    return (
        <div className="p-4">
            <Link href="/admin/create" className="text-green-500 underline">Create New</Link>
            <table className="table-auto border mt-4 w-full">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>CPU</th><th>GPU</th><th>Price</th><th>D</th><th>E</th>
                    </tr>
                </thead>
                <tbody>
                    {builds.map(build => (
                        <tr key={build.id}>
                            <td>{build.id}</td>
                            <td>{build.build_name}</td>
                            <td>{build.cpu}</td>
                            <td>{build.gpu}</td>
                            <td>${build.price}</td>
                            <td>
                                <DeleteButton buildId={build.id} onDelete={deleteBuild} />
                            </td>
                            <td>
                                <Link className="text-blue-500" href={`/admin/edit/${build.id}`}>E</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

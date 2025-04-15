import BuildForm from "@/components/BuildForm";
import { revalidatePath } from 'next/cache';

async function createBuild(data) {
    'use server';
    await fetch('http://localhost:4000builds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    revalidatePath('/collection');
    revalidatePath('/admin');
}

export default function CreatePage() {
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create New PC Build</h1>
            <BuildForm onSubmit={createBuild} />
        </div>
    );
}
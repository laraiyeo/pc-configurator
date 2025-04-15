'use client';

import { useRouter } from 'next/navigation';
import BuildForm from '@/components/BuildForm';

export default function CreateBuildPage() {
  const router = useRouter();

  const handleCreate = async (formData) => {
    const existing = await fetch(`http://localhost:4000/builds/${formData.id}`);
    if (existing.ok) {
      alert('A build with this ID already exists. Please use a unique ID.');
      return;
    }

    await fetch('http://localhost:4000/builds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    router.push('/admin');
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New PC Build</h1>
      <BuildForm onSubmit={handleCreate} />
    </main>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditForm({ build }) {
    const [formData, setFormData] = useState(build);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:4000/builds/${build.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        router.push('/admin');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="build_name"
                value={formData.build_name}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="Build Name"
                required
            />
            <input
                name="cpu"
                value={formData.cpu}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="CPU"
                required
            />
            <input
                name="gpu"
                value={formData.gpu}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="GPU"
                required
            />
            <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="Price"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Save Changes
            </button>
        </form>
    );
}

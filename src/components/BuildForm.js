import { useState } from 'react';

export default function BuildForm({ onSubmit, initialData = {} }) {
    const [formData, setFormData] = useState({
        id: initialData.id || '',
        build_name: initialData.build_name || '',
        cpu: initialData.cpu || '',
        gpu: initialData.gpu || '',
        price: initialData.price || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-md">
            <div>
                <label>ID:</label>
                <input
                type="number"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                className="w-full border p-2"
                />
            </div>
            <div>
                <label>Build Name:</label>
                <input
                type="text"
                name="build_name"
                value={formData.build_name}
                onChange={handleChange}
                required
                className="w-full border p-2"
                />
            </div>
            <div>
                <label>CPU:</label>
                <input
                type="text"
                name="cpu"
                value={formData.cpupu}
                onChange={handleChange}
                required
                className="w-full border p-2"
                />
            </div>
            <div>
                <label>GPU:</label>
                <input
                type="text"
                name="gpu"
                value={formData.gpu}
                onChange={handleChange}
                required
                className="w-full border p-2"
                />
            </div>
            <div>
                <label>Price ($):</label>
                <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border p-2"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
}
"use client";
import { useState } from 'react';

export default function BuildForm({ onSubmit, build = {} }) {
  const [formData, setFormData] = useState({
    id: build.id || '',
    build_name: build.build_name || '',
    cpu: build.cpu || '',
    gpu: build.gpu || '',
    price: build.price || ''
  });

  const [errors, setErrors] = useState([]);

  const validate = () => {
    const validationErrors = [];
    if (formData.build_name.length < 3 || formData.build_name.length > 50) {
      validationErrors.push("Build name must be between 3 and 50 characters.");
    }
    if (!/^\d+$/.test(formData.id)) {
      validationErrors.push("ID must be a number.");
    }
    if (formData.price < 100 || formData.price > 10000) {
      validationErrors.push("Price must be between $100 and $10,000.");
    }
    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <ul className="text-red-500 list-disc ml-6">
          {errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}
      <input name="id" value={formData.id} onChange={handleChange} placeholder="ID" className="border px-2 py-1 w-full" />
      <input name="build_name" value={formData.build_name} onChange={handleChange} placeholder="Build Name" className="border px-2 py-1 w-full" />
      <input name="cpu" value={formData.cpu} onChange={handleChange} placeholder="CPU" className="border px-2 py-1 w-full" />
      <input name="gpu" value={formData.gpu} onChange={handleChange} placeholder="GPU" className="border px-2 py-1 w-full" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border px-2 py-1 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
}
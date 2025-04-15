'use client';

export default function DeleteButton({ buildId, onDelete }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        await onDelete(buildId); // Call the delete function passed from the parent
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="text-red-500">D</button>
        </form>
    );
}
export default function BuildDetail({ build }) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{build.build_name}</h2>
        <table className="border w-full text-left">
          <tbody>
            <tr><td className="border px-2 py-1">ID</td><td className="border px-2 py-1">{build.id}</td></tr>
            <tr><td className="border px-2 py-1">CPU</td><td className="border px-2 py-1">{build.cpu}</td></tr>
            <tr><td className="border px-2 py-1">GPU</td><td className="border px-2 py-1">{build.gpu}</td></tr>
            <tr><td className="border px-2 py-1">Price</td><td className="border px-2 py-1">${build.price}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
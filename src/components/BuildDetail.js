export default function BuildDetail({ build }) {
    return (
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">{build.build_name}</h1>
        <table className="table-auto border border-collapse mt-2">
          <tbody>
            <tr><td className="border px-4 py-2">ID</td><td className="border px-4 py-2">{build.id}</td></tr>
            <tr><td className="border px-4 py-2">CPU</td><td className="border px-4 py-2">{build.cpu}</td></tr>
            <tr><td className="border px-4 py-2">GPU</td><td className="border px-4 py-2">{build.gpu}</td></tr>
            <tr><td className="border px-4 py-2">Price</td><td className="border px-4 py-2">${build.price}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
  
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">Bienvenue sur Mon Application</h1>
      <form className="bg-white p-6 rounded shadow-md w-96">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="username"
          >
            Nom d'utilisateur :
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="password"
          >
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

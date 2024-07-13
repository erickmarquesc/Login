export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-slate-800 w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Acesso restrito</h1>

        <section className="flex flex-col gap-4">
          <label className="text-white" htmlFor="security-key">Chave de segurança</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="security-key"
              placeholder="Entre com sua chave de segurança"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
              Entrar
            </button>
          </div>
        </section>
        <p className="text-xs font-light text-white mt-4">Insira sua chave de segurança para acessar a plataforma.</p>
      </div>
    </main>
  );
}

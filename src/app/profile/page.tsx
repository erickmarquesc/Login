export default function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 h-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Front & End ✨</h1>
          <button className="absolute top-2 right-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition">
            Sair
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Nome do Desenvolvedor</h1>
              <p className="text-gray-600">Desenvolvedor Front-End</p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Sobre Mim</h2>
            <p className="text-gray-600 mt-2">
              Sou um desenvolvedor front-end com experiência em React, Tailwind CSS, e outras tecnologias modernas. Gosto de criar interfaces bonitas e funcionais.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Habilidades</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              <li className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">React</li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">Tailwind CSS</li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">JavaScript</li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">HTML</li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">CSS</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Idiomas</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              <li className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 transition">
                Português
              </li>
              <li className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 transition">
                Inglês
              </li>
              <li className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 transition">
                Espanhol
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Endereço</h2>
            <p className="text-gray-600 mt-2">Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, CEP 12345-678</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Contato</h2>
            <p className="text-gray-600 mt-2">Email: exemplo@dominio.com</p>
            <p className="text-gray-600">Telefone: (12) 3456-7890</p>
          </div>
        </div>
      </div>
    </div>
  )
}

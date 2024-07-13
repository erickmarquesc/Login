'use client'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

export default function Home() {
  const confirmSecurityKey = z.object({
    securityKey: z.string()
      .min(8, { message: 'A chave de segurança deve ter no mínimo 8 caracteres' })
      .regex(/[!@#$%&?]/, { message: 'A chave de segurança deve conter pelo menos um caractere especial (!@#$%&?)' })
      .regex(/[A-Z]/, { message: 'A chave de segurança deve conter pelo menos uma letra maiúscula' })
      .regex(/[a-z]/, { message: 'A chave de segurança deve conter pelo menos uma letra minúscula' })
      .regex(/[1-9]/, { message: 'A chave de segurança deve conter pelo menos um número entre 1 e 9' })
  })

  type ConfirmSecurityKeyData = z.infer<typeof confirmSecurityKey>;

  const { handleSubmit, register, formState: { errors } } = useForm<ConfirmSecurityKeyData>({
    resolver: zodResolver(confirmSecurityKey),
  })

  const handlreSubmitSecurityKey = (data: ConfirmSecurityKeyData) => {
    console.log(data.securityKey)
  }

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-slate-800 w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Acesso restrito
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlreSubmitSecurityKey)}>
          <label className="text-white" htmlFor="security-key">
            Chave de segurança
          </label>

          <div className="flex items-center gap-2">
            <input
              type="text"
              id="security-key"
              placeholder="Entre com sua chave de segurança"
              {...register('securityKey')}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Entrar
            </button>
          </div>

          {errors.securityKey && (
            <strong className="text-white text-sm font-light">
              {errors.securityKey.message}
            </strong>
          )}
        </form>

        <p className="text-xs font-light text-white mt-4">
          Insira sua chave de segurança para acessar a plataforma.
        </p>

      </div>
    </main>
  )
}

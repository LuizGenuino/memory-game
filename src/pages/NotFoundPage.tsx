import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faHouse, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center px-6">
            <div className="w-full max-w-2xl text-center">

                {/* Código do erro */}
                <div className="relative mb-8">
                    <span className="text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter text-slate-100 select-none">
                        404
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/20 flex items-center justify-center rotate-3">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-10 h-10 sm:w-14 sm:h-14 text-white -rotate-3" />

                        </div>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Página não encontrada
                    </h1>

                    <p className="mx-auto max-w-md text-base sm:text-lg leading-relaxed text-slate-500">
                        A página que você está procurando não existe,
                        foi movida ou o endereço informado está incorreto.
                    </p>
                </div>

                {/* Ações */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="
                            inline-flex items-center justify-center gap-2
                            w-full sm:w-auto
                            rounded-xl
                            border border-slate-200
                            bg-white
                            px-5 py-3
                            text-sm font-semibold text-slate-700
                            shadow-sm
                            transition
                            hover:bg-slate-50
                            hover:border-slate-300
                        "
                    >
                        <FontAwesomeIcon icon={faArrowLeft}  className="h-4 w-4" />
                        Voltar
                    </button>

                    <a
                        href="/"
                        className="
                            inline-flex items-center justify-center gap-2
                            w-full sm:w-auto
                            rounded-xl
                            bg-gradient-to-r from-emerald-500 to-teal-600
                            px-5 py-3
                            text-sm font-semibold text-white
                            shadow-lg shadow-emerald-500/20
                            transition
                            hover:scale-[1.02]
                            hover:shadow-xl hover:shadow-emerald-500/25
                            active:scale-[0.98]
                        "
                    >
                        <FontAwesomeIcon icon={faHouse}  className="h-4 w-4" />
                        Ir para o início
                    </a>
                </div>

                {/* Código */}
                <p className="mt-10 text-xs text-slate-400">
                    Erro 404 · Página não encontrada
                </p>
            </div>
        </main>
    )
}

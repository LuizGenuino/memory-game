import { faArrowRight, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GLOBAL_CONFIG } from "../config/globalConfig"
import { Link } from "react-router"

const Home = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"> {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-400/10 blur-[100px]" />
                <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[120px]" />
            </div> {/* Decorative grid */}
            <div className=" pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:50px_50px] " /> {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6"> {/* Brand */}
                <div className="mb-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-medium text-slate-300">
                        Uma experiência especial para você
                    </span>
                </div> {/* Main */}
                <div className="max-w-3xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                        Seja bem-vindo
                    </p>
                    <h1 className="text-5xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                        Jogos da Memória
                        <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                            Personalizados
                        </span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Ofereça uma experiência interativa preparada especialmente para qualquer momento. Faça um orçamento.
                    </p> {/* CTA */}

                    <a href={`https://wa.me/${GLOBAL_CONFIG.footer.whatsappNumber}`} className=" group mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-emerald-500/20 active:translate-y-0 " >
                        Entrar em Contato
                        <span className=" flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:translate-x-1 " >
                            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                        </span>
                    </a>
                    <div className="mt-4" >
                        <Link to="/demo" className=" group mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-emerald-500/20 active:translate-y-0 " >
                            Jogar Demo
                        </Link>
                    </div>
                </div> {/* Bottom hint */}
                <div className="absolute bottom-8 flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-600"> Prepare-se </span>
                    <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
                </div>
            </div>
        </main>
    )
}

export default Home
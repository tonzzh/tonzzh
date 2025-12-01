import { ArrowRight, TrendingUp } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm mx-auto">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span>+2.500 alunos ativos este mês</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Bem-vindo ao
                        <span className="block gradient-text">DevFlix</span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        Sua plataforma completa de <span className="text-purple-400 font-semibold">Marketing Digital</span>.
                        Aprenda com os melhores cursos, ferramentas e estratégias para transformar seu negócio online.
                    </p>

                    <div className="flex justify-center gap-4 pt-4">
                        <a href="#cursos" className="btn-primary flex items-center gap-2">
                            Explorar Cursos
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

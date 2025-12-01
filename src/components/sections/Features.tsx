import { Infinity, Award, Headphones, RefreshCw, Users, Sparkles } from 'lucide-react'

export default function Features() {
    const features = [
        {
            icon: Infinity,
            title: 'Acesso Vitalício',
            description: 'Acesse todos os cursos para sempre, sem mensalidades ou taxas recorrentes.',
            gradient: 'from-purple-600 to-pink-600'
        },
        {
            icon: Award,
            title: 'Certificados',
            description: 'Receba certificados reconhecidos ao concluir cada curso.',
            gradient: 'from-blue-600 to-cyan-600'
        },
        {
            icon: Headphones,
            title: 'Suporte Premium',
            description: 'Tire suas dúvidas com nossa equipe especializada 24/7.',
            gradient: 'from-green-600 to-emerald-600'
        },
        {
            icon: RefreshCw,
            title: 'Atualizações Constantes',
            description: 'Conteúdo sempre atualizado com as últimas tendências do mercado.',
            gradient: 'from-orange-600 to-red-600'
        },
        {
            icon: Users,
            title: 'Comunidade Exclusiva',
            description: 'Faça networking com outros profissionais de marketing digital.',
            gradient: 'from-indigo-600 to-purple-600'
        },
        {
            icon: Sparkles,
            title: 'Ferramentas Bônus',
            description: 'Acesso a templates, planilhas e ferramentas exclusivas.',
            gradient: 'from-pink-600 to-rose-600'
        }
    ]

    return (
        <section id="ferramentas" className="py-20 px-4">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Por que escolher o <span className="gradient-text">DevFlix</span>?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Muito mais do que cursos. Uma plataforma completa para transformar sua carreira.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card-hover p-8 space-y-4 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                <feature.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold">
                            Pronto para <span className="gradient-text">transformar</span> seu negócio?
                        </h3>
                        <p className="text-xl text-gray-400">
                            Junte-se a milhares de profissionais que já estão dominando o marketing digital
                        </p>
                        <button className="btn-primary text-lg px-8 py-4">
                            Explorar Todos os Cursos
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

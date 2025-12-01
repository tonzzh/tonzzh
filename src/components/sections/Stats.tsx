import { Users, Target, Zap, Award } from 'lucide-react'

export default function Stats() {
    const stats = [
        {
            icon: Users,
            value: '15.000+',
            label: 'Alunos Ativos',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Target,
            value: '50+',
            label: 'Cursos Disponíveis',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Zap,
            value: '200+',
            label: 'Horas de Conteúdo',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: Award,
            value: '98%',
            label: 'Satisfação',
            color: 'from-green-500 to-emerald-500'
        }
    ]

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card-hover p-6 text-center space-y-3">
                            <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

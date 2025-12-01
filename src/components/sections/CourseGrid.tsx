import { ExternalLink, TrendingUp, Code, Cpu, Shield, PenTool, Camera, Video, Stethoscope, Scale, BookOpen, Globe, Music, ChefHat, Truck, Layers, FolderOpen, Star, LucideIcon } from 'lucide-react'

interface Course {
    title: string;
    url: string;
    icon?: LucideIcon;
}

interface Category {
    title: string;
    icon: LucideIcon;
    gradient: string;
    image: string;
    courses: Course[];
}

export default function CourseGrid() {
    const categories: Category[] = [
        {
            title: "Cursos Premium 🏆",
            icon: Star,
            gradient: "from-yellow-500 to-amber-600",
            image: "/assets/images/category-premium.png",
            courses: [
                { title: "Cursos Premium 🏆", url: "https://drive.google.com/drive/folders/1sQBSQ0tiPImopMb38Rs6gexVetEhYzcn?usp=drive_link" },
                { title: "Ruyter 2025 Premium 🏆", url: "https://drive.google.com/drive/folders/1KUJt7zQ-YtMJCpKVbcAddB1khy5MaERb" },
                { title: "Viver do Digital", url: "https://drive.google.com/drive/folders/1sQBSQ0tiPImopMb38Rs6gexVetEhYzcn?usp=drive_link" },
                { title: "Agência de Marketing (TOP!)", url: "https://drive.google.com/drive/folders/1_1OWYhJh5onG8hqoZLgBjvSxVBUtuMxx?usp=drive_link" },
                { title: "Thiago Finch", url: "https://drive.google.com/drive/folders/1apfBnGKvbk8OE2r3q63mMFeIYBqcMcSb" },
                { title: "Cursos de Marketing", url: "https://drive.google.com/drive/folders/1nv1fADGKZxoaxzXYibC-lGlrU7qQInr6?usp=drive_link" },
                { title: "Cursos de Vendas", url: "https://drive.google.com/drive/folders/1GN1HTOMJ7uHBZIPpAiChf-LnUVWa13AU?usp=drive_link" }
            ]
        },
        {
            title: "Negócios e Empreendedorismo",
            icon: TrendingUp,
            gradient: "from-blue-600 to-cyan-600",
            image: "/assets/images/category-business.png",
            courses: [
                { title: "Cursos de Negócios", url: "https://drive.google.com/drive/folders/1IES0-WSsXSK-Ed8-MVwnbvLN7ARIBj8u?usp=drive_link" },
                { title: "Cursos de Administração", url: "https://drive.google.com/drive/folders/1v6B7GhiBKS8NrQoMvKsOFBxg0y1FjzO6?usp=drive_link" },
                { title: "Mercado Financeiro", url: "https://drive.google.com/drive/folders/1GdaKQXsrNvYO_IuLAY0Cx03nlSlJwRcX?usp=drive_link" },
                { title: "Cursos DropShipping", url: "https://drive.google.com/drive/folders/1vsvA53aTcEjYwEVOOoIDJJfxdfMJzVuh?usp=drive_link" },
                { title: "Cursos de afiliado", url: "https://drive.google.com/drive/folders/1txonRJ9YtThgKxND1NhP3acgotJrJdZr?usp=drive_link" },
                { title: "Cursos Tráfego pago", url: "https://drive.google.com/drive/folders/1WX3AtP7NCBYiP8VNV_OjhQhzFtNoOsDA?usp=sharing" },
                { title: "Cursos de PLR e funis", url: "https://drive.google.com/drive/folders/1gXw2q7wxWbxkyPVT4QzMlcCpKV0l5sSE?usp=drive_link" },
                { title: "Desenvolvimento Pessoal", url: "https://drive.google.com/drive/folders/1KARIkqEHxd-yzKLl2ywo7ALMaiYnSKCQ?usp=drive_link" },
                { title: "Milhas aéreas", url: "https://drive.google.com/drive/folders/1yx9LfdiJzQKCYEg3fmqyc0kPxoLwXmgn?usp=sharing" }
            ]
        },
        {
            title: "Tecnologia e Design",
            icon: Code,
            gradient: "from-purple-600 to-pink-600",
            image: "/assets/images/category-tech.png",
            courses: [
                { title: "Cursos de TI e Hardware", url: "https://drive.google.com/drive/folders/1HoeMUDPBRqmrexzSSx_7OCKZ7DfkoMK5?usp=drive_link", icon: Cpu },
                { title: "Cursos de Programação", url: "https://drive.google.com/drive/folders/1gpgfow0pwU_lvi1pyhCdIMueLsOSt0aK?usp=drive_link", icon: Code },
                { title: "Cursos Hacker", url: "https://drive.google.com/drive/folders/19XqX2qJ6CeUOIaUOo1ilt3XSp6rXHFXn?usp=drive_link", icon: Shield },
                { title: "Cursos de Eletrônica", url: "https://drive.google.com/drive/folders/1msaqU_Jnz5k7wZxUqumb363jzKLF0Oe_?usp=drive_link", icon: Cpu },
                { title: "Cursos de Engenharia", url: "https://drive.google.com/drive/folders/1gm2Y17MdMq7EbB5EgmQ9qOZ6cDhTCwsb?usp=drive_link", icon: PenTool },
                { title: "Cursos de Arquitetura", url: "https://drive.google.com/drive/folders/1WK84t8OreeCP_YddVJLKgUzeJ_np2P0i?usp=drive_link", icon: PenTool },
                { title: "Cursos de Desenhos 3D", url: "https://drive.google.com/drive/folders/1f3LRnTVwdwDGZNV0Cc54G-EYjdpXGlER?usp=drive_link", icon: PenTool },
                { title: "Edição de Vídeo", url: "https://drive.google.com/drive/folders/1iYvgAaFkZjHkBUAlilk__aSr6Y_Gnvk6?usp=drive_link", icon: Video },
                { title: "Cursos de Fotografia", url: "https://drive.google.com/drive/folders/12OavAkUtcFc1W7S5FXNJQK1xC0NbhmEs?usp=drive_link", icon: Camera }
            ]
        },
        {
            title: "Cursos Especializados",
            icon: BookOpen,
            gradient: "from-green-600 to-emerald-600",
            image: "/assets/images/category-specialized.png",
            courses: [
                { title: "Cursos de Medicina", url: "https://drive.google.com/drive/folders/1s3nkX4hRuruNRITO4ECJsZtfL0Xu11in?usp=drive_link", icon: Stethoscope },
                { title: "Cursos de Saúde", url: "https://drive.google.com/drive/folders/1LE_S1d1bBUREVfHGCe7c4JUSLBR29Xak?usp=drive_link", icon: Stethoscope },
                { title: "Cursos de Direito", url: "https://drive.google.com/drive/folders/1v2e9DE3Bt-VFbP5dW0T7Jd0Kv2tdbsC7?usp=drive_link", icon: Scale },
                { title: "Treinamento para Concursos", url: "https://drive.google.com/drive/folders/1y77LqnDnHt4mgw2dkg1AqqMIx1czv-Jg?usp=drive_link", icon: BookOpen },
                { title: "Cursos de Idiomas", url: "https://drive.google.com/drive/folders/15FNlSuqJRTuP5EF93BH4McHCq8Rf4Obs?usp=drive_link", icon: Globe },
                { title: "Cursos de Culinária", url: "https://drive.google.com/drive/folders/1WZOwofm1ClRFhCMUf9Bd5mLnixCS60IS?usp=drive_link", icon: ChefHat },
                { title: "Estrutura Musical", url: "https://drive.google.com/drive/folders/1LEGnYCvASuXJJHC2eV_-3i9RxnzHgo86?usp=drive_link", icon: Music },
                { title: "Cursos Profissionalizantes", url: "https://drive.google.com/drive/folders/1gpgfow0pwU_lvi1pyhCdIMueLsOSt0aK?usp=drive_link", icon: Layers },
                { title: "Cursos de habilitação/Motorista", url: "https://drive.google.com/drive/folders/1JE4yaXRBJFM8A_DzMZEWAm7M_0kTRgoC?usp=drive_link", icon: Truck }
            ]
        },
        {
            title: "Cursos Diversos",
            icon: FolderOpen,
            gradient: "from-indigo-600 to-violet-600",
            image: "/assets/images/category-diverse.png",
            courses: [
                { title: "Cursos Variados", url: "https://drive.google.com/drive/folders/1iYM-gxW5-iKFpH3ylT4oVWnI2veIwu5A?usp=drive_link" },
                { title: "Cursos Variados 2", url: "https://drive.google.com/drive/folders/1K6_3plItcO3BTGPkJLcD7dkqzSDA5UIQ?usp=drive_link" },
                { title: "Cursos Diversos 3", url: "https://drive.google.com/drive/folders/1vRFjw_rcdllg0p9gC4R468hRs43McPW2?usp=drive_link" },
                { title: "Cursos Novos", url: "https://drive.google.com/drive/folders/1k6AzGYDetwiHU_WBvDgF10HRYRFtMRYQ?usp=drive_link" },
                { title: "Diversos Seguimentos - Pasta 1", url: "https://drive.google.com/drive/folders/1AYsHXmYnInMkDchdF8GowUnEBY5pbB4N" },
                { title: "Diversos Seguimentos - Pasta 2", url: "https://drive.google.com/drive/folders/1GKaxxcl-DP6Wfih2tegbJ_YguO8RGplj" }
            ]
        }
    ]

    return (
        <section id="cursos" className="py-20 px-4">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Catálogo <span className="gradient-text">Completo</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore nossa biblioteca completa de cursos e recursos exclusivos
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-20">
                    {categories.map((category, idx) => (
                        <div key={idx} className="space-y-8">
                            {/* Category Header with Image */}
                            <div className="relative h-48 rounded-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors"></div>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 z-20 flex items-center px-8 md:px-12">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg shadow-black/50`}>
                                            <category.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{category.title}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Courses Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.courses.map((course, courseIdx) => (
                                    <a
                                        key={courseIdx}
                                        href={course.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-card-hover p-6 group block"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100`}>
                                                {course.icon ? <course.icon className="w-6 h-6" /> : <category.icon className="w-6 h-6" />}
                                            </div>
                                            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                        </div>

                                        <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                                            {course.title}
                                        </h4>

                                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs">
                                                Google Drive
                                            </span>
                                            <span className="px-2 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                                                Acesso Liberado
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

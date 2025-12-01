import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/assets/images/logo.png" alt="DevFlix Logo" className="h-10 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sua plataforma completa de Marketing Digital. Aprenda, pratique e domine as estratégias que transformam negócios.
                        </p>
                        <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#cursos" className="hover:text-purple-400 transition-colors">Cursos</a></li>
                            <li><a href="#ferramentas" className="hover:text-purple-400 transition-colors">Ferramentas</a></li>
                            <li><a href="#comunidade" className="hover:text-purple-400 transition-colors">Comunidade</a></li>
                            <li><a href="#suporte" className="hover:text-purple-400 transition-colors">Suporte</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Recursos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Tutoriais</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Webinars</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contato</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-2">
                                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>suporte@devflix.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>+55 (11) 9999-9999</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>São Paulo, SP - Brasil</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} DevFlix. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

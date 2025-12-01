import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src="/assets/images/logo.png" alt="DevFlix Logo" className="h-10 w-auto object-contain" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#cursos" className="hover:text-purple-400 transition-colors">Cursos</a>
                        <a href="#ferramentas" className="hover:text-purple-400 transition-colors">Ferramentas</a>
                        <a href="#comunidade" className="hover:text-purple-400 transition-colors">Comunidade</a>
                        <a href="#suporte" className="hover:text-purple-400 transition-colors">Suporte</a>
                    </nav>

                    {/* Right Side Actions - REMOVED */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            <a href="#cursos" className="hover:text-purple-400 transition-colors">Cursos</a>
                            <a href="#ferramentas" className="hover:text-purple-400 transition-colors">Ferramentas</a>
                            <a href="#comunidade" className="hover:text-purple-400 transition-colors">Comunidade</a>
                            <a href="#suporte" className="hover:text-purple-400 transition-colors">Suporte</a>

                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

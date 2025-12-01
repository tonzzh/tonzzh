import { useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import CourseGrid from './components/sections/CourseGrid'
import Features from './components/sections/Features'
import Footer from './components/layout/Footer'
import Lenis from 'lenis'

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Stats />
                <CourseGrid />
                <Features />
            </main>
            <Footer />
        </div>
    )
}

export default App

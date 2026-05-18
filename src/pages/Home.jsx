
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            
            <main className='main container'>
                <Skills />
                <Portfolio />
            </main>

            <Footer/>

        </>
    )
}

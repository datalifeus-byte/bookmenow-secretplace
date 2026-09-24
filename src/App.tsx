import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Products } from './components/Products'
import { Advantages } from './components/Advantages'
import { Production } from './components/Production'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Advantages />
        <Production />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

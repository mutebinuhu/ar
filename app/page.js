import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
    </main>
  )
}

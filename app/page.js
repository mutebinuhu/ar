import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import HighLights from './components/HighLights';
import HospitalSummary from './components/HospitalSummary';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <NavBar/>
      <Banner/>
      <HighLights/>
      <HospitalSummary/>
    </main>
  )
}

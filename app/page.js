import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import HighLights from './components/HighLights';
import HospitalSummary from './components/HospitalSummary';
import Departments from './components/Departments';
import BookWithDoctor from './components/BookWithDoctor';
import Footer from './components/Footer';
import BookingOne from './components/BookingOne';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <NavBar/>
      <Banner/>
      <BookingOne/>
      <HighLights/>
      <HospitalSummary/>
      <Departments/>
      <BookWithDoctor/>
      <Footer/>
    </main>
  )
}

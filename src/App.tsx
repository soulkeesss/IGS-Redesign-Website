import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import KaryawanPage from './pages/KaryawanPage'
import StaffPage from './pages/StaffPage'
import SiswaPage from './pages/SiswaPage'
import OSISPage from './pages/OSISPage'
import AlumniPage from './pages/AlumniPage'
import KarierPage from './pages/KarierPage'
import PPDBPage from './pages/PPDBPage'
import AdministrasiPage from './pages/AdministrasiPage'
import ProfilPage from './pages/ProfilPage'
import BeritaPage from './pages/BeritaPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/karyawan" element={<KaryawanPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/siswa" element={<SiswaPage />} />
            <Route path="/osis" element={<OSISPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/karier" element={<KarierPage />} />
            <Route path="/ppdb" element={<PPDBPage />} />
            <Route path="/administrasi" element={<AdministrasiPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/berita" element={<BeritaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
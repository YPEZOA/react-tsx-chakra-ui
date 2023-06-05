import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../pages/Projects/Projects'
import AboutMe from '../pages/AboutMe/AboutMe'
import Contact from '../pages/Contact/Contact'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default AppRouter

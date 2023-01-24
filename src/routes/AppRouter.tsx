import { Route, Routes } from 'react-router-dom'
import AboutMe from '../pages/AboutMe/AboutMe'
import Main from '../components/Main/Main'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </>
  )
}

export default AppRouter

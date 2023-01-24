import AppRouter from '../../routes/AppRouter'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'

const Main = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <AppRouter />
      </Layout>
    </>
  )
}

export default Main

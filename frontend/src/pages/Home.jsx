import Hero from "../components/Home/Hero"
import RecentBooks from "../components/Home/RecentBooks"

const Home = () => {
  return (
    <div className=" bg-bg1 min-h-screen px-10 py-8">
      <Hero/>
      <RecentBooks />
      </div>
  )
}

export default Home
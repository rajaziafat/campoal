import Activists from "../Components/Home/Activists"
import Counter from "../Components/Home/Counter"
import Fundraisers from "../Components/Home/Fundraisers"
import Hero from "../Components/Home/Hero"
import Matters from "../Components/Home/Matters"
import News from "../Components/Home/News"
import Platform from '../Components/Home/Platform'
import Started from "../Components/Home/Started"

function Home() {
    return (
        <div>
            <Hero />
            <Matters />
            <Activists />
            <Platform />
            <Fundraisers />
            <Counter />
            <Started />
            <News />
        </div>
    )
}

export default Home

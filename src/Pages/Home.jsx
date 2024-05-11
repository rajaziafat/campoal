import Activists from "../Components/Home/Activists"
import Counter from "../Components/Home/Counter"
import Fundraisers from "../Components/Home/Fundraisers"
import Hero from "../Components/Home/Hero"
import Matters from "../Components/Home/Matters"
import Platform from '../Components/Home/Platform'

function Home() {
    return (
        <div>
            <Hero />
            <Matters />
            <Activists />
            <Platform />
            <Fundraisers/>
            <Counter/>
        </div>
    )
}

export default Home

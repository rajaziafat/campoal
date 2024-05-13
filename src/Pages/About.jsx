import Hero from '../Components/About/Hero'
import OurStory from '../Components/About/OurStory'
import OurValues from '../Components/About/OurValues'
import OurVision from '../Components/About/OurVision'
import Reviews from '../Components/About/Reviews'
import WhoUsePlatfrom from '../Components/About/WhoUsePlatfrom'
import Counter from '../Components/Home/Counter'

function About() {
    return (
        <div>
            <Hero />
            <WhoUsePlatfrom />
            <OurValues />
            <OurStory />
            <OurVision />
            <Counter/>
            <Reviews/>
        </div>
    )
}

export default About

import BeYourChange from "../Components/Faq/BeYourChange"
import GeneralQuestion from "../Components/Faq/GeneralQuestion"
import Hero from "../Components/Faq/Hero"
import Membership from "../Components/Faq/Membership"
import MyAccount from "../Components/Faq/MyAccount"
import PromotedPetitions from "../Components/Faq/PromotedPetitions"


function Faq() {
    return (
        <div>
            <Hero />
            <GeneralQuestion />
            <MyAccount />
            <PromotedPetitions />
            <Membership />
            <BeYourChange/>
        </div>
    )
}

export default Faq

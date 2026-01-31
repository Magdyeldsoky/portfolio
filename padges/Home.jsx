import ThemTuggle from "../com/ThemTuggle.jsx";
import BAg from "../com/BAg.jsx";
import Nav from "../com/nav.jsx";
import HeroSection from "../com/heroSection.jsx";
import AboutMe from "../com/aboutMe.jsx";
import Skills from "../com/Skills.jsx";


const HOU = () => {
    return (<>
            <div className="min-y-screen bg-bg text-foreground overflow-hidden ">
                <ThemTuggle/>
                <BAg/>
                <Nav/>
                <main>
                    <HeroSection/>
                    <AboutMe/>
                   <Skills/>
                </main>

            </div>
        </>

    )

}
export default HOU
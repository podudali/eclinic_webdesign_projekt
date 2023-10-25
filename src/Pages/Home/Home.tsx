// components
import { HomeHero } from "../../Components/HomeHero/HomeHero"
import { Testimonials } from "../../Components/Testimonials/Testimonials"
import { WhySection } from "../../Components/WhySection/WhySection"
import { LocationsSection } from "../../Components/LocationsSection/LocationsSection"

export const Home = ():JSX.Element => {
  return (
    <>
      <HomeHero />
      <WhySection />
      <Testimonials />
      <LocationsSection />
    </>
  )
}
import { HeroContainer,
    HeroBg,
    MediaBg,
    HeroText,
    HeroTitle,
    HeroSub,} from '../../styles/elementStyles'


const HeroSection = () => {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                    <MediaBg scene="https://prod.spline.design/MLWli1ts19XJ2-QT/scene.splinecode" />
            </HeroBg>
            <HeroText>
                <HeroTitle>Carlos Morais</HeroTitle>
                <HeroSub>React Developer</HeroSub>
            </HeroText>
        </HeroContainer>
    )
}

export default HeroSection
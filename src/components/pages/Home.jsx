import Cards from '../Cards'
import DoubleGrid from '../DoubleGrid';
import Grid from "../FirstGrid";
import ImageGrid from '../ImageGrid';
import LogoSection from "../LogoSection";

function Home() {
  return (
    <>
    <LogoSection/>
    <Cards
    title="Impulsa Tu Negocio"
    text="Crea una plataforma que no solo responda a las necesidades
    operativas y de seguridad sino que también te posicione ala
    vanguardia de la innovacion."
    titleStyle="-big"
    textStyle="-small"/>
    <Grid/>
    <Cards
    title="Productos de Software Hechos a la Medida"
    text=""
    titleStyle="-big"
    />
    <ImageGrid />
    <Cards
    title="Nuestros Servicios"
    text=""
    titleStyle="-big"
    />
    <DoubleGrid/>
    </>
  )
}

export default Home

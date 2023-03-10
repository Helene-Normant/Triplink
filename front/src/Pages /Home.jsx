import Cards from '../Components/cards/Cards';
import Header from '../Components/header/Header';
import Searchbar from '../Components/searchbar/Searchbar';
import Footer from '../Components/footer/Footer';
import Modal from '../Components/header/modal/Modal';

function Home() {
    return (
    <section className='container-home'>
    <Header />
     <Searchbar />
     <Cards />
     <Footer />
     <Modal />
     </section>
    )
   }
  
   export default Home;
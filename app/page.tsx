import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import Location from '../components/Location';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSlider />
        <Services />
        <BookingForm />
        <Location />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

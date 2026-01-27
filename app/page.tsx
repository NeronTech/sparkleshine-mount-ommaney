import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import Location from '../components/Location';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import FeedbackForm from '../components/FeedbackForm';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSlider />
        <Services />
        <Testimonials />
        <BookingForm />
        <Location />
        <FeedbackForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

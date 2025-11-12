import { useEffect } from 'react';
import Contact from '../components/Contact/Contact'
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <section>
      <div className="bg-gray-800 flex justify-center items-center h-[50vh] lg:h-[70vh] md:h-[70vh] sm:h-[70vh]">
        <h1 className="text-white text-4xl font-bold">#contact me</h1>
      </div>
      <div>
        <Contact />
      </div>
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage

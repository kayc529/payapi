import ContactForm from '../components/contact/ContactForm';
import ClientsGrid from '../components/ClientsGrid';

const ContactPage = () => {
  return (
    <section className='w-screen'>
      <div className='flex flex-col w-full mx-auto px-4 pt-20 pb-20 items-center lg:max-w-[1100px] lg:items-start'>
        <h1 className='font-display text-[32px] text-darkBlue text-center pb-16 w-[327px] leading-[36px] md:text-2xl md:leading-2xl md:w-[500px] lg:text-start lg:w-[730px] lg:text-3xl'>
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className='flex flex-col items-center lg:flex-row lg:space-x-24'>
          <ContactForm />
          <div className='flex flex-col items-center pt-20 lg:items-start lg:-mt-20 lg:pt-0'>
            <h3 className='font-display text-lg text-darkBlue text-center leading-lg pb-12 w-[327px] md:w-[445px] lg:pl-2 lg:text-start'>
              Join the thousands of innovators that are already building with us
            </h3>
            <ClientsGrid darkMode={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

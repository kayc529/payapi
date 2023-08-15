import { useState } from 'react';
import ContactFormInput from './ContactFormInput';
import ContactFormMessageInput from './ContactFormMessageInput';
import SecondaryButton from '../SecondaryButton';
import CheckBox from '../CheckBox';

const ContactForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
  });
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onInputChanged = (name, value) => {
    let newInput = { ...input, [name]: value };
    //reset validity of email field
    if (name === 'email' && value.length > 0) {
      setIsEmailEmpty(false);
    }
    setInput(newInput);
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    if (input.email.length <= 0) {
      setIsEmailEmpty(true);
      return;
    }
  };

  return (
    <form className='flex flex-col space-y-6 w-[327px] w-[327px] md:w-[445px]'>
      <ContactFormInput
        placeholder='Name'
        name='name'
        value={input.name}
        onChange={onInputChanged}
      />
      <ContactFormInput
        placeholder='Email Address'
        name='email'
        isValid={!isEmailEmpty}
        value={input.email}
        onChange={onInputChanged}
      />
      <ContactFormInput
        placeholder='Company Name'
        name='company'
        value={input.company}
        onChange={onInputChanged}
      />
      <ContactFormInput
        placeholder='Title'
        name='title'
        value={input.title}
        onChange={onInputChanged}
      />
      <ContactFormMessageInput
        placeholder='Message'
        name='message'
        value={input.message}
        onChange={onInputChanged}
      />
      {/* Check box */}
      <div className='flex items-center space-x-6'>
        <CheckBox
          onChange={() => setIsChecked((prev) => !prev)}
          isChecked={isChecked}
        />
        <p className='text-sm text-darkBlue leading-sm'>
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>
      <SecondaryButton text='Submit' onButtonClick={onButtonClick} />
    </form>
  );
};

export default ContactForm;

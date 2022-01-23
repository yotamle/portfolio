import { useRef } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z5nqmfg',
        'template_4z7zo0k',
        formRef.current,
        'user_kA7wgMEg3AiBA9REarxZr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Your Name" name="user_name" />
        </div>
        <div>
          <input type="email" placeholder="Your Email" name="user_email" />
        </div>
        <div>
          <textarea
            name="user_message"
            rows="10"
            placeholder="Enter your message here..."
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

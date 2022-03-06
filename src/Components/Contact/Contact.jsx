import { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Result = () => {
  return (
    <p className="msg-success">Your message has been sent successfully.</p>
  );
};

const Contact = () => {
  const formRef = useRef();

  const [result, showResult] = useState(false);
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
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-me">
        <h2 className="title">Contact me</h2>
        <span>Feel free to contact me any time. through any method below.</span>
      </div>

      <div className="contact-wrapper">
        <div className="form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input type="text" name="user_name" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
            <div>
              <label>Message</label>
              <textarea name="user_message" required></textarea>
            </div>
            <button type="submit">Submit</button>
            {result ? <Result /> : null}
          </form>
        </div>

        <div className="my-network">
          <ul className="network">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yotam6levy/"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/yotamle"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/972545378417"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="c-by">
        <small>© 2022 Yotam Levy</small>
      </div>
    </div>
  );
};

export default Contact;

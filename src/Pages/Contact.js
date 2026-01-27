export const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out to us via the form below or through our support email.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: support@example.com</p>
      <p>Phone: +234 800 123 4567</p>
    </div>
  );
};

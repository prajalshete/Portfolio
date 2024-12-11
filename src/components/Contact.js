import '../components/Contact.css';
const Contact = () => {
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <form>
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Message</label>
          <textarea placeholder="Enter your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
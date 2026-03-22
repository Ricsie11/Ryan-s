import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset(); //clears the form

        setTimeout(() => {
          setSuccess(""); //clears the success message after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        setSuccess(false);
        console.error("Failed to send email:", error);

        setTimeout(() => {
          setSuccess("");
        }, 2000);
      });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Connect
              </h1>
              <p className="text-gray-500 text-lg">
                Ready for your transformation? Reach out today to book your
                session or ask any questions about our luxury services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-neutral-50 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-500">+234 911 707 3351</p>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-500 break-all">
                    styledbyryaan@gmail.com
                  </p>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-500">K-City plaza, Wuse 2, Abuja</p>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                  <FiClock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <p className="text-gray-500">Mon - Sat: 9am - 6pm</p>
                  <p className="text-gray-500">Sun: 1pm - 6pm</p>
                </div>
              </div>
            </div>

            <div className="rounded-4xl overflow-hidden grayscale contrast-125 h-64 border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.821734275069!2d7.4769!3d9.0764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0000000001%3A0x0!2sK-City%20Plaza!5e0!3m2!1sen!2sng!4v1711100000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-primary p-12 lg:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[120px] z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 italic">Send a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-60">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="client_firstname"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-60">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="client_lastname"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-60">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="client_email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-60">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="client_message"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-400 mt-4 text-center">
                    Message sent successfully! we'll get back to you shortly.
                  </p>
                )}
                {success === false && (
                  <p className="text-red-400 mt-4 text-center">
                    Failed to send message. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

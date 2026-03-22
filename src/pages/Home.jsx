import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/hero.png";
import heroImg2 from "../assets/hero2.png";
import heroImg3 from "../assets/hero3.png";
import interiorImg from "../assets/interior.png";

const Home = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const heroImages = [heroImg1, heroImg2, heroImg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const services = [
    {
      title: "Blonding & Balayage",
      description:
        "Sun-kissed, natural-looking results crafted to suit your skin tone and lifestyle — done right, every time.",
    },
    {
      title: "Precision Haircuts",
      description:
        "Every cut is shaped with care and skill, so your hair stays fresh and grows out clean — no guesswork, just results.",
    },
    {
      title: "Lived-In Color",
      description:
        "Smooth, seamless color that looks effortless and lasts — because your time and money should always be well spent.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHero}
              src={heroImages[currentHero]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt="Hairstyle inspiration"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              If nobody's asking <br />
              <span className="italic text-accent">
                "Who does your hair?"
              </span>{" "}
              <br />
              come see us.
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-neutral-200 transition-all"
              >
                Book Appointment <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHero(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentHero === idx ? "bg-accent w-8" : "bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 italic logo-font text-accent">
                Your Favorite West Hollywood Hair styles
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                100% Talent <br />
                0% Pretentious
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your hair deserves a stylist who truly cares — and that's
                exactly what you'll find here. We bring skill, precision, and
                passion to every chair, because great hair isn't a luxury, it's
                something everyone deserves. Your satisfaction isn't just our
                goal — it's our standard.
              </p>
              <div className="space-y-4">
                {[
                  "Your Satisfaction, Our Standard",
                  "Color Specialists Who Listen",
                  "Precision With Every Cut",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center space-x-3 text-primary font-semibold"
                  >
                    <FiCheckCircle className="text-accent" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={interiorImg}
                alt="Salon Interior"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Specialities
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-neutral-100 group"
              >
                <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                  <FiStar size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 underline decoration-accent underline-offset-8 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Are Saying</h2>
        </div>
        
        <div className="flex relative">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[
              { text: "Hands down, this is the best hair stylist in town and honestly..... I've been to many. My hair was given the most personalized and detailed cut and color of my whole life!", name: "Amaka" },
              { text: "StylesByRyan transformed my look completely! The attention to detail is unmatched. I finally found my forever stylist.", name: "Stephanie" },
              { text: "I've never felt more comfortable in a salon. 100% talent and absolutely zero pretentiousness. Highly recommend!", name: "Tinuke" },
              { text: "The balayage work here is pure art. My hair has never looked this vibrant and healthy. Thank you, Ryan!", name: "Oluchi" },
              { text: "A truly luxury experience without the ego. He is friendly, professional, and results-driven. Simply the best.", name: "Amanda" }
            ].map((client, idx) => (
              <div key={idx} className="bg-primary text-white p-10 rounded-4xl w-[400px] shrink-0 whitespace-normal">
                <p className="text-lg italic font-light leading-relaxed mb-6">"{client.text}"</p>
                <h4 className="text-accent font-bold text-sm uppercase tracking-widest">- {client.name}</h4>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { text: "Hands down, this is the best hair salon in town and honestly..... I've been to many. My hair was given the most personalized and detailed cut and color of my whole life!", name: "Amaka" },
              { text: "StylesByRyan transformed my look completely! The attention to detail is unmatched. I finally found my forever stylist.", name: "Stephanie" },
              { text: "I've never felt more comfortable in a salon. 100% talent and absolutely zero pretentiousness. Highly recommend!", name: "Tinuke" },
              { text: "The balayage work here is pure art. My hair has never looked this vibrant and healthy. Thank you, Ryan!", name: "Oluchi" },
              { text: "A truly luxury experience without the ego. The team is friendly, professional, and results-driven. Simply the best.", name: "Amanda" }
            ].map((client, idx) => (
              <div key={idx + 5} className="bg-primary text-white p-10 rounded-4xl w-[400px] shrink-0 whitespace-normal">
                <p className="text-lg italic font-light leading-relaxed mb-6">"{client.text}"</p>
                <h4 className="text-accent font-bold text-sm uppercase tracking-widest">- {client.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;

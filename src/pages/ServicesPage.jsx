import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import balayageImg from '../assets/balayage.png';

const ServicesPage = () => {
const categories = [
  {
    title: "Wigs & Frontals",
    items: [
      { name: "Frontal Installation", price: "Starts at ₦25,000" },
      { name: "Lace Closure Installation", price: "Starts at ₦20,000" },
      { name: "Full Wig Installation", price: "Starts at ₦18,000" },
      { name: "Wig Customization & Tinting", price: "Starts at ₦15,000" },
      { name: "Wig Wash & Revamp", price: "Starts at ₦10,000" },
    ]
  },
  {
    title: "Color Services",
    items: [
      { name: "Blonding", price: "Starts at ₦35,000" },
      { name: "Balayage / Ombre", price: "Starts at ₦40,000" },
      { name: "Full Head Color", price: "Starts at ₦25,000" },
      { name: "Highlights", price: "Starts at ₦30,000" },
      { name: "Color Correction", price: "By Consultation" },
    ]
  },
  {
    title: "Hair Care & Styling",
    items: [
      { name: "Hair Wash & Blowout", price: "Starts at ₦8,000" },
      { name: "Deep Conditioning Treatment", price: "Starts at ₦7,500" },
      { name: "Haircut & Style", price: "Starts at ₦12,000" },
      { name: "Up-Styles & Special Occasion", price: "Starts at ₦20,000" },
    ]
  }
];

  return (
    <div className="pt-32 pb-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            High-performance hair care meets sustainable luxury. Every service is a bespoke experience tailored to your unique beauty.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-12 rounded-4xl shadow-sm border border-neutral-100"
            >
              <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-neutral-100">{cat.title}</h2>
              <div className="space-y-8">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-end group">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{item.name}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <FiCheck className="mr-2 text-accent" /> Professional execution
                      </div>
                    </div>
                    <span className="text-primary font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="relative rounded-[3rem] overflow-hidden h-[500px] mb-24">
            <img src={balayageImg} alt="Luxury Color Treatment" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-8">
                <div className="max-w-3xl">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Expertise That Inspires</h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                        We don't just do hair; we define styles. Our specialists stay ahead of trends to ensure you leave feeling like the best version of yourself.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

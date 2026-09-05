import ContactForm from "./contactForm";
import { motion } from "framer-motion";
// import { fadeIn } from "@/lib/variant";
import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  return (
    <section id="contact" className="px-2 grid sm:grid-cols-2 gap-x-1 mt-8 mb-2">
      {/* text & illustration*/}
      <motion.div className="md:basis-1/5 pl-3 sm:justify-center">
        <ContactHeader />
        <ContactInfo />
      </motion.div>
      {/* form */}
      <motion.div
        // variants={fadeIn("left", 0.6)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.1 }}
        className=""
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;

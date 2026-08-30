import { Email, HomeFilled, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";
// import { fadeIn, itemVariant } from "@/lib/variant";

const ContactInfo = () => {
  const Info = [
    { index: 1, icon: <Phone size={20} />, text: "+254 769779201" },
    {
      index: 1,
      icon: <Email size={20} />,
      text: (
        <a href="mailto:timrichardmax@gmail.com" className="text-gray-500">
          timrichardmax@gmail.com{" "}
        </a>
      ),
    },
    { index: 3, icon: <HomeFilled size={20} />, text: "Nairobi, Kenya" },
  ];
  return (
    <div className="mb-6 flex flex-col pt-4 md:mb-12 md:basis-2/5 md:pt-0 lg:pt-4 xl:mb-0">
      {/* text  */}
      <div className="flex flex-col justify-center ">
        <motion.p
          // variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="subtitle font-base flex max-w-full text-balance text-lg font-sans text-gray-500 "
        >
          I'm available for freelance & full time positions.
        </motion.p>
        <motion.p
          // variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="subtitle font-base mb-6 flex max-w-full text-balance font-sans text-lg text-gray-500"
        >
          Contact me and lets talk.
        </motion.p>
      </div>
      <motion.div
        // variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="mb-12 flex flex-col gap-y-4 text-base md:mb-10 md:gap-y-12"
      >
        {/* info */}
        {Info.map((info, index) => {
          return (
            <motion.div
              // variants={itemVariant}
              key={index}
              className="flex items-center gap-x-8 text-center "
            >
              <span className="text-green-600">{info.icon}</span>
              <div className="text-gray-500">{info.text}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ContactInfo;

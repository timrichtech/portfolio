import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
// import { fadeIn } from "@/lib/variant";

const ContactHeader = () => {
  return (
    <div className="gap-y-2 flex flex-col items-start justify-center px-3">
      {/* <motion.h5
        // variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-4 flex items-center gap-x-4 text-xl text-green-600"
      > */}
      <Typography className="  text-green-600 text-2xl font-bold">
        {" "}
        Say Hello !
      </Typography>

      <motion.p
        // variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="md:text-xl text-xl max-w-md md:w-auto  md:text-wrap font-bold"
      >
        Lets Work Together.
      </motion.p>
    </div>
  );
};

export default ContactHeader;

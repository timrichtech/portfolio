import { Facebook, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function HeroSecction() {
  return (
    <Box
      id="home"
      className=" grid  flex-col grid-cols-1 sm:flex-col mt-20  gap-2   w-full  sm:grid-cols-1   md:flex-wrap-reverse md:grid-cols-2 md:text-left"
    >
      <Stack
        className="sm:grid p-1 gap-y-1 justify-center align-middle
          flex flex-Wrap  sm:grid-cols-1  "
      >
        <Box className="grid grid-cols-1  justify-center text-center">
          <Typography className="sm:text-3xl font-bold  md:text-4xl text-4xl mb-1 xl:text-6xl ">
            Hello, I'm_ Timothy Makokha.
          </Typography>
          <Typography className="text-xl mb-1 text-green-600">
            Front-End Web Developer
          </Typography>
        </Box>

        <Typography className="text-wrap font-sans text-gray-400 text-lg  sm:text-wrap sm:text-sm md:text-base lg:text-xl  text-left  xl:text-xl 2xl:text-xl">
          I am Makokha Timothy, a versatile Front-End Web developer with a
          passion for crfafting exceptional web experiences .Welcome to my
          portfolio. Where i showcased my journey through the world of
          technology and innovation. As a Front-End Web Developer,and an
          aspiring Full Stack Developer. I have honed my skills in both
          front-end and back-end technologies.allowing me to create dynamic
          ,interactive and user friendly web applications.
        </Typography>
        <div className="flex gap-2 justify-center">
          <IconButton className="text-white size-2xl">
            <LinkedIn />
          </IconButton>
          <IconButton className="text-white">
            <GitHub />
          </IconButton>
          <IconButton className="text-white">
            <Facebook />
          </IconButton>
        </div>
      </Stack>

      {/* <div className="sm:w-full md:w-full  lg:w-full xlg:w-full justify-center"> */}
      <div className=" justify-center   md:w-full sm:pl-4   rounded-4xl overflow-hidden">
        <img
          src="../../../LUM_4397.jpg"
          alt="My picture"
          className="w-full mask-r-from-40% sm:w-3/4  mask-l-from-40% h-full object-cover rounded-4xl"
        />
      </div>
    </Box>
  );
}

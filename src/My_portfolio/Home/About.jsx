import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function About() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Box
      id="about"
      className="mt-10 grid flex-col grid-cols-1 justify-center align-center w-full"
    >
      <Stack className="grid grid-cols-1 text-center gap-y-1.5">
        <Typography className="text-2xl lg:text-4xl font-bold">
          About me
        </Typography>
        <Typography className="text-xl text-green-600">
          Who i am & what i Do
        </Typography>
      </Stack>
      <Box className="flex justify-center">
        <Card className="grid  justify-center shadow-none bg-inherit b-0  sm:w-full text-center  md:flex-col md:grid-cols-1 md:justify-items-center md:w-3/4">
          <CardContent className="gap-y-1.5">
            <Typography className="sm:text-base text-gray-400  text-left font-sans text-lg md:text-xl xl:text-xl  lg:text-xl md:text-center lg:text-block text-wrap tracking-wide">
              Hello.Im Makokha Timothy a pasionate Web developer with years of
              experience in creating staning and functional websites.I
              specialize in Front end web Development,responsive design,. My
              goal is to craft Web experiences that not only look great but also
              deliver seamless functionality and ecxeptional user experiences. I
              keep up with the latest industry trends and technologies to ensure
              my work is always at the forefront of web development. Whether
              you're looking to create a brand new website ,improve an existing
              one or trouble shoot a technical issue .I'm here to help you
              archieve your online goals. Let's work together to bring your web
              project to life! feel free to explore my portfolio to see some of
              my past projects.If you have any questions or want to discuss a
              project. please dont hesitate to get in touch.
            </Typography>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-green-600 rounded-full text-white p-2  px-5 mt-4 hover:bg-green-700 transition duration-300"
            >
              Contact Me
            </button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

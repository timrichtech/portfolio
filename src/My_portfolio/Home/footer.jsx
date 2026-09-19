import { Facebook, GitHub, LinkedIn, WhatsApp, X } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";


export default function Foota() {
  return (
    <Stack className="w-full bg-gray-600 rounded-b-sm rounded-l-sm px-2">
      <Box>
        <Typography className="flex justify-center text-2xl font-bold text-green-600">
          Portfolio.
        </Typography>
      </Box>

      <Box
       
        className="flex pt-3 justify-center gap-1"
      >
        <IconButton className="">
          <Facebook className="text-white" />
          {/* <FaFacebook className="text-white" /> */}
        </IconButton>
      
        <a href="https://www.linkedin.com/in/timothy-makokha-9b7158332" target="" rel="">
        <IconButton>
          <LinkedIn className="text-white" />
          </IconButton>
        </a>
      
        <IconButton>
          <WhatsApp className="text-white" />
        </IconButton>
        <IconButton>
          <X />
        </IconButton>
        <IconButton>
          <GitHub className="text-white" />
        </IconButton>
      </Box>
      <Box>
        <Typography className="text-gray-300">
          CopyRight@ Makokha Timothy. All Rights Reserved.
        </Typography>
      </Box>
    </Stack>
  );
}

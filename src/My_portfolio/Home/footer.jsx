import { Facebook, GitHub, LinkedIn, WhatsApp, X } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function Foota() {
  return (
    <Stack className="w-full bg-gray-600 rounded-b-sm rounded-l-sm ">
      <Box>
        <Typography className="flex justify-center text-2xl font-bold text-green-600">
          Portfolio.
        </Typography>
      </Box>

      <Box
        display={"flex"}
        paddingTop={3}
        justifyContent={"center"}
        columnGap={2}
      >
        <IconButton className="">
          <Facebook className="text-white" />
          {/* <FaFacebook className="text-white" /> */}
        </IconButton>
        <IconButton>
          <LinkedIn className="text-white" />
        </IconButton>
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

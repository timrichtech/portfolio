import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  return (
    <Stack>
      <Dialog>
        <Card sx={{ bgcolor: "" }}>
          <Box display={"flex"} justifyContent={"end"}>
            <IconButton>
              <Close />
            </IconButton>
          </Box>
          <CardHeader
            title={
              <Box display={"flex"} justifyContent={"center"}>
                <Typography>Login</Typography>
              </Box>
            }
          />

          <CardContent>
            <Stack display={"flex"} justifyContent={"center"} rowGap={1}>
              <Stack display={"flex"} justifyContent={"center"} rowGap={1}>
                <TextField label="Email" />
                <TextField label="Password" />
              </Stack>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Checkbox
                  defaultChecked
                  size="
                      small"
                />
                <a color="blue">Forget Password?</a>
              </Box>
              <Button fullWidth>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  borderRadius={5}
                  bgcolor={"Blue"}
                  paddingLeft={3}
                  paddingRight={3}
                >
                  <Typography variant="body" color={"white"}>
                    Login
                  </Typography>
                </Box>
              </Button>
              <Box display={"flex"}>
                <Typography>Don't have an account?</Typography>
                <a>
                  <Typography fontSize={"bold"} color={"blue"}>
                    Register
                  </Typography>
                </a>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Dialog>
    </Stack>
  );
}
export default Login;

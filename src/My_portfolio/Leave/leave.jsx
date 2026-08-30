import styled from "@emotion/styled";
import { Add, CheckBox, Close, Settings, Tune } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  LinearProgress,
  ListItemButton,
  ListItemText,
  Popover,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";

const Requests = [
  {
    id: 1,
    user: { first_name: "Tim", last_name: "Maks" },
    leave_type: "Emergency",
    user_image: "",
    start_date: "12/01/2025",
    end_date: "15/02/2025",
    days_remaining: 13,
    reason:
      "To visit a very important non important meeting between me and myself",
    steps: ["H.O.D", "D.O.S", "Deputy", "Principal"],
    profile_image: "",
    active_step: 3,
    leave_status: "Pending",
  },
  {
    id: 2,
    user: { first_name: "Sam", last_name: "Smith" },
    leave_type: "Sick",
    user_image: "",
    start_date: "01/02/2025",
    end_date: "02/02/2025",
    days_remaining: 32,
    reason: "To seek medical attention",
    steps: ["H.O.D", "D.O.S", "Deputy", "Principal"],
    profile_image: "",
    active_step: 4,
    leave_status: "Approved",
  },
];

const users = [
  { first_name: "Sam", last_name: "Smith" },
  { first_name: "Hendrick", last_name: "Lamar" },
  { first_name: "Victor", last_name: "Osteen" },
  { first_name: "Alison", last_name: "Buckner" },
  { first_name: "Judith", last_name: "Lawson" },
];
function Leave() {
  return (
    <Box className="flex flex-col p-2 bg-blue-100 min-h-100%">
      <LeaveHome />
    </Box>
  );
}

function LeaveHome() {
  const [selected, setSelected] = useState("approved");
  const [requests, setRequests] = useState(Requests);
  const [openNew, setopenNew] = useState(false);
  const [openSet, setopenSet] = useState(false);
  const [checked, setChecked] = useState(false);
  const [anchorEl, setanchorEl] = useState(null);
  const openPop = Boolean(anchorEl);
  const [leave_types, setLeaveTypes] = useState([
    "Emergency",
    "Sick leave",
    "Paternity",
    "Maternity",
    "Annual leave",
  ]);

  const handleClick = (btn) => {
    setSelected(btn);
    const filteredReq = Requests.filter((req) => {
      if (req.leave_status.toLowerCase() === btn) {
        return true;
      } else {
        return false;
      }
    });
    setRequests(filteredReq);
  };
  return (
    <Stack className="gap-y-2 bg-blue-100 min-h-100%">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TextField placeholder="Search for a tutor" />
        <Box display={"flex"} columnGap={2} alignItems={"center"}>
          <Button variant="contained" onClick={() => setopenNew(true)}>
            Apply leave
          </Button>
          <Button variant="contained" onClick={() => setRequests(Requests)}>
            All leaves
          </Button>
          <Button
            startIcon={<Settings color="primary" />}
            variant="outlined"
            onClick={() => setopenSet(true)}
          >
            Leave settings
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          columnGap={2}
        >
          <Button variant="outlined">Requests</Button>
          <Button variant="outlined">My Tasks</Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          columnGap={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <div
              style={{
                border: "1px solid #3f51b5",
                borderRadius: `10px 0 0 10px`,
                height: 25,
                width: 100,
                padding: 0,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  selected === "approved" ? "#3f51b5" : "#c5cae9",
              }}
            >
              <CardActionArea
                sx={{
                  display: "inline",
                  justifyContent: "center",
                  height: "100%",
                }}
                onClick={() => {
                  handleClick("approved");
                }}
              >
                <Typography
                  variant="body2"
                  justifySelf={"center"}
                  alignSelf={"center"}
                  color={selected === "approved" ? "#ffffff" : "#000000"}
                >
                  Approved
                </Typography>
              </CardActionArea>
            </div>
            <div
              style={{
                border: "1px solid #3f51b5",
                borderRadius: 0,
                height: 25,
                width: 100,
                padding: 0,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: selected === "pending" ? "#3f51b5" : "#c5cae9",
              }}
            >
              <CardActionArea
                sx={{
                  display: "inline",
                  justifyContent: "center",
                  height: "100%",
                }}
                onClick={() => {
                  handleClick("pending");
                }}
              >
                <Typography
                  variant="body2"
                  justifySelf={"center"}
                  alignSelf={"center"}
                  color={selected === "pending" ? "#ffffff" : "#000000"}
                >
                  Pending
                </Typography>
              </CardActionArea>
            </div>
            <div
              style={{
                border: "1px solid #3f51b5",
                borderRadius: "0 10px 10px 0",
                height: 25,
                width: 100,
                padding: 0,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  selected === "rejected" ? "#3f51b5" : "#c5cae9",
              }}
            >
              <CardActionArea
                sx={{
                  display: "inline",
                  justifyContent: "center",
                  height: "100%",
                }}
                onClick={() => {
                  handleClick("rejected");
                }}
              >
                <Typography
                  variant="body2"
                  justifySelf={"center"}
                  alignSelf={"center"}
                  color={selected === "rejected" ? "#ffffff" : "#000000"}
                >
                  Rejected
                </Typography>
              </CardActionArea>
            </div>
          </Box>
          <Button
            variant="outlined"
            startIcon={<Tune />}
            onClick={(e) => setanchorEl(e.target)}
          >
            Filter
          </Button>
        </Box>
        <Popover
          open={openPop}
          anchorEl={anchorEl}
          onClose={() => setanchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <ListView setOpenPop={setanchorEl} leave_types={leave_types} />
        </Popover>
      </Box>
      <Divider className=" " />
      {requests.length > 0 ? (
        <Grid container gap={2} mt={1}>
          {requests.map((request) => {
            return (
              <Grid item xs={4} key={request.id}>
                <LeaveCard request={request} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box className="flex justify-center align-middle h-1/2">
          <Typography>No leaves to display</Typography>
        </Box>
      )}

      <Dialog
        open={openNew}
        onClose={() => setopenNew(false)}
        fullWidth
        maxWidth={"md"}
      >
        <DialogTitle>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5" color={"primary"}>
              Create a new request
            </Typography>
            <IconButton onClick={() => setopenNew(false)}>
              <Close color="secondary" />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />

        <DialogContent
          sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
        >
          <Stack
            display={"flex"}
            rowGap={2}
            component={"fieldset"}
            borderRadius={2}
            alignItems={"center"}
          >
            <FormLabel component={"legend"}>User</FormLabel>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"100%"}
            >
              <FormControlLabel
                label="Self"
                control={
                  <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                  />
                }
              />
              <Autocomplete
                disabled={checked}
                sx={{ width: "40%" }}
                options={users.map((user) => {
                  return `${user.first_name} ${user.last_name}`;
                })}
                renderInput={(params) => (
                  <TextField {...params} label="User" variant="outlined" />
                )}
              />
            </Box>
          </Stack>
          <Stack
            display={"flex"}
            rowGap={2}
            component={"fieldset"}
            borderRadius={2}
            alignItems={"center"}
          >
            <FormLabel component={"legend"}>Duration</FormLabel>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"100%"}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Start date" />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="End date" />
              </LocalizationProvider>
            </Box>
          </Stack>
          <Autocomplete
            sx={{ width: "50%" }}
            options={leave_types}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Leave type"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <TextField
            multiline
            minRows={2}
            maxRows={3}
            placeholder="Reason ..."
          />
          <DialogActions>
            <Button variant="contained" color="secondary">
              Discard
            </Button>
            <Button variant="contained" color="primary">
              Request
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openSet}
        onClose={() => setopenSet(false)}
        fullWidth
        maxWidth={"md"}
      >
        <DialogTitle>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5" color={"primary"}>
              Leave settings
            </Typography>
            <IconButton onClick={() => setopenSet(false)}>
              <Close color="secondary" />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Stack rowGap={1}>
            <LeaveSettings />
          </Stack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}

export default Leave;

function ListView(props) {
  const [openDR, setDR] = useState(false);
  const [show, setShow] = useState(null);
  const { leave_types, setOpenPop } = props;
  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          onClick={() => {
            setDR(true);
            setShow(true);
          }}
        >
          Date range
        </Button>
        <Divider />
        <Button
          onClick={() => {
            setDR(true);
            setShow(false);
          }}
        >
          Leave type
        </Button>

        <Box display={"flex"} justifyContent={"space-between"}></Box>
      </CardContent>
      <Dialog
        open={openDR}
        onClose={() => setDR(false)}
        fullWidth
        maxWidth={"sm"}
      >
        <DialogTitle>
          <Box
            display={show ? "flex" : "none"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5" color={"primary"}>
              Date range
            </Typography>
            <IconButton
              onClick={() => {
                setDR(false);
                setOpenPop(null);
              }}
            >
              <Close color="secondary" />
            </IconButton>
          </Box>
          <Box
            display={show ? "none" : "flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5" color={"primary"}>
              Leave type
            </Typography>
            <IconButton
              onClick={() => {
                setDR(false);
                setOpenPop(null);
              }}
            >
              <Close color="secondary" />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Box
            display={show ? "flex" : "none"}
            justifyContent={"space-between"}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Start date" />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="End date" />
            </LocalizationProvider>
          </Box>
          <Stack
            display={show ? "none" : "flex"}
            maxHeight={200}
            overflow={"auto"}
          >
            {leave_types && leave_types.length > 0
              ? leave_types.map((leavt) => {
                  return (
                    <ListItemButton key={leavt}>
                      <ListItemText primary={leavt} />
                    </ListItemButton>
                  );
                })
              : null}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Box display={show ? "flex" : "none"} columnGap={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setDR(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Filter
            </Button>
          </Box>
          <Box display={show ? "none" : "flex"} columnGap={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setDR(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Filter
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
const LeaveCard = (props) => {
  const {
    user,
    leave_type,
    user_image,
    start_date,
    end_date,
    days_remaining,
    reason,
    steps,
    profile_image,
    active_step,
    leave_status,
  } = props.request;

  const getValue = () => {
    if (dayjs(new Date()).isBefore(dayjs(start_date, "DD/MM/YYYY"))) {
      return 0;
    }
    const percent =
      (dayjs(new Date()).diff(dayjs(start_date, "DD/MM/YYYY"), "day") /
        dayjs(start_date, "DD/MM/YYYY").diff(
          dayjs(end_date, "DD/MM/YYYY"),
          "day"
        )) *
      100;
    return Math.abs(Math.round(percent));
  };

  const getDuration = () => {
    const weeks = Math.floor(
      dayjs(end_date, "DD/MM/YYYY").diff(
        dayjs(start_date, "DD/MM/YYYY"),
        "day"
      ) / 7
    );
    const days =
      dayjs(end_date, "DD/MM/YYYY").diff(
        dayjs(start_date, "DD/MM/YYYY"),
        "day"
      ) % 7;

    const dayVerb = days > 1 ? "Days" : "Day";
    const weekVerb = weeks > 1 ? "Weeks" : "Week";

    if (weeks === 0) {
      return `${days} ${dayVerb}`;
    }
    return `${weeks} ${weekVerb} ${days} ${dayVerb}`;
  };
  return (
    <Card>
      <CardHeader
        title={
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h6">{leave_type}</Typography>
            <Chip label={leave_status} />
          </Box>
        }
      />
      <CardHeader
        avatar={<Avatar src={user_image}></Avatar>}
        subheader={
          <Box display={"flex"} justifyContent={"start"} columnGap={5}>
            <Typography variant="body2">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="body2">2 days ago</Typography>
          </Box>
        }
      />

      <Stack
        display={"flex"}
        backgroundColor="aliceblue"
        rowGap={2}
        padding={2}
      >
        <Typography alignSelf={"center"}>{getDuration()} </Typography>
        <Typography alignSelf={"center"}>
          {dayjs(start_date, "DD/MM/YYYY").format("DD MMM YYYY")} -{" "}
          {dayjs(end_date, "DD/MM/YYYY").format("DD MMM YYYY")}
        </Typography>
        <LinearProgress
          value={getValue()}
          variant="determinate"
          sx={{ height: 8, borderRadius: 4 }}
        />
        <Typography alignSelf={"center"}>
          {days_remaining} Days remaining
        </Typography>
      </Stack>
      <CardContent>
        <Typography fontWeight={"bold"}>Reason</Typography>
        <Typography variant="body2">{reason}</Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={active_step}
            alternativeLabel
            sx={{ mt: 2 }}
            connector={<ColoredConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Avatar src={profile_image}></Avatar>
          <Button variant="contained">Approve</Button>
          <Button variant="contained" color="secondary">
            Reject
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const ColoredConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#3f51b5",
      borderTopWidth: 2,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#3f51b5",
      borderTopWidth: 2,
    },
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LeaveSettings = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Leave types" {...a11yProps(0)} />
        <Tab label="Approvers" {...a11yProps(1)} />
        <Tab label="Create Leave" {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <LeaveTypes />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Approvers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CreateLeave />
      </CustomTabPanel>
    </Stack>
  );
};

function Approvers() {
  const approvers = ["H.O.D", "Deputy", "Principal", "D.O.S"];
  return (
    <Stack rowGap={1}>
      <Autocomplete
        multiple
        fullWidth
        options={approvers}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Select Approvers" />
        )}
      />

      <TextField
        placeholder="Minimum number of approvers for a leave to be successfully approved"
        type="Number"
      />
      <TextField
        placeholder="Minimum number of approvers for a leave to be successfully rejected"
        type="Number"
      />
      <Autocomplete
        fullWidth
        options={approvers}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="With Veto over all"
          />
        )}
      />
      <Box display={"flex"} justifyContent={"end"}>
        <Button variant="contained">Save changes</Button>
      </Box>
    </Stack>
  );
}
function LeaveTypes() {
  const [checked, setChecked] = useState(false);
  const leaves = [
    "Maternity",
    "Paternity",
    "Sick Leave",
    "Emergency leave",
    "Annual leave",
    "Study leave",
    "Compassionate leave",
  ];
  return (
    <Card>
      <CardContent>
        <Box display={"flex"} columnGap={1}>
          <Stack width={"25%"}>
            <Typography variant="body1" fontWeight={"bold"}>
              Leave Types
            </Typography>
            <Divider />
            <Stack rowGap={1} maxHeight={200} overflow={"auto"}>
              {leaves
                ? leaves.map((leave) => {
                    return <ListItemButton key={leave}>{leave}</ListItemButton>;
                  })
                : null}
            </Stack>
          </Stack>
          <Divider flexItem orientation="vertical" />
          <Stack width={"75%"} rowGap={1}>
            <Typography variant="h6">Details</Typography>
            <Divider />
            <TextField label="Leave Type" />
            <TextField label="Maximum days per annum" />
            <FormControlLabel
              label="Paid"
              control={
                <Checkbox
                  checked={checked}
                  onClick={() => setChecked(!checked)}
                />
              }
            />
            <Box display={"flex"} justifyContent={"end"}>
              <Button variant="contained">Save changes</Button>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

function CreateLeave() {
  const [checked, setChecked] = useState(false);

  return (
    <Stack rowGap={1}>
      <TextField label="Leave Type" />
      <TextField label="Maximum days per annum" />
      <FormControlLabel
        label="Paid"
        control={
          <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
        }
      />
      <Box display={"flex"} justifyContent={"end"}>
        <Button variant="contained">Save changes</Button>
      </Box>
    </Stack>
  );
}

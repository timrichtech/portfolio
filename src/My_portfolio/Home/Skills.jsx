function Skills(props) {
  const { skill } = props;

  return (
    <Stack className="flex justify-center ">
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant="h4">My Skills</Typography>
      </Box>
      <Box className=" flex justify-center grid-cols-1 w-full">
        {skill.map((skill) => {
          return (
            <Grid
              key={skill.id}
              className=" grid grid-cols-2 w-full justify-center"
            >
              <TechCard skill={skill} />
            </Grid>
          );
        })}
      </Box>
    </Stack>
  );
}

function TechCard(props) {
  const { Description, Icon, Name } = props.skill;
  return (
    <Card className="w-full" elevation={10}>
      <CardHeader
        title={
          <Box
            display={"flex"}
            justifyContent={"center"}
            rowGap={1}
            flexDirection={"column"}
            alignItems={"center"}
            className="w-full"
          >
            <Avatar src={Icon} sx={{ width: 50, height: 50 }} />
            <Typography flexWrap={"wrap"}>{Name}</Typography>
          </Box>
        }
      />
      <CardContent>
        {/* <Box>
            <Typography>{Description}</Typography>
          </Box> */}
      </CardContent>
    </Card>
  );
}

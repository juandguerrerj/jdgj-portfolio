import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CodeIcon from "@mui/icons-material/Code";

const technologyItems = [
  {
    img: "/assets/images/experience/html5.png",
    title: "Html",
    author: "HTML5",
  },
  {
    img: "/assets/images/experience/css3.png",
    title: "Css",
    author: "CSS3",
  },
  {
    img: "/assets/images/experience/nodejs.png",
    title: "Node",
    author: "Node.js",
  },
  {
    img: "/assets/images/experience/react.png",
    title: "React",
    author: "React",
  },
  {
    img: "/assets/images/experience/nextjs.png",
    title: "Next Js",
    author: "Next.js",
  },
  {
    img: "/assets/images/experience/java.png",
    title: "Java",
    author: "Java",
  },
  {
    img: "/assets/images/experience/springboot.png",
    title: "Springboot",
    author: "Springboot",
  },
  {
    img: "/assets/images/experience/postgres.png",
    title: "Postgres",
    author: "Postgres",
  },
  {
    img: "/assets/images/experience/aws.png",
    title: "AWS",
    author: "AWS",
  },
];

const experienceItems = [
  {
    title: "Software Development",
    date: "Dic, 2022 - Present",
    achievements: [
      "Web application development using Dataflex programming technology.",
      "Development different Web Applications using React and NextJs.",
    ],
  },
  {
    title: "Software Development Engineer / Technical Analist, Codesa",
    date: "Sept, 2014 - Oct, 2015 / May, 2021 - April - 2022",
    achievements: [
      "Develop customer requirements and make proper documentation.",
      "Worked on a complete system migration from desktop app to web application.",
    ],
  },
  {
    title: "Sr Software Developer, OLSoftware",
    date: "Nov, 2020 - May, 2021",
    achievements: [
      "Worked on backend development implementing a new letters service for all clients.",
      "lidering two junior back-end developers",
    ],
  },
  {
    title: "Software Implemetation Engineer Sr, Carvajal",
    date: "Oct, 2015 - Nov, 2020",
    achievements: [
      "Implementar los servicios de gestión humana a las sociedades internas o externas que así lo requieran.",
      "Estabilizar el proceso de la generación de la nómina para las empresas del grupo Carvajal y para las empresas externas a quienes se les prestan los servicios de gestión humana.",
    ],
  },
];

const Experience = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ my: "4rem" }} id="experience">
        <Paper sx={{ pb: "1rem", pr: '1rem' }}>
          <Typography variant="h5" textTransform="uppercase" sx={{ pt: "1.5rem", pl: '1.5rem' }}>
            Experience
          </Typography>
          <Grid container spacing={2} sx={{ mt: "1rem", mb: "1rem", display: "flex", justifyContent: "center" }} columnSpacing={4}> 
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Grid container spacing={3} sx={{ mt: "0.5rem" }}>
                {technologyItems.map((item) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    lg={4}
                    key={item.img}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "divider",
                        width: "5rem",
                        height: "5rem",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundImage:
                          "linear-gradient(90deg, rgba(165, 215, 232, 0.42) 0%, rgba(255, 255, 255, 0) 100%)",
                        backgroundSize: "0 100%",
                        backgroundRepeat: "no-repeat",
                        transition: "0.4s",
                        "&:hover": {
                          backgroundSize: "100% 100%",
                        },
                      }}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </Box>
                    <Typography sx={{ display: "block" }}>
                      {item.author}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: "0px",
                  mt: "0px",
                }}
              >
                <List sx={{ width: "100%", ml: "3rem", pt: "0px", mt: "0px" }}>
                  {experienceItems.map((experience) => (
                    <ListItem
                      key={experience.title}
                      sx={{
                        mt: "0.5rem",
                        borderRadius: "20px",
                        background:
                          "linear-gradient(90deg, rgba(165, 215, 232, 0.42) 0%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    >
                      <ListItemIcon sx={{ color: "primary.main" }}>
                        <CodeIcon />
                      </ListItemIcon>
                      <Box>
                        <ListItemText
                          primary={
                            <Typography variant="h6">
                              {experience.title}
                            </Typography>
                          }
                          secondary={experience.date}
                        />
                        <ul className="ml-6 list-disc">
                          {experience.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Experience;

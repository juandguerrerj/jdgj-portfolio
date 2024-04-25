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
import image1 from "../../public/assets/images/software-developer-studying3.png";
import CodeIcon from "@mui/icons-material/Code";

type SkillsProps = {
  title: string;
  description: string;
};

const aboutSkills: SkillsProps[] = [
  {
    title: "Frontend Developer",
    description:
      "I am a front end developer with experience, developming Web applications mostly with React and lately with Nextjs",
  },
  {
    title: "Backend Developer",
    description:
      "I am a backend developer with many years of experience, in technologies such as Java, Javascript, PLSQL, working strongly with database engines and backend APIs",
  },
  {
    title: "Project Manager",
    description: "I am a project manager with experience lidering developers under Scrum methodology, also Scrum master certified, as well as Scrum Developer and Scrum Product Owner",
  },
];

function About() {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", my: "2rem" }} id="about">
      <Paper sx={{ width: "100%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Typography
              variant="h5"
              textTransform="uppercase"
              sx={{ p: "1.5rem" }}
            >
              About
            </Typography>
            <Box
              component="div"
              sx={{
                pb: "1.5rem",
                width: { xs: "70%", sm: "70%", md: "70%", lg: "100%" },
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={image1} alt="studying" className="w-2/4"></Image>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            lg={7}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="div"
              sx={{ display: "flex", justifyContent: "center", pt: "1.5rem" }}
            >
              <List sx={{ width: "100%" }}>
                {aboutSkills.map((skill) => (
                  <ListItem
                    key={skill.title}
                    sx={{
                      mt: '0.5rem',
                      borderRadius: "20px",
                      backgroundImage:
                        "linear-gradient(90deg, rgba(165, 215, 232, 0.42) 0%, rgba(255, 255, 255, 0) 100%)",
                      backgroundSize: '0 100%',
                      backgroundRepeat: 'no-repeat',
                      transition: '0.4s',
                      '&:hover': {
                        backgroundSize: '100% 100%'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <CodeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h6">{skill.title}</Typography>}
                      secondary={skill.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default About;

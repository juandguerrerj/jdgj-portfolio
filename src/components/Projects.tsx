import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Divider
} from "@mui/material";


const projects = [
  {
    title: "Project A",
    description:
      "This is a project made to learn the latest languages by bulding an app.",
    technologies: ["React", "Express", "Node"],
  },
  {
    title: "Project B",
    description:
      "This is a project made to learn the latest languages by bulding an app.",
    technologies: ["React", "Express", "Node"],
  },
  {
    title: "Project C",
    description:
      "This is a project made to learn the latest languages by bulding an app.",
    technologies: ["React", "Express", "Node"],
  },
];

const Projects = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: "5rem" }} id="projects">
      <Typography variant="h5" textTransform="uppercase">
        Projects
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Grid container>
        {projects.map((project) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={project.title} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 345, mt: "3rem" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/assets/images/projects/software-developer-studying2.jpg"
                title="page"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: "0.5rem" }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      label={tech}
                      variant="outlined"
                      key={tech}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small">Demo</Button>
                <Button size="small">Source</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ display: "flex" }}>
      <Grid
        container
        spacing={2}
        sx={{ mt: { xs: "2rem", sm: "2rem", md: "5rem" } }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className="w-max p-1 ml-6">
            Welcome to my Portfolio
          </div>
          <Box component="div" sx={{ width: "100%", p: "1.5rem" }}>
            <Typography variant="h2">
              Hi! I&apos;m Juan, Web developer
            </Typography>

            <p className="mt-4">
              I am a qualified and professional software developer with 7 years
              of experience in back end and front end development, and project
              leadership. Strong creative and analytical skills. Excellent at
              teamworking with an eye for detail.
            </p>
            <Button variant="outlined" sx={{ mt: "1rem" }}>
              <Link href="/CV-JDGJ-Engineer.pdf" target="_blank">
                Let&apos;s Connect
              </Link>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="juan"
              src="/assets/images/software-developer-homepage.png"
              width={800}
              height={800}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

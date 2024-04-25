'use client';

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { useTheme } from "@mui/material";
import Link from "next/link";

const socialContacts = [
  {
    icon: <MailOutline />,
    text: "juandguerreroj@gmail.com",
    link: 'mailto:juandguerreroj@gmail.com'
  },
  {
    icon: <LinkedIn />,
    text: "linkedin.com/juan",
    link: 'https://www.linkedin.com/in/juandguerreroj/'
  },
  {
    icon: <GitHub />,
    text: "github.com/juan",
    link: 'https://github.com/juandguerrerj'
  },
];

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box component="footer" sx={{ mt: "5rem", backgroundColor: theme.palette.mode === 'dark' ? 'divider' : teal[50] }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Box>
              <Typography variant="h4">Contact</Typography>
              <Typography variant="h6">Feel free to reach out!</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <List>
              {socialContacts.map((contact) => (
                <ListItem
                  key={contact.text}
                  sx={{
                    mt: "0.5rem",
                  }}
                >
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    {contact.icon}
                  </ListItemIcon>
                  <Link href={contact.link} target="_blank" rel="noopener noreferrer">
                    <ListItemText primary={contact.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

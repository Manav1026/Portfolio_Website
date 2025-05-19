import {
  Box,
  Typography,
  Container,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ height: 2, backgroundColor: "#ffffff" }}></Box>
      <Box sx={{ backgroundColor: "#121212", pt: 6, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5} ml={3}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Aladin', cursive",
                  fontSize: { xs: 36, md: 52 },
                  color: "#f7f7f7",
                }}>
                Manav Dhami
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#f7f7f7", mt: 1, fontSize: "1.1rem" }}>
                <MuiLink
                  href="/"
                  underline="none"
                  sx={{ color: "#f7f7f7", mx: 1 }}>
                  Home
                </MuiLink>
                •
                <MuiLink
                  href="/projects"
                  underline="none"
                  sx={{ color: "#f7f7f7", mx: 1 }}>
                  Projects
                </MuiLink>
                •
                <MuiLink
                  href="/experience"
                  underline="none"
                  sx={{ color: "#f7f7f7", mx: 1 }}>
                  Experience
                </MuiLink>
                •
                <MuiLink
                  href="achievements"
                  underline="none"
                  sx={{ color: "#f7f7f7", mx: 1 }}>
                  Achievements
                </MuiLink>
                •
                <MuiLink
                  href="/education"
                  underline="none"
                  sx={{ color: "#f7f7f7", mx: 1 }}>
                  Education
                </MuiLink>
              </Typography>
            </Grid>

            <Grid item xs={12} md={1}>
              <Box
                sx={{
                  height: "100%",
                  width: 1,
                  backgroundColor: "#f7f7f7",
                  mx: "auto",
                }}></Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  ml: 10,
                }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    px: 3,
                    py: 1.2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    flexWrap: "wrap",
                  }}>
                  <MuiLink
                    href="https://www.linkedin.com/in/manav-dhami-6929381ab/"
                    target="_blank"
                    rel="noopener">
                    <FaLinkedin />
                  </MuiLink>
                  <MuiLink
                    href="https://github.com/Manav1026"
                    target="_blank"
                    rel="noopener">
                    <FaGithub />
                  </MuiLink>
                  <MuiLink
                    href="mailto:dhamimanav7@gmail.com"
                    target="_blank"
                    rel="noopener">
                    <BiLogoGmail />
                  </MuiLink>
                  <MuiLink
                    href="https://www.instagram.com/being_manav_1021/"
                    target="_blank"
                    rel="noopener">
                    <FaInstagram />
                  </MuiLink>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#e5e7eb", maxWidth: 480 }}>
                  Passionate full-stack developer with experience in modern web
                  technologies and a keen interest in creating impactful digital
                  experiences.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;

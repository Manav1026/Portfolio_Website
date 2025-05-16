import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Box, Button, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Head>
        <title>Manav Dhami | Portfolio</title>
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#060606",
          color: "white",
        }}>
        <Header />
        <Container
          maxWidth="lg"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            py: 10,
          }}>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "2rem" }}>
            <Box
              component="img"
              src="/images/manav.jpeg"
              alt="Manav Dhami"
              sx={{
                width: { xs: 120, sm: 160, md: 180 },
                height: { xs: 120, sm: 160, md: 180 },
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #38bdf8",
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              }}
            />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{
                fontFamily: "'Aladin', cursive",
                fontSize: { xs: 40, md: 64 },
                mb: 2,
              }}>
              CODE.
              <strong>CREATE.</strong>
              SCALE.
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 720,
                color: "#d1d5db",
                mb: 5,
                fontSize: { xs: 16, md: 20 },
              }}>
              Passionate full-stack developer with experience in modern web
              technologies and a keen interest in creating impactful digital
              experiences.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}>
            <Link href="/projects" passHref>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  px: 4,
                  "&:hover": { backgroundColor: "#cbd5e1" },
                }}>
                View Projects
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  fontWeight: "bold",
                  px: 4,
                  "&:hover": { backgroundColor: "white", color: "black" },
                }}>
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Home;

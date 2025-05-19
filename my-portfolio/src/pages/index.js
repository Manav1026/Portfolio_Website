import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Box, Button, Typography, Container, Grid } from "@mui/material";

const skills = [
  { name: "UX Design", color: "#facc15" },
  { name: "Product Development", color: "#22c55e" },
  { name: "UI Design", color: "#ef4444" },
  { name: "Cloud Infrastructure", color: "#a855f7" },
  { name: "Data Science", color: "#ec4899" },
  { name: "Data Engineering", color: "#6366f1" },
  { name: "Project Management", color: "#38bdf8" },
  { name: "Software Architecture", color: "#f97316" },
  { name: "React.js", color: "#61dafb" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "Firebase", color: "#ffa000" },
  { name: "Redis", color: "#d32f2f" },
  { name: "Supabase", color: "#3ecf8e" },
  { name: "MongoDB", color: "#10b981" },
  { name: "Node.js", color: "#8cc84b" },
  { name: "Java", color: "#f44336" },
  { name: "Next.js", color: "#1976d280" },
];

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
              CODE. <strong>CREATE.</strong> SCALE.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}>
            {/* <Typography
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
            </Typography> */}
          </motion.div>

          <motion.div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
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
          </motion.div>
        </Container>

        <Box sx={{ py: 10, px: 3, background: "#000000" }}>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{
              fontSize: { xs: 24, md: 36 },
              mb: 4,
              fontFamily: "'Poppins', sans-serif",
            }}>
            DESIGNING BETTER PRODUCTS, <br />
            ONE <span style={{ color: "#a855f7" }}>SKILL</span> AT A TIME.
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            maxWidth="lg"
            sx={{ mx: "auto" }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: skill.color }}
                  transition={{ duration: 0.3 }}>
                  <Box
                    sx={{
                      padding: "24px",
                      paddingRight: "53px",
                      background: "#111111",
                      color: "white",
                      borderRadius: "24px",
                      p: 3,
                      height: "100%",
                      position: "relative",
                      boxShadow: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textAlign: "center",
                    }}>
                    {skill.name}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "48px",
                        height: "48px",
                        backgroundColor: skill.color,
                        borderBottomLeftRadius: "100%",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Home;

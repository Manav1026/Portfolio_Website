import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const achievements = [
  {
    title:
      "Heart Disease: Automatic Prediction from the Numerical and Categorical Features by Machine Learning Methods",
    org: "IEEE Xplore",
    description:
      "Published a research paper on 'A Smart Healthcare Model Using Hybrid Deep Learning Algorithm' in 2023.",
    link: "https://ieeexplore.ieee.org/document/10126448",
    color: "#1e40af",
  },
  {
    title: "CodeKaze Finalist",
    org: "Coding Ninjas",
    description: "Achieved top ranks in CodeKaze competitive coding contest.",
    date: "April 2022",
    image: "/images/CodeKaze.jpg",
    color: "#10b981",
  },
  {
    title: "NPTEL: Programming in Java",
    org: "NPTEL (IIT)",
    description:
      "Completed Programming in Java certification with strong proficiency in object-oriented programming.",
    date: "October 2021",
    image: "/images/nptel.jpeg",
    color: "#f59e0b",
  },
];

const Achievements = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
        color: "white",
        minHeight: "100vh",
      }}>
      <Header />
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{ mb: 6, mt: 4, fontFamily: "'Aladin', cursive" }}>
          Achievements
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {achievements.map((achieve, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <Box
                  sx={{
                    background: "#111827",
                    border: `2px solid ${achieve.color}`,
                    borderRadius: 4,
                    width: "50rem",
                    p: 4,
                    height: "100%",
                    boxShadow: 6,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {achieve.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#93c5fd", mb: 1 }}>
                      {achieve.org}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#e5e7eb", mb: 2 }}>
                      {achieve.description}
                    </Typography>
                  </Box>
                  {(achieve.link || achieve.image) && (
                    <Button
                      variant="outlined"
                      size="small"
                      href={achieve.link || achieve.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: achieve.color,
                        color: achieve.color,
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: achieve.color,
                          color: "#0f172a",
                        },
                      }}>
                      View
                    </Button>
                  )}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Achievements;

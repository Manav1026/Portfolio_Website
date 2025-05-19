import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Stevens Institute of Technology",
    degree: "Master of Science in Computer Science",
    location: "Hoboken, NJ, USA",
    gpa: "GPA: 3.91/4.00",
    period: "Jan 2024 – Dec 2025",
    color: "#3b82f6",
    gradient: "linear-gradient(to right, #1e3a8a, #3b82f6)",
    logo: "/images/stevens.png",
  },
  {
    institution: "Pandit Deendayal Energy University",
    degree: "Bachelor of Science in ICT",
    location: "Gandhinagar, Gujarat, India",
    gpa: "GPA: 3.8/4.00",
    period: "July 2019 – May 2023",
    color: "#10b981",
    gradient: "linear-gradient(to right, #065f46, #10b981)",
    logo: "/images/pdeu.jpeg",
  },
];

const Education = () => {
  return (
    <Box sx={{ background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{ mb: 8, fontFamily: "'Aladin', cursive" }}>
          🎓 Education
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {educationData.map((edu, index) => (
            <Grid item xs={12} md={10} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    height: { xs: "auto", md: 240 },
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "#ffffff",
                    boxShadow: 6,
                    width: "100%",
                  }}>
                  <Box
                    sx={{
                      background: edu.gradient,
                      width: { xs: "100%", md: "40%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 4,
                      py: 2,
                    }}>
                    <Box
                      component="img"
                      src={edu.logo}
                      alt={edu.institution}
                      sx={{
                        height: { xs: 100, md: 120 },
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      width: "377px",
                    }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: "darkslateblue" }}>
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: edu.color, fontWeight: 600 }}>
                      {edu.institution}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "darkslateblue" }}>
                      {edu.location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "darkslateblue" }}>
                      {edu.period}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "#dc2626" }}>
                      {edu.gpa}
                    </Typography>
                  </Box>
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

export default Education;

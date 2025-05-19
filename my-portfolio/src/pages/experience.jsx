import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Educloud Infotech",
    role: "Software Developer Intern",
    location: "Pune, Maharashtra",
    duration: "Feb 2023 - July 2023",
    points: [
      "Developed and optimized IBDP Planner – a full-stack scheduling platform for IB students.",
      "Used Spring Boot, Hibernate, HTML, SCSS, and jQuery for seamless UI and efficient backend.",
      "Implemented analytics dashboard and dynamic scheduling tools for educators and students.",
    ],
    image: "/images/educloud.jpeg",
    link: "https://www.educloud.in/",
  },
  {
    company: "TalentServe",
    role: "Full Stack Developer & General Management",
    location: "Mumbai, Maharashtra",
    duration: "May 2022 - Oct 2022",
    points: [
      "Led development of Advisory Portal using JavaScript and SQL.",
      "Improved user engagement and streamlined real-time session tracking.",
      "Delivered key insights and data management tools for advisory services.",
    ],
    image: "/images/talentserve.jpeg",
    link: "https://www.talentserve.org/",
  },
];

const Experience = () => {
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
          gutterBottom
          sx={{ mb: 6, mt: 4, fontFamily: "'Aladin', cursive" }}>
          🧠 My Experience
        </Typography>

        {experienceData.map((exp, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 10 }}
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"}>
            {exp.image && (
              <Grid item xs={12} md={5}>
                <motion.img
                  src={exp.image}
                  alt={exp.company}
                  style={{
                    width: "191px",
                    borderRadius: "12px",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={exp.image ? 7 : 10}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {exp.role}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#93c5fd", mb: 1 }}>
                  {exp.company}
                </Typography>
                <Typography variant="caption" sx={{ color: "#9ca3af", mb: 2 }}>
                  {exp.location} • {exp.duration}
                </Typography>
                <ul style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      style={{ marginBottom: "0.5rem", lineHeight: "1.6" }}>
                      <Typography variant="body2">{point}</Typography>
                    </li>
                  ))}
                </ul>
                {exp.link && (
                  <Button
                    variant="outlined"
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: "#60a5fa",
                      color: "#60a5fa",
                      "&:hover": {
                        backgroundColor: "#60a5fa",
                        color: "#0f172a",
                      },
                    }}>
                    Learn More
                  </Button>
                )}
              </motion.div>
            </Grid>
          </Grid>
        ))}
      </Container>
      <Footer />
    </Box>
  );
};

export default Experience;

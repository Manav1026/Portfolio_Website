import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography, Container, Grid, Box, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projectData = [
    {
      title: "SurveySync",
      description: "A feedback survey platform with interactive analytics.",
      link: "https://github.com/Manav1026/SurveySync",
      tags: ["Node.js", "MongoDB", "Handlebars"],
      summary:
        "Designed to help organizations gather and analyze feedback efficiently, providing real-time insights.",
    },
    {
      title: "HR Nexus",
      description:
        "A centralized HR platform integrating payroll and recruitment.",
      tags: ["Java", "JSP", "DynamoDB"],
      summary:
        "Streamlines HR processes, improving efficiency in managing employee data and recruitment workflows.",
    },
    {
      title: "EventEase",
      description:
        "A rental-based marketplace for event-related products including lighting, sound, and decor.",
      link: "https://github.com/Manav1026/EventEase",
      tags: ["React.js", "Firebase", "Redis", "Tailwind"],
      summary:
        "Connects event planners with vendors, facilitating easy rentals of event equipment and services.",
    },
    {
      title: "SalesBot",
      description:
        "A voice-based AI sales interview system to simulate real-time candidate evaluations.",
      link: "https://github.com/Manav1026/SalesBot",
      tags: ["Next.js", "Vapi", "Supabase", "Tailwind"],
      summary:
        "Utilizes voice recognition and AI to conduct simulated sales interviews, providing feedback to candidates.",
    },
    {
      title: "OS Virtual Lab",
      description:
        "A Python-based simulator for core Operating Systems concepts like scheduling and memory management.",
      link: "https://github.com/Manav1026/os-virtual-lab",
      tags: ["Python", "Tkinter"],
      summary:
        "Helps students understand operating system concepts through interactive simulations and visualizations.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #0f172a, #312e81)",
        minHeight: "100vh",
        color: "white",
      }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom>
            🌟 My Projects
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#cbd5e1", mb: 6 }}>
            Elegant full-stack builds that blend innovation with usability.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}>
                <Box
                  sx={{
                    background: "linear-gradient(to right, #1e293b, #334155)",
                    border: "1px solid #475569",
                    borderRadius: 4,
                    boxShadow: 6,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    mx: "auto",
                    width: "100%",
                    maxWidth: 340,
                  }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#e2e8f0", mb: 2 }}>
                      {project.summary}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#475569",
                            color: "#f1f5f9",
                            borderRadius: 2,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Button
                    fullWidth
                    variant="outlined"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FiGithub />}
                    sx={{
                      borderColor: "#60a5fa",
                      color: "#60a5fa",
                      fontWeight: "bold",
                      mt: "auto",
                      "&:hover": {
                        backgroundColor: "#60a5fa",
                        color: "#0f172a",
                      },
                    }}>
                    View on GitHub
                  </Button>
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

export default Projects;

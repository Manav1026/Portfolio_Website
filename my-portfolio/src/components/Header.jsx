import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Header = () => {
  const router = useRouter();
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Experience", path: "/experience" },
    { title: "Achievements", path: "/achievements" },
    { title: "Education", path: "/education" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#121212",
        boxShadow: "0 2px 12px rgba(0,0,0,0.6)",
        zIndex: 1300,
        px: { xs: 2, md: 10 },
      }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Aladin', cursive",
            color: "#f7f7f7",
            fontSize: { xs: 28, sm: 34, md: 42 },
          }}>
          Manav Dhami
        </Typography>
        <Box sx={{ display: "flex", gap: { xs: 1.5, md: 3 } }}>
          {navLinks.map((link, index) => {
            const isActive = router.pathname === link.path;
            return (
              <Link key={index} href={link.path} passHref>
                <Button
                  sx={{
                    color: isActive ? "#60a5fa" : "#f1f5f9",
                    fontWeight: isActive ? 700 : 500,
                    borderBottom: isActive ? "2px solid #60a5fa" : "none",
                    borderRadius: 0,
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 1,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      color: "#60a5fa",
                    },
                  }}>
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

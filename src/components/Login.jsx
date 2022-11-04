import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  return (
    <Container sx={{ margin: "20rem auto" }}>
      <Grid sx={{ margin: "auto" }} container spacing={2}>
        <Box>
          <Grid sx={{ margin: "auto" }} item xs={12} sm={6} md={4}>
            <TextField
              margin="dense"
              id="email"
              label="Email"
              error={error}
              helperText={error && "Incorrect email format"}
              sx={{ mr: 1, ml: 1, mt: 4, width: "430px" }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              error={error}
              helperText={error && "Incorrect password format"}
              sx={{ mr: 1, ml: 1, mt: 4, width: "430px" }}
            />

            <Button
              variant="contained"
              sx={{ mr: 1, ml: 1, mt: 3, backgroundColor: "#d02f4a" }}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default Login;

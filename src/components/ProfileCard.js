import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Divider, Avatar, Grid, Tooltip, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import USA from "./images/icons/united-states.png";
import LeoAvatar from "./images/icons/bayc_barca.jpg";
import "./ProfileCard.css";

const card = (
  <React.Fragment>
    <CardContent sx={{ minHeight: 245 }}>
      <Grid container spacing={25.75}>
        <Tooltip title="Glendale, CA" placement="right-end">
          <Grid item>
            <Avatar
              alt=""
              src={LeoAvatar}
              sx={{ width: 70, height: 70, borderRadius: 2 }}
              variant="rounded"
            />
            <img
              src={USA}
              alt=""
              style={{ height: 25, width: 25 }}
              id="card__country"
            />
          </Grid>
        </Tooltip>
        <Grid item>
          <IconButton
            href="https://github.com/leobabakhanian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "#f0f2f5" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        component="div"
        sx={{ color: "#f0f2f5", fontWeight: 700 }}
        id="card__name"
      >
        Leo Babakhanian
      </Typography>
      <Typography variant="body2" id="card__contact">
        <a href="mailto:babakhanianleo@gmail.com">babakhanianleo@gmail.com</a>
      </Typography>
      <Divider id="divider" sx={{ color: "#f0f2f5" }} />
      <Typography variant="body2" id="card__bio">
        I love football ⚽ and FC Barcelona! I'm also obssessed with anything
        crypto including blockchain technology.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export function ProfileCard() {
  return (
    <Container fluid id="profile">
      <Row className="justify-content-center">
        <Col xs="auto">
          <Box sx={{ maxWidth: 350 }}>
            <Card
              variant="outlined"
              style={{
                borderColor: "#282424",
                background: "#121212",
                color: "#f0f2f5",
                borderRadius: 7,
              }}
            >
              {card}
            </Card>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}

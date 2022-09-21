import { Container, Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar.js";
import "./styles/style.css"

import bgimage from "../../src/components/images/back2.png"
import SlideShow from "./SlideShow.js";
import { motion } from "framer-motion";
import Cards from "./Cards.js";


const PlayGround = () => {
  return (
    <>

      <Grid className="top-div" style={{ backgroundImage: `url(${bgimage})`, position: "relative" }}>
        <NavBar />
      </Grid>

      <Grid container sx={{ padding: "50px" }}>
        <Grid xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <SlideShow />

        </Grid>
        <Grid xs={5} sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
          <Grid>
            <motion.h1
              whileHover={{ scale: 1.1 }}
            >
              <h1>WHAT IS CAREER SOLUTION ?</h1>
            </motion.h1>

            <h2>Innovative Solutions To Grow Your Creative Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem distinctio nemo, soluta
              eligendi doloremque voluptatem beatae et, expedita consequatur esse minima, harum nulla mollitia repellendus
              quas. Architecto voluptatem officiis in iure harum fuga excepturi! Ad incidunt consequuntur placeat iste
              delectus cum. Aut nostrum corporis consequuntur dignissimos molestias. Delectus, nostrum.</p>
          </Grid>
        </Grid>
      </Grid>


      <Container>
        <Cards />
      </Container>



    </>
  )
}

export default PlayGround;
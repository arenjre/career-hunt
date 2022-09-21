import { Container, Grid } from '@mui/material';
import React, { Component } from 'react'
import calc from "./images/calc.png"
import headphone from "./images/headphonelogo.png"
import techh from "./images/techh.png"
import bulb from "./images/bulb.png"
import legal from "./images/legal.png"
import smile from "./images/smile.png"


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Cards = () => {
  return (
    <>

      <Container>

        <Grid container>
          <Grid xs={4} sx={{ padding: "22px 12px", height: "180px" }}>
            <Grid container>
              <Grid xs={3}>
                <img src={`${calc}?`} alt="calc" loading="lazy" style={{ height: "60px", width: "45px" }} />
              </Grid>
              <Grid xs={9}>
                <h5>Finance & Accounting</h5>
                <h6>Accounting and accounts payable clerks, senior accountants, controllers, and more</h6>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4} sx={{ padding: "22px 12px", height: "180px" }}>
            <Grid container>
              <Grid xs={3}>
                <img src={`${bulb}?`} alt="calc" loading="lazy" style={{ height: "65px", width: "45px" }} />
              </Grid>
              <Grid xs={9}>
                <h5>Marketing & Creative</h5>
                <h6>Graphic and web designers, marketing managers, copywriters, and more</h6>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4} sx={{ padding: "22px 12px", height: "180px" }}>
            <Grid container>
              <Grid xs={3}>
                <img src={`${techh}?`} alt="calc" loading="lazy" style={{ height: "60px", width: "60px" }} />
              </Grid>
              <Grid xs={9}>
                <h5>Technology</h5>
                <h6>Desktop support and help desk analysts, applications architects, network administrators, and more</h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>



        <Grid container>

          <Grid xs={4} sx={{ padding: "22px 12px", height: "180px" }}>
            <Grid container>
              <Grid xs={3}>
                <img src={`${headphone}?`} alt="calc" loading="lazy" style={{ height: "45px", width: "55px" }} />
              </Grid>
              <Grid xs={9}>
                <h5>Administrative & Customer Support</h5>
                <h6>Customer service reps, receptionists, administrative assistants, office clerks, and more</h6>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4} sx={{ padding: "22px 12px", height: "180px" }}>
            <Grid container>
              <Grid xs={3}>
                <img src={`${legal}?`} alt="calc" loading="lazy" style={{ height: "50px", width: "65px" }} />
              </Grid>
              <Grid xs={9}>
                <h5>Legal</h5>
                <h6>Legal secretaries, paralegals, attorneys, file and office clerks, and more</h6>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4} sx={{ padding: "22px 12px", height: "180px" }}>
            <Grid container>
              <Grid xs={3}>
                <img src={`${legal}?`} alt="calc" loading="lazy" style={{ height: "50px", width: "65px" }} />
              </Grid>
              <Grid xs={9}>
                <h5>Legal</h5>
                <h6>Legal secretaries, paralegals, attorneys, file and office clerks, and more</h6>
              </Grid>
            </Grid>
          </Grid>


        </Grid>


      </Container>

      <Container>
        <Grid container>
          <Grid xs={6}>
            <img src={`${smile}?`} alt="calc" loading="lazy" style={{ width: "100%", height: "95%" }} />
          </Grid>
          <Grid xs={6} sx={{ padding: "0 20px" }}>
            <Card sx={{ minWidth: 275, height: 160, padding:"10px 0" }}>
              <CardContent>
                <h2 gutterBottom style={{color:"#58a4dc"}}>
                  Hire remote talent
                </h2>
                
                <p style={{fontSize:"18px", fontWeight:"600", margin:"auto", marginLeft:"3px"}}>
                  Millions of remote candidates. Secure virtual workspaces.
                </p>
                <Button size="small">Learn More</Button>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275, height: 160, padding:"10px 0", marginTop: "28px" }}>
              <CardContent>
                <h2 gutterBottom style={{color:"#58a4dc"}}>
                  Hire remote talent
                </h2>
                
                <p style={{fontSize:"18px", fontWeight:"600", margin:"auto",}}>
                  Millions of remote candidates. Secure virtual workspaces.
                </p>
                <Button size="small">Learn More</Button>
              </CardContent>
            </Card>


          </Grid>
        </Grid>


      </Container>

    </>
  )
}

export default Cards;
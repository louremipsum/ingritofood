import {
  BackgroundImage,
  createStyles,
  Stack,
  Text,
  Button,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import React from "react";
// import {ReactComponent as Background} from '../assets/layered-waves-haikei.svg'
import L from "../assets/layered-waves-haikei.png";
import Receipe from "../Receipi/Receipe";
import Logo from "./Logo";
import Search from "./Search";

function Bg() {
  const { classes } = useStyles();
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 60 });
  return (
    <>
      <BackgroundImage src={L} className={classes.main}>
        <Stack align={"center"}>
          <Logo />
          <Text p={"md"} fw="400" size={"md"} c="dimmed" italic>
            Search from the Left Box and check all the ingridients which you
            have and press the cart button to proceed
          </Text>
          <Search />
          <Button
            color={"blue"}
            size="md"
            onClick={() => scrollIntoView({ alignment: "center" })}
          >
            Get Receipes
          </Button>
        </Stack>
      </BackgroundImage>
      <Receipe {...targetRef} />
      {/* <Background className={classes.main}/> */}
    </>
  );
}

const useStyles = createStyles(() => ({
  main: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
}));

export default Bg;

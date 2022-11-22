import { BackgroundImage, createStyles, Stack,Text } from '@mantine/core'
import React from 'react'
// import {ReactComponent as Background} from '../assets/layered-waves-haikei.svg'
import L from '../assets/layered-waves-haikei.png'
import Logo from './Logo'
import Search from './Search'



function Bg() {
 const {classes} = useStyles();
  return (
    <>
    <BackgroundImage src={L} className={classes.main}>
        <Stack align={"center"}>
            <Logo/>
            <Text p={"md"} fw="400" size={"md"} c="dimmed" italic>Search from the Left Box and check all the ingridients which you have and press the cart button to proceed</Text>
            <Search/>
        </Stack>
    </BackgroundImage >
    {/* <Background className={classes.main}/> */}
    </>
  )
}

const useStyles = createStyles(()=>({
   main:{  
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   height: "100vh"
   }
}));

export default Bg
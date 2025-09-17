import { AppBar, MenuList, Toolbar, styled } from "@mui/material"

const NavBar = () => {
   const StyledToolbar = styled(Toolbar)(()=> ({
       display: "flex",
       justifyContent: "space-evenly",

    }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
        <MenuList>About</MenuList>
        <MenuList>Skills</MenuList>
        <MenuList>Projects</MenuList>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar

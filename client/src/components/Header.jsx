import { Link } from 'react-router-dom'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const SearchIconWrapper = styled('div')(() => ({
  padding: '0 12px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#475569',
  '&:hover': {
    backgroundColor: '#526176',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#f8fafc',
  '& .MuiInputBase-input': {
    padding: '10px 12px 10px 42px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            <ConnectWithoutContactIcon
              sx={{
                fontSize: 36,
                mr: 1,
                color: 'primary.light',
              }}
            />
            SocialMedia
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            <ConnectWithoutContactIcon
              sx={{
                fontSize: 36,
                mr: 1,
                color: 'primary.light',
              }}
            />
            SocialMedia
          </Typography>
           {/* Desktop Search */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          {/* Mobile Search */}
          <IconButton
            aria-label="search"
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: 48,
              height: 48,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '50%',
              color: 'text.primary',
              mr: 1,
            }}
          >
            <SearchIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  px: 2,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',

                  '&:hover': {
                     bgcolor: 'background.paper',
                     color: 'primary.light',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {/* Dark mode button */}
          <IconButton aria-label="Toggle dark mode" 
            sx={{ width: 48, height: 48, border: '1px solid', 
            borderColor: 'divider', color: 'text.primary', 
            borderRadius: '50%', mr: 2, }} > 
            <DarkModeIcon /> 
          </IconButton>
            {/* Log In button and its menu */}
            <Box sx={{ flexGrow: 0 }}> 
                <Button
                    onClick={handleOpenUserMenu}
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      px: 3,
                      py: 1.2,
                      borderRadius: '12px',

                      background:
                        'linear-gradient(#1f2937, #1f2937) padding-box, linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899) border-box',

                      border: '2px solid transparent',

                      transition: 'all 0.3s ease',

                      '&:hover': {
                        boxShadow: '0 0 16px rgba(139,92,246,0.7)',
                        background:
                          'linear-gradient(#312e81, #312e81) padding-box, linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6) border-box',
                      },
                    }}
                  >
                  Log In 
                 </Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header

import { Link, useLocation } from 'react-router-dom'
import { useCurrentUser, useAuthActions } from '../stores/auth.store'
import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Typography,
  Box,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ArticleIcon from '@mui/icons-material/Article'
import PeopleIcon from '@mui/icons-material/People'
import CommentIcon from '@mui/icons-material/Comment'
import LogoutIcon from '@mui/icons-material/Logout'

const Sidebar = () => {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const tab = urlParams.get('tab') || 'profile'
    const currentUser = useCurrentUser()
    const { logout } = useAuthActions()

   
    const sidebarItemStyles = {
        borderRadius: 2,
        mb: 0.5,

        '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'white',
        },

        '&.Mui-selected:hover': {
            bgcolor: 'primary.dark',
        },

        '&:hover': {
            bgcolor: 'action.hover',
        },
        }
  return (
    <Paper
      elevation={2}
      sx={{
        width: 260,
        minHeight: '100vh',
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
      }}
    >
      {/* User section */}
      <Box
        sx={{
          p: 3,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          fontWeight={700}
        >
          @{currentUser?.username}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {currentUser?.email}
        </Typography>
      </Box>

      <List sx={{ p: 1 }}>
        {currentUser?.isAdmin && (
          <ListItemButton
            component={Link}
            to="/dashboard?tab=dash"
            selected={tab === 'dash'}
            sx={sidebarItemStyles}
          >
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>
        )}

        <ListItemButton
          component={Link}
          to="/dashboard?tab=profile"
          selected={tab === 'profile'}
          sx={sidebarItemStyles}
        >
          <ListItemIcon>
            <PersonIcon color="primary" />
          </ListItemIcon>

          <ListItemText primary="Profile" />

          <Chip
            size="small"
            label={
              currentUser?.isAdmin
                ? 'Admin'
                : 'User'
            }
            color="primary"
            variant="outlined"
          />
        </ListItemButton>

        {currentUser?.isAdmin && (
          <>
            <ListItemButton
              component={Link}
              to="/dashboard?tab=posts"
              selected={tab === 'posts'}
              sx={sidebarItemStyles}
            >
              <ListItemIcon>
                <ArticleIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary="Posts" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/dashboard?tab=users"
              selected={tab === 'users'}
              sx={sidebarItemStyles}
            >
              <ListItemIcon>
                <PeopleIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary="Users" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/dashboard?tab=comments"
              selected={tab === 'comments'}
              sx={sidebarItemStyles}
            >
              <ListItemIcon>
                <CommentIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary="Comments" />
            </ListItemButton>
          </>
        )}

        <Divider sx={{ my: 2 }} />

        <ListItemButton
          onClick={logout}
          sx={{
            borderRadius: 2,
            color: 'error.main',

            '&:hover': {
              bgcolor: 'error.main',
              color: 'white',
            },
          }}
        >
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Paper>
  )
}

export default Sidebar

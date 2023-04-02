import {Avatar, Drawer, List, Stack, Toolbar} from '@mui/material';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    return (
        <Drawer
        variant='permanent'
        >
            <List disablePadding>
                <Toolbar>
                    <Stack></Stack>
                </Toolbar>
                <SidebarItem/>
                <SidebarItem/>
                <SidebarItem/>
            </List>
        </Drawer>
    )
}

export default Sidebar;
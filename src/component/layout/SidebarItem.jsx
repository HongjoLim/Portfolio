import { ListItemButton, ListItemIcon } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const SidebarItem = ({item}) => {
    return (
        <ListItemButton>
            <ListItemIcon>
                <FormatListBulletedOutlinedIcon />
            </ListItemIcon>
        </ListItemButton>
    );
}

export default SidebarItem;
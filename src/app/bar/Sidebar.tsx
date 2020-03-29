import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Sidebar: React.FC = () => (
    <AppBar position="static">
        <Toolbar>
            <IconButton>
                <AccountCircle />
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default Sidebar;
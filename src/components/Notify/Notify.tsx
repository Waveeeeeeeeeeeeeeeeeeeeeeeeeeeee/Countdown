import React from 'react';
import { Snackbar, Alert } from '@mui/material';

type SnackbarProps = {
    open: boolean;
    onClose: () => void;
    message: string;
};

export const Notify: React.FC<SnackbarProps> = ({ open, onClose, message }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity='warning' sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

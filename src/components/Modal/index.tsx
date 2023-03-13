import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
    open: any;
    updateOpen: any;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, updateOpen }) => {
    return (
        <div>
        <Modal
            open={open.open}
            onClose={()=> {updateOpen(false)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Company: {open.company}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Address: {open.address.city}, {open.address.street}, {open.address.suite}
            </Typography>
            </Box>
        </Modal>
        </div>
    );
};

export default BasicModal;
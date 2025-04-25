import { Modal, Box } from '@mui/material';
import { Options } from '../common/Options.jsx';

const enhancedModalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { 
      xs: '95%', 
      sm: '85%', 
      md: '80%',
      lg: '75%' 
    },
    bgcolor: 'transparent',
    boxShadow: 24,
    borderRadius: '2px',
    maxHeight: '90vh',
    overflowY: 'auto',
    border: 'none',
    outline: 'none',
    p: 0,
};
  
export const ModalOptions = ({ onClose, open }) => {
    return (
      <Modal 
        open={open} 
        onClose={onClose}
        aria-labelledby="modal-options"
        aria-describedby="modal-visa-options"
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 20, 0.75)',
            backdropFilter: 'blur(5px)'
          }
        }}
      >
        <Box sx={enhancedModalStyles}>
          <Options onClose={onClose} />
        </Box>
      </Modal>
    );
  };


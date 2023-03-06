import { Box, Modal } from '@mui/material';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ViewModal(props: { children?: any, open: boolean, closeHandler: () => void }) {


    return (
        <Modal
            open={props.open}
            onClose={props.closeHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                {props.children}
            </Box>

        </Modal>
    );
}

export { ViewModal }
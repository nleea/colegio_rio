import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';

import { AvatarUi } from './AvatarUi';
import { TableUi } from './TableUi';

import { resize } from '@/service/hooks/size/resize';
import { Grid } from '@mui/material';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
};


export function CardUi() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { media } = resize();

    const breackPoint: any = {
        "MOBILE": {
            "min": 12,
            "max": 12
        },
        "TABLET": {
            "min": 12,
            "max": 12
        },
        "TABLET_LANDSCAPE": {
            "min": 12,
            "max": 12
        },
        "DESKTOP": {
            "min": 3,
            "max": 9
        },
    }

    useEffect(() => {
        console.log(media)

    }, [media])

    return (
        <>
            <Card sx={{ minWidth: media === 'MOBILE' ? '90%' : media === 'TABLET' ? '90%' : media === 'TABLET_LANDSCAPE' ? "90%" : media === 'DESKTOP' ? '30%' : '10%', m: 2 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total 5 usuarios
                    </Typography>
                    <AvatarUi />
                </CardContent>
                <CardActions>
                    <Typography variant="body2" color="text.secondary">
                        Administrador
                        <br />
                    </Typography>
                </CardActions>
                <CardActions>
                    <Button size="small" onClick={handleOpen} >Editar rol</Button>
                </CardActions>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    component="form"
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center", my: 2 }}>
                        Editar rol
                    </Typography>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" sx={{ width: '100%' }} />
                    <Typography id="modal-modal-description" sx={{ my: 2 }}>
                        Editar permisos
                    </Typography>

                    <TableUi />
                    <Box
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <Button variant="contained" color="success" sx={{ my: 3, mx: 3,}}>
                            Guardar
                        </Button>
                        <Button variant="contained" color="inherit" sx={{ my: 3, mx: 3,}} onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
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
import CircularProgress from '@mui/material/CircularProgress';

import { resize } from '@/service/hooks/size/resize';
import { GetFetch } from '@/service/hooks/modules/getData';



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


export function CardUi({ dataRol }: { dataRol: any }) {

    const { name, id, users, _count } = dataRol;


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { fetch, data } = GetFetch<any>();

    const getData = async () => {
        await fetch(`/roles/edit/${id}`)
        // console.log(data)
    }

    const handleModal = () => {
        handleOpen();
        getData();
    }



    // console.log(data)
    const { media } = resize();



    return (
        <>
            <Card sx={{ minWidth: media === 'MOBILE' ? '90%' : media === 'TABLET' ? '90%' : media === 'TABLET_LANDSCAPE' ? "90%" : media === 'DESKTOP' ? '30%' : '10%', m: 2 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total {_count.users} usuarios
                    </Typography>
                    <AvatarUi />
                </CardContent>
                <CardActions>
                    <Typography variant="body2" color="text.secondary">
                        {name}
                    </Typography>
                </CardActions>
                <CardActions>
                    <Button size="small" onClick={handleModal} >Editar rol</Button>
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

                    {
                        data ?
                            <TableUi allPermisos={data.permissions as any} hasPermisos={data.rol[0].role_has_permissions as any} />
                            :
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CircularProgress />
                            </Box>
                    }
                    <Box
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <Button variant="contained" color="success" sx={{ my: 3, mx: 3, }}>
                            Guardar
                        </Button>
                        <Button variant="contained" color="inherit" sx={{ my: 3, mx: 3, }} onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
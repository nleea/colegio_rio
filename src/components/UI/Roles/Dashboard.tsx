import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { CardUi } from './CardUi';

import { resize } from "../../../service/hooks/size/resize";
import { GetFetch } from '@/service/hooks/modules/getData';
import { useEffect } from 'react';
// import { resize } from "@/service/hooks/size/resize";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export function Dashboard() {
    const { media } = resize();


    const { fetch, data } = GetFetch<any>();

    useEffect(() => {
        fetch('/roles')
    }, [])
   

    return (
        <Container maxWidth="xl" >
            <Box  >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item  sx={{ display: "flex", flexWrap: "wrap", }} >
                            {
                                data?.map( (rol:any) => <CardUi key={rol.id} dataRol={ rol } /> )
                            }
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}


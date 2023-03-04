import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { CardUi } from './CardUi';

import { resize } from "../../../service/hooks/size/resize";
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

    return (
        <Container maxWidth="xl" >
            <Box  >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item  sx={{ display: "flex", flexWrap: "wrap", }} >
                            <CardUi />
                            <CardUi />
                            <CardUi />
                            <CardUi />
                            <CardUi />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}


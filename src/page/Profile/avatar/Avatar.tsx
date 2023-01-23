import { useRef, useState } from "react";
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import { Avatar, Box, Stack, Chip, FormLabel, FormControl, styled } from "@mui/material";
import { Typographic } from "@/components/UI/Typographics/Typographics";
import { PhotoCamera } from '@mui/icons-material';


const BoxItem = styled(Box)`
    position: absolute;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.65);
    width: 60%;
    height: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    :hover {
        border-radius: 50%;
        opacity: 1;
    }
`;

export const AvatarProfile = () => {
    const [avatar, Setavatar] = useState("https://mantisdashboard.io/static/media/default.3f28940394505c39652f.png")
    const input = useRef(null);
    const InputFileHandller = (e: any) => Setavatar(URL.createObjectURL(e.target.files[0]));

    return (
        <Stack spacing={1}>
            <FormLabel filled={true} htmlFor="change-avatar" style={{ display: "flex", justifyContent: "center" }} >
                <ProgressPolymorphys as={Avatar} sx={{ width: "60%", height: "70%", borderRadius: "50%", border: "1.5px dashed rgb(24, 144, 255)" }} variant="circular" sizes='3rem' src={avatar} />
                <BoxItem onClick={() => (input.current as any).click()}>
                    <PhotoCamera color='info' fontSize='large' />
                </BoxItem>
            </FormLabel>
            <FormControl style={{ display: 'none' }} >
                <input type='file' ref={input} onChange={InputFileHandller} />
            </FormControl>
            <Typographic variant='h6' >
                Nombre del usuario
            </Typographic>
            <Chip label="Active" style={{ padding: "10px", margin: "10px" }} color="success" />
        </Stack>
    )
}
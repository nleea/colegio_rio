import { Stack } from "@mui/material";
import { Typographic } from "@/components/UI/Typographics/Typographics";
import { LinkItem } from "@/components/UI/Link/Link";
import { Lock as LockIcon, Person2Outlined, Settings } from '@mui/icons-material';

export const RouterProfile = () => {

    const classess = {
        color: "rgb(24, 144, 255)",
        backgroundColor: "rgba(24, 144, 255, 0.12)",
    }

    return (
        <Stack spacing={1} >
            <LinkItem to="/user/profile/personal" style={({ isActive }) => isActive ? classess : undefined}  >
                <Stack direction="row" spacing={1}>
                    <Person2Outlined />
                    <Typographic >
                        Information
                    </Typographic>
                </Stack>
            </LinkItem>
            <LinkItem to="/user/profile/change/password" style={({ isActive }) => isActive ? classess : undefined} >
                <Stack spacing={1} direction="row" >
                    <LockIcon />
                    <Typographic>
                        Change Password
                    </Typographic>
                </Stack>
            </LinkItem>
            <LinkItem to="/user/profile/settings" style={({ isActive }) => isActive ? classess : undefined}>
                <Stack spacing={1} direction="row" >
                    <Settings />
                    <Typographic>
                        Settings
                    </Typographic>
                </Stack>
            </LinkItem>
        </Stack>
    )
}
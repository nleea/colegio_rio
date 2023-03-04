import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


export function AvatarUi() {
  const [avatar, setAvatar] = useState('https://mantisdashboard.io/static/media/default.3f28940394505c39652f.png')

  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={avatar} />
      <Avatar alt="Travis Howard" src={avatar} />
      <Avatar alt="Cindy Baker" src={avatar} />
      <Avatar alt="Agnes Walker" src={avatar} />
      <Avatar alt="Trevor Henderson" src={avatar} />
    </AvatarGroup>
  );
}
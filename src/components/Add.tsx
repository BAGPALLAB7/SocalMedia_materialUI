import { Avatar, Box, Button, ButtonGroup, Fab, FormControl, IconButton, Input, InputAdornment, InputLabel, Modal, Stack, TextField, Tooltip, Typography, makeStyles } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HelpCenter } from '@mui/icons-material';
import styled from '@emotion/styled';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CakeIcon from '@mui/icons-material/Cake';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EventIcon from '@mui/icons-material/Event';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadious: '50px',
    boxShadow: 24,
    p: 4,
};
const UserBox = styled(Box)({

    display: 'flex',
    gap: 10,
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',

})
const Add = () => {
    const [open, setopen] = useState(false);
    const handleClose = () => {
        setopen(false)
    }

    const handleClick = () => {
        setopen(true)
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box borderRadius={4} sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center' mb={5}>
                        Create new post
                    </Typography>
                    {/* <UserBox>
                        <Avatar sx={{ width: "30px", height: "30px", }} alt="User Icon" src="data:image/jpeg;base64,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" />
                        <Typography variant='body1' component={'h3'}>Pallab Bag</Typography>
                    </UserBox>
                    <TextField id="standard-basic" variant="standard" multiline fullWidth
                        maxRows={4} label="Write what's on your mind.." /> */}
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Write what's on your mind..
                        </InputLabel>
                        <Input
                            multiline
                            fullWidth

                            maxRows={6}
                            rows={3}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Avatar sx={{ width: "30px", height: "30px", }} alt="User Icon" src="data:image/jpeg;base64,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" />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Stack direction={'row'} mt={2} mb={2}>
                        <IconButton><ImageIcon color='success'></ImageIcon></IconButton>

                        <IconButton><VideocamIcon color='primary' /></IconButton>
                        <IconButton><SentimentVerySatisfiedIcon color='error' /></IconButton>
                        <IconButton><CakeIcon color='secondary' /></IconButton>
                        <IconButton><GroupAddIcon color='info' /></IconButton>

                    </Stack>
                    <ButtonGroup sx={{ display: 'flex', width: '100%', mt: 5 }} variant='contained'>
                        <Button sx={{ flex: 1 }} onClick={handleClose}>Post</Button>
                        <Button><SaveAsIcon /></Button>
                        <Button><EventIcon /></Button>
                    </ButtonGroup>
                </Box>
            </Modal>
            <Tooltip onClick={handleClick} title="New Post" sx={{ position: "fixed", bottom: 20, left: 20, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Fab color='primary' aria-label='add'>
                    <AddCircleIcon />

                </Fab>
            </Tooltip>
        </>
    )
}

export default Add

import { Box, Button, TextField, Typography, Link } from "@mui/material";
import useUserStore from "../store/userStore";
import DevBugLogo from '../assets/devbug-logo.png';

function RegisterScreen() {
        
    const { username, 
        email, 
        password, 
        setUsername, 
        setEmail, 
        setPassword } = useUserStore();

    return (
        <Box sx={{width: '100%', height: '100vh', bgcolor: '#F8F8F8', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', gap: 2, bgcolor: 'white', px: 5, py: 4, borderRadius: '10px'}}>
                {/* Login container */}
                <Box sx={{mb: 2}} component="img" width={200} src={DevBugLogo}></Box>

                <Box sx={{width: '100%'}}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>Sign up</Typography>
                    <Typography variant="caption">Please fill up all the input below to continue.</Typography>
                </Box>

                {/* Text inputs */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2, mb: 2}}>
                    <TextField value={username} onChange={(e) => setUsername(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} InputProps={{ style: { fontSize: '12px' } }} fullWidth variant="outlined" label="Create a username" type="text" size="small"></TextField>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)}  InputLabelProps={{ style: { fontSize: '12px' } }} InputProps={{ style: { fontSize: '12px' } }} fullWidth variant="outlined" label="Email" type="email" size="small"></TextField>
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} InputProps={{ style: { fontSize: '12px' } }} fullWidth variant="outlined" label="Password" type="password" size="small"></TextField>
                </Box>

                
                <Button variant="contained" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, bgcolor: '#1B1B1B', py: 1, textTransform: 'none', ':hover': {bgcolor: 'black'}, width: '100%'}}>
                    <Typography style={{fontSize: '12px'}}>Create account</Typography>
                </Button>
                
                <Typography variant="caption">Already have an account? <Link href="/" sx={{textDecoration: 'none', color: 'black', fontWeight: 'bold', cursor:'pointer', ':hover': { textDecoration: 'underline' }}}>Login</Link></Typography>
            </Box>
        </Box>
    )
}

export default RegisterScreen;
"use client";
import { SignUp } from '@clerk/clerk-react';
import { AppBar, Container, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function SignUpPage() {
    return (
        <Container maxWidth="100vw">
            <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Flashcard SaaS
                    </Typography>
                    <Button color="inherit">
                        <Link href="/sign-in" passHref>
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-up" passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h4">
                    Sign Up
                </Typography>
                <SignUp signUpUrl="/sign-up" />
            </Box>
        </Container>
    );
}

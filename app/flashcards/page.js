"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CircularProgress,
  Box,
} from "@mui/material";

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcardCollections, setFlashcardCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchFlashcardCollections() {
      if (!user) return;
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const userDocRef = doc(collection(db, "users"), user.id);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const collections = userDocSnap.data().flashcards || [];
          setFlashcardCollections(collections);
        } else {
          await setDoc(userDocRef, { flashcards: [] });
        }
      } catch (error) {
        setErrorMessage("An error occurred while fetching flashcard collections");
      }
      setIsLoading(false);
    }
    fetchFlashcardCollections();
  }, [user]);

  if (!isLoaded || !isSignedIn) return null;

  const handleCardClick = (collectionId) => {
    router.push(`/flashcard?id=${collectionId}`);
  };

  return (
    <Container maxWidth="100vw">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <CircularProgress />
          </Box>
        ) : errorMessage ? (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        ) : flashcardCollections.length === 0 ? (
          <Typography variant="body1">No flashcard collections available</Typography>
        ) : (
          flashcardCollections.map((collection, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea onClick={() => handleCardClick(collection.name)}>
                  <CardContent>
                    <Typography variant="h6">{collection.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}



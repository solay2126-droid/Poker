import React from "react";
import { TextField, Paper, Typography } from "@mui/material";

type Props = {
  playerName: string;
  setPlayerName: (v: string) => void;
};

export default function PlayerPanel({ playerName, setPlayerName }: Props) {
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Nickname</Typography>
      <TextField
        fullWidth
        placeholder="Scegli un nickname"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        sx={{ mt: 1 }}
      />
    </Paper>
  );
}

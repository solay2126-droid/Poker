  import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import CasinoIcon from "@mui/icons-material/Casino";

const CASINO_WALLET = "aDZoHMBRyTzShZC9dwQ2HgFwhSjUE2xWLEDypKoa2Mcp3";
const SOLANA_NETWORK = "https://api.devnet.solana.com";

export default function PokerTable() {
  const { publicKey, sendTransaction, connected } = useWallet();
  const [bet, setBet] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState("");
  const [lastWinner, setLastWinner] = useState<string | null>(null);

  const handleBet = async () => {
    if (!publicKey || !connected || bet <= 0) {
      setResult("Collega il wallet e inserisci una puntata valida");
      return;
    }

    const connection = new Connection(SOLANA_NETWORK);
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(CASINO_WALLET),
        lamports: bet * 1e9 // 1 SOL = 1e9 lamports
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection);
      setResult(`Transazione inviata! Signature: ${signature}`);

      // Demo: determina vincitore casuale
      const isWinner = Math.random() > 0.6;
      if (isWinner) {
        setLastWinner(playerName || publicKey?.toBase58() || "Tu");
        setResult(`Hai VINTO! (simulazione, payout manuale)`);
      } else {
        setLastWinner(null);
        setResult(`Hai perso questa mano! Ritenta!`);
      }
    } catch (e: any) {
      setResult(`Errore transazione: ${e.message || e}`);
    }
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Box display="flex" alignItems="center" gap={2}>
        <CasinoIcon fontSize="large" color="primary" />
        <Typography variant="h5">Tavolo Poker</Typography>
      </Box>
      <TextField
        label="Nickname"
        fullWidth
        placeholder="Scegli un nickname"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Puntata (SOL)"
        type="number"
        fullWidth
        value={bet}
        onChange={(e) => setBet(Number(e.target.value))}
        sx={{ mt: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleBet}
        sx={{ mt: 2 }}
        disabled={!connected || bet <= 0}
      >
        Punta e Gioca
      </Button>
      {result && (
        <Typography sx={{ mt: 2 }} color={lastWinner ? "success.main" : "error"}>
          {result}
        </Typography>
      )}
      {lastWinner && (
        <Typography sx={{ mt: 2 }} color="success.main">
          Vincitore: {lastWinner}
        </Typography>
      )}
      <Typography sx={{ mt: 3, fontSize: 12, color: "text.secondary" }}>
        Fee e perdite inviate al wallet del casino.<br />
        Vincite simulate: il payout automatico è possibile con smart contract Solana.<br />
        Demo su <b>devnet</b>.
      </Typography>
    </Paper>
  );
}      

import React from "react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
  GlowWalletAdapter,
  BraveWalletAdapter,
  LedgerWalletAdapter,
  ExodusWalletAdapter,
  SlopeWalletAdapter,
  MathWalletAdapter
} from "@solana/wallet-adapter-wallets";
import PokerTable from "./components/PokerTable";
import { CssBaseline, Container, Typography } from "@mui/material";

require("@solana/wallet-adapter-react-ui/styles.css");

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
  new BackpackWalletAdapter(),
  new GlowWalletAdapter(),
  new BraveWalletAdapter(),
  new LedgerWalletAdapter(),
  new ExodusWalletAdapter(),
  new SlopeWalletAdapter(),
  new MathWalletAdapter()
];

function App() {
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Solana Poker Casino
          </Typography>
          <WalletMultiButton />
          <PokerTable />
        </Container>
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default App;

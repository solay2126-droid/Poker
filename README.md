# Solana Poker Casino Game (Frontend Only)

Poker su Solana con fee e perdite inviate al wallet: `aDZoHMBRyTzShZC9dwQ2HgFwhSjUE2xWLEDypKoa2Mcp3`

## Funzionalità
- Poker demo (simulazione vincite)
- Fee e perdite inviate direttamente al wallet del casino
- Connessione wallet utente (Phantom/Solflare)
- Material UI avanzato
- Nessuna chiave privata nel codice

## Avvio locale

```bash
npm install
npm start
```

## Deploy su Netlify

- Carica la cartella `build` su Netlify.
- Nessuna configurazione backend richiesta.

## Sicurezza

- Nessuna chiave privata lato frontend.
- Tutte le transazioni sono firmate dai wallet utente.

## Estensioni possibili

- Payout automatico tramite smart contract Solana (Rust)
- Più tavoli, leaderboard, cronologia mani
- Backend per statistiche/matchmaking (opzionale)

## Note

- Il payout automatico ai vincitori richiede uno smart contract Solana custom.
- La demo attuale invia fee/perdite al wallet indicato e simula le vincite.

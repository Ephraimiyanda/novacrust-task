import { Currency, WalletOption } from "../types";
export const CURRENCIES: Currency[] = [
  {
    id: "ngn",
    code: "NGN",
    name: "Nigerian Naira",
    icon: "/images/nigeria.svg",
    type: "fiat",
  },
];

export const CRYPTOCURRENCIES: Currency[] = [
  {
    id: "eth",
    code: "ETH",
    name: "Ethereum",
    icon: "/images/eth.svg",
    type: "crypto",
  },
  {
    id: "usdt_celo",
    code: "CELO",
    name: "Tether (Celo)",
    icon: "/images/celo.svg",
    type: "crypto",
  },
  {
    id: "usdt_ton",
    code: "TON",
    name: "Tether (TON)",
    icon: "/images/ton.svg",
    type: "crypto",
  },
  {
    id: "usdt_bnb",
    code: "BNB",
    name: "Tether (BNB)",
    icon: "/images/bnb.svg",
    type: "crypto",
  },
];

export const WALLETS: WalletOption[] = [
  { id: "metamask", name: "Metamask", icon: "/images/metamask.svg" },
  { id: "rainbow", name: "Rainbow", icon: "/images/rainbow.svg" },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "/images/wallet-connect.svg",
  },
  {
    id: "other",
    name: "Other Crypto Wallets",
    icon: "/images/wallet.svg",
    description: "(Binance, Coinbase, Bybit etc)",
  },
];

import FeedIcon from "@mui/icons-material/Feed";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import TokenIcon from "@mui/icons-material/Token";
import InfoIcon from "@mui/icons-material/Info";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const variant = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "80vh",
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    height: 0,
    // opacity: 0.6,
  },
};

export const NavbarData = [
  {
    text: "TOKEN",
    link: "/token",
    icon: TokenIcon,
  },
  {
    text: "PROTOCOLS",
    link: "/protocols",
    icon: FeedIcon,
    subList: [
      {
        text: "Network protocol",
        link: "/#",
      },
      {
        text: "Listing protocol",
        link: "/#",
      },
    ],
  },
  {
    text: "ABOUT US",
    link: "/about-us",
    icon: InfoIcon,
    subList: [
      { text: "About us", link: "/#" },
      { text: "White paper", link: "/#" },
    ],
  },
  {
    text: "FEATURES",
    link: "/#features",
    icon: FeaturedPlayListIcon,
    subList: [
      { text: "Features", link: "/#" },
      { text: "Use case", link: "/#" },
    ],
  },
  {
    text: "WALLET",
    link: "/wallet",
    icon: AccountBalanceWalletIcon,
    subList: [
      { text: "Wallet", link: "/#" },
      { text: "White paper", link: "/#" },
    ],
  },
];

export const FeaturesData = [
  {
    title: "Send & Receive Tokens",
    text: "You can send and receive all kinds of tokens with ease from your smartphone with veegor into your wallet with low transaction fees.",
    url: "#",
    url_label: "COMING SOON!",
    icon: "/icons/api.png",
  },
  {
    title: "Wallet API & Payment Gateway",
    text: "You can send and receive all kinds of tokens with ease from your smartphone with veegor into your wallet with low transaction fees.",
    url: "#",
    url_label: "COMING SOON!",
    icon: "/icons/payment.png",
  },
  {
    title: "Token Custom Features",
    text: "Our Token Customization gives you the ability to add features to your tokens that can make your token stand out from the rest.",
    url: "#",
    url_label: "LEarn More",
    icon: "/icons/airdrop.png",
  },
  {
    title: "Token Creation",
    text: "Veegor gives you the ability to create an unlimited supply of fungible and non-fungible tokens like Ecr20, Games, and NFT Tokens right from your smartphone for yourself or business, community, or projects.",
    url: "#",
    url_label: "Create Token",
    icon: "/icons/erc20.png",
  },
  {
    title: "Market Listing & Distribution",
    text: "You can list and distribute your token on our marketplace. You can access the best new tokens before they list on other exchanges on our marketplace.",
    url: "#",
    url_label: "Start Trading",
    icon: "/icons/mart.png",
  },
  {
    title: "Multi Wallets Creation",
    text: "Securely Store and manage digital currencies with ease in the smart and beautiful mobile-App cryptocurrency wallets. ",
    url: "#",
    url_label: "COMING SOON!",
    icon: "/icons/nft.png",
  },
];

//Veegor Multi Wallet Feature is for users who want to have different wallets based on different needs, purpose, and business to store, manage their different tokens and monitor their portfolio from the Tip of their Finger.
// Features include Minting, Mining, Burnable, Snapshots, Pausable, Permits, Vote, Dao Smart Contract, Dapp Smart Contract, Token Staking, and so much more.
// Distribute your tokens to your community and stakeholders using the Veegor Platform.
// Create Unlimited Wallets for your different purposes.
// without the need for coders, or cryptocurrency knowledge.

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Paper } from "@mui/material";

export default function UseCases() {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Box mb={3} textAlign={{ xs: "center", sm: "left" }}>
        <Typography variant={"h4"} fontWeight={800} mb={2} color={"#5c6b91"}>
          Use Cases
        </Typography>
        <Typography variant={"subtitle2"} fontWeight={500}>
          Blockchain technology’s core characteristics include decentralization,
          transparency, and automation. These elements can be applied to various
          sectors, creating a multitude of use cases. Here are some blockchain
          use cases for Veegor Blockchain Technology.
        </Typography>
      </Box>
      {cases.map((cas, index) => (
        <Paper key={index} elevation={3} sx={{ mb: 2, p: 1.5 }}>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              bgcolor: "#f3f5fd",
              boxShadow: 0,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                fontWeight={600}
                variant={"subtitle2"}
                textTransform={"uppercase"}
              >
                {cas.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={"subtitle2"}>{cas.text}</Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </div>
  );
}

const cases = [
  {
    title: "For Developers",
    text:
      "Imagine how WordPress solves the problem of most developers and Individuals building excellent websites with or without learning or knowing how to code. " +
      "Now, with Veegor, you can create and launch Blockchain Projects with ease with or without learning how to code or write smart contracts. All you need is to plug " +
      "into our tools and you are one step in helping businesses launch their projects on the Blockchain. We have everything you need to begin building and Launching your" +
      " Next Blockchain Project.",
  },
  {
    title: "For Businesses",
    text:
      "Let us help you put your Businesses on Web 3 and the Blockchain. No Hassle, Easy Setup. Blockchain can help businesses run more efficiently by providing a" +
      " secure ledger for all transactions. The benefits of putting your business on the Blockchain cannot be over-emphasized, from effective data management to" +
      " decentralized security and improved transparency, with various applications across various sectors. No matter the type of project you want to Launch on the" +
      " Blockchain, Veegor got you covered.",
  },
  {
    title: "For Institute",
    text:
      "Veegor can help institutions create their own token and deploy on the blockchain to provide easy transactions of School Fees, to Minting of Certificates, to" +
      " Record keeping, Databases Management, Transcripts issuance. Blockchain can be used as a decentralized platform for institutions to share information about courses" +
      " and programs.",
  },
  {
    title: "For Non-Profit Organizations",
    text:
      "Blockchain can provide nonprofit organizations with the opportunity to account for their activities, track the movements of funds from the donor to the" +
      " beneficiary. When funds just seem to ‘disappear’ employing blockchain for nonprofits can help to hold these organizations accountable for how exactly funds" +
      " are being used. As every transaction is intricately recorded, any misuse of funds becomes obvious. The same use case applies to churches, where offerings, tithes," +
      " and other forms of donations can be tracked on the blockchain. This kind of transparency goes a long way to fighting against corruption and misuse of funds.",
  },
  {
    title: "For Government And Public Sectors",
    text:
      "A blockchain-based digital government can protect data, streamline processes, and reduce fraud, waste, and abuse while simultaneously increasing trust and " +
      "accountability and enable the following advantages: Reduced potential for corruption abuse, Increased trust and transparency in government. The distributed ledger " +
      "format can be leveraged to support an array of government and public sector applications, secure storage of government including digital currency/payments, land titles" +
      " registration, resource distribution and management, identity management," +
      " procurement and supply chain traceability, health care, corporate registration, taxation, Electronic Voting, Grant Disbursements, and legal entities management.",
  },
  {
    title: "For Individuals",
    text:
      "When you download the Veegor Wallet App, you get access to hold, send, receive, and manage different tokens from different networks. You can also buy, swap," +
      " and sell tokens from verified Blockchain Projects listed on the Veegor DEX with ease. You can also Mint, Buy and Sell NFT Assets on the Veegor Marketplace and" +
      " Metashop either using your own Token or using ours and so much more",
  },
];

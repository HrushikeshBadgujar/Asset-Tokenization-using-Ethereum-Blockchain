import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { AiOutlinePieChart,AiOutlineSetting,AiOutlineFieldTime,AiOutlineDatabase,AiOutlineControl,AiOutlineFund } from "react-icons/ai";
import { red,green,blue, } from '@mui/material/colors';
export default function MediaCard() {
  return (
      <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} className="benefits-cards-section">
                <Card sx={{ bgcolor: green[500] }} className="benefits-cards">
                <AiOutlinePieChart size="2em"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Fractionalization
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    For assets that traditionally have large upfront capital requirements, tokenization lowers the barriers to entry for investment by
            enabling interests in the asset to be more readily divided across a wider pool of investors, democratizing access to the asset. 
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} className="benefits-cards-section">
                <Card sx={{ bgcolor: blue[500] }}  className="benefits-cards">
                <AiOutlineSetting size="2em"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Operational Efficiency
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Smart contracts are programmable actions on the blockchain that facilitate the automation of processes such as compliance
            checks, investor whitelisting, and post-issuance matters including dividend distribution
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} className="benefits-cards-section">
                <Card sx={{ bgcolor: red[500] }} className="benefits-cards">
                    <AiOutlineDatabase size="2em"/>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Data Transparency
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Blockchain as a distributed ledger technology is known for its immutability and resistance to cyber-attacks, as data is distributed
            across a network of participating nodes as opposed to a single centralized database. While transaction information is made
            trackable and visible on blockchain, data anonymity of blockchain transactions are preserved by cryptographic hashes.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} className="benefits-cards-section">
                <Card sx={{ bgcolor: red[500] }} className="benefits-cards">
                <AiOutlineFieldTime size="2em"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Reduced Settlement Time
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Transactions in tokenized products can be settled almost instantly, unlike the days or weeks that it can sometimes take to settle
            traditional finance transactions
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={12} md={4} className="benefits-cards-section" >
                <Card sx={{ bgcolor: blue[500] }} className="benefits-cards">
                <AiOutlineControl size="2em"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Flexibility
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Fractionalization enables flexible portfolio construction and diversification. Operational efficiency and reduced settlement time allows faster transfer of investment interests; and data transparency brings
updated information for investment analysis
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} className="benefits-cards-section">
                <Card sx={{ bgcolor: green[500] }} className="benefits-cards">
                <AiOutlineFund size="2em"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Liquidity
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Tokenization enables liquidity by enabling the secure transfer of shares between investors,Tokenization enables liquidity by enabling the secure transfer of shares between investors
                    </Typography>
                </CardContent>
                </Card>
            </Grid>

          </Grid>
   
    
   
  
   
    
    </div>
  );
}

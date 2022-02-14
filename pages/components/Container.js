import Card from './Card'
import Middle from './Middle'
import RightBar from './RightBar'
import React, { useState, useEffect } from 'react'
import { useMoralis } from "react-moralis";

const Container = () => {
let [walletBalance, setBalance] = useState(0);
let [marketingBalance, setMarketing] = useState(0);
let [buyBackBalance, setBuyBack] = useState(0);
let [walletBnb, setWalletBnb] = useState(0);
let [walletAddress,setWalletAddress] = useState(0);

const { authenticate, isAuthenticated, user ,logout } = useMoralis();
const Web3 = require("web3");
const avaxProvider ="https://api.avax.network/ext/bc/C/rpc"
const bnbProvider="https://bsc-dataseed.binance.org/"
const Web3Client = new Web3(new Web3.providers.HttpProvider(avaxProvider));
const Web3BNBClient = new Web3(new Web3.providers.HttpProvider(bnbProvider));
const minABI=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"OwnerEnableTrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"OwnerSwitchAntiBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"OwnerSwitchSwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"ignoreLimits","type":"bool"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"OwnerTriggerSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"reflection","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"liquidity","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"marketing","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"buyback","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"dev","type":"uint8"}],"name":"OwnerUpdateBuyTaxes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldBuybackWallet","type":"address"},{"indexed":false,"internalType":"address","name":"buyback","type":"address"}],"name":"OwnerUpdateBuybackWallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldDevWallet","type":"address"},{"indexed":false,"internalType":"address","name":"developer","type":"address"}],"name":"OwnerUpdateDevWallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxWalletSize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"OwnerUpdateLimits","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldMarketingWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newMarketingWallet","type":"address"}],"name":"OwnerUpdateMarketingWallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"reflection","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"liquidity","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"marketing","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"buyback","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"dev","type":"uint8"}],"name":"OwnerUpdateSellTaxes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"swapthreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxswap","type":"uint256"}],"name":"OwnerUpdateSwapSettings","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"transferFee","type":"uint256"}],"name":"OwnerUpdateTransferFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWalletSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_pancakePairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_pancakeRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reflectFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_secondaryTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_transferFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerEnableTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"ownerSwitchAntiBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"ownerSwitchSwapAndLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"ignoreLimits","type":"bool"}],"name":"ownerTriggerSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"reflection","type":"uint8"},{"internalType":"uint8","name":"liquidity","type":"uint8"},{"internalType":"uint8","name":"marketing","type":"uint8"},{"internalType":"uint8","name":"buyback","type":"uint8"},{"internalType":"uint8","name":"dev","type":"uint8"}],"name":"ownerUpdateBuyTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"buyback","type":"address"}],"name":"ownerUpdateBuybackWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"developer","type":"address"}],"name":"ownerUpdateDevWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"},{"internalType":"uint256","name":"maxWalletSize","type":"uint256"}],"name":"ownerUpdateLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"marketing","type":"address"}],"name":"ownerUpdateMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"reflection","type":"uint8"},{"internalType":"uint8","name":"liquidity","type":"uint8"},{"internalType":"uint8","name":"marketing","type":"uint8"},{"internalType":"uint8","name":"buyback","type":"uint8"},{"internalType":"uint8","name":"dev","type":"uint8"}],"name":"ownerUpdateSellTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"swapthreshold","type":"uint256"},{"internalType":"uint256","name":"maxswap","type":"uint256"}],"name":"ownerUpdateSwapSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"transferFee","type":"uint256"}],"name":"ownerUpdateTransferFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ownerWithdrawStuckBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sameBlockActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];


const tokenAddress = "0xd14BeB305BdD49646f3BB022B18fE0cB77989Fb4";
const rewardToken = "0x959b88966fC5B261dF8359961357d34F4ee27b4a";
const buyBackAddress="0xFd45537E9354716d4d6a431dfBfc49B4772c26e7";
const marketingAddress="0xd97E8C6D346D1262F011E85918ef80A1DDE28928";

const tokenContract = new Web3Client.eth.Contract(minABI, tokenAddress);


function updateWallets(){
    
    var buybbalance = Web3BNBClient.eth.getBalance(buyBackAddress, function   (error, wei) {
        if (!error) {
            setBuyBack(Web3BNBClient.utils.fromWei(wei, 'ether'))
            
        }
      });
      
  
var markbalance = Web3BNBClient.eth.getBalance(marketingAddress, function   (error, wei) {
    if (!error) {
        setMarketing(Web3BNBClient.utils.fromWei(wei, 'ether'))
        
    }

  });



  setTimeout(updateWallets, 20000);}
  updateWallets();

  

/*********************/
useEffect(() => {
    async function fetchMyAPI() {
        if (isAuthenticated) {
            setWalletAddress(user.attributes.ethAddress);
            var waletBnbBalance = Web3BNBClient.eth.getBalance(user.attributes.ethAddress, function   (error, wei) {
                if (!error) {
                    setWalletBnb(Web3BNBClient.utils.fromWei(wei, 'ether'))
                    
                }
                
            
              });

            let walletB = await tokenContract.methods.balanceOf(user.attributes.ethAddress).call();
            let walletBalance = Web3Client.utils.fromWei(walletB);
            setBalance(walletBalance*10**9);    
           
            



        
          }
   

/*
        let marketingB = await bnbContract.methods.balanceOf(marketingAddress).call();
        let marketingBalance = Web3Client.utils.fromWei(marketingB);
        marketingBalance)
        
     

        let buyBackB = await bnbContract.methods.balanceOf(buyBackAddress).call();
        let buyBackBalance = Web3Client.utils.fromWei(buyBackB);
        setBuyBack(buyBackBalance)
*/
        

    }

    fetchMyAPI()
  }, [isAuthenticated])


    return (
        <div className=" bg-gray h-full " > 
          
            
            <div className="flex   p-4 space-x-3">
                <Card title="BALANCE" balance={walletBalance+" Fren"} icon={0} />
                <Card title="MARKETING WALLET" balance={marketingBalance+" BNB"} link='' icon={1} />
                <Card title="BUYBACK WALLET" balance={buyBackBalance+" BNB"} link='' icon={2} />
                <Card title="WALLET BNB" balance={walletBnb+" BNB"}  icon={3} />

            </div>
            <div className="flex  ml-3 mt-6 space-x-2  mr-4 ">
                <Middle />
            </div>
        </div>
    )
}


export default Container

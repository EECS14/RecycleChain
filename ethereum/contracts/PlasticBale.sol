pragma solidity ^0.5.0; 


 interface RegisterSC{
      
        function isBuyerExist(address addr) external view returns (bool); 
    }
    
contract PlasticBale{
    

    address[] public plasticBale; 
    address payable[] public contributors; 
     address payable[] public tempArray; 
     uint public contribution;  //Added here
   
 // Bid variables 
      bool public isOpen; 
      uint public highestBid; 
      address payable public highestBidder; 
      uint public startTime; 
      uint public endTime; 

  
  struct buyer{
      bool isExist; 
      uint placedBids; 
      uint deposit; 
  }
  
  //Bidder[BuyerAddress]
  mapping(address=>buyer) bidder; 
  
  //Seller is the auctionOwner 
   address payable public auctionOwner;
   
   // Bidders are the Buyers 
   uint totalBidders; 
    
    constructor(address[] memory _plasticBale, address payable[] memory _contributors, address payable seller ) public {
      plasticBale = _plasticBale; 
      contributors = _contributors; 
      auctionOwner = seller; 
      totalBidders = 0; 
  }  
    
    
    modifier onlyOwner{
        require(msg.sender == auctionOwner, "Auction owner is not authorized"); 
        _; 
    }
    
    
    
    event bidderRegistered (address indexed baleAddress, address indexed bidderAddress); 
    event auctionStarted (address indexed baleAddress, uint startingAmount, uint closingTime); 
    event bidPlaced(address indexed baleAddress, address indexed biddeAddress, uint amount);
    event bidderExited(address indexed baleAddress, address indexed bidderAddress); 
    event auctionEnded (address indexed baleAddress,address highestBidder, uint highestBid , uint closingTime); 
    event recyclerRewarded(address indexed recycler, uint etherReward);
    event updateStatusBuyer(address buyer, address indexed plasticBottleAddress, string status, uint time); 
    
    
    modifier onlyBidder(address registerContractAddr){
        RegisterSC registerSC = RegisterSC(registerContractAddr); 
        require(registerSC.isBuyerExist(msg.sender), "Bidder is not registered"); 
        _;                                                                        
    }
    function addBidder(address registerContractAddr, address bidderAddr) onlyBidder (registerContractAddr) public {
        
    require(bidder[bidderAddr].isExist == false, "Bidder already joined the Auction.");
    totalBidders++; 
    bidder[bidderAddr] = buyer(true, 0, 0); 
    
    emit bidderRegistered(address(this),bidderAddr);
        
    }
    
    function startAuction(uint closingTime, uint startPrice) onlyOwner payable public {
        
        require(isOpen == false, "Auction is already open."); 
        
        require( closingTime > now, "Auction time can only be set in future.");
        
       
    
        // address(0) is 0X00.. which is the genusis block 
        isOpen = true; 
        highestBid = startPrice; 
        highestBidder = address(0); 
        startTime = now; 
        endTime = closingTime; 
       
       // Contract address is the bale address 
        emit auctionStarted(address(this), startPrice, closingTime); 
    }
    
    function placeBid(address registerContractAddr, uint amount)  onlyBidder(registerContractAddr) payable public{
        
        require(bidder[msg.sender].isExist, "Buyer Address is not registered."); 
        
        //something could be wrong here - wrong address (fixed but check)
        require(isOpen,"Auction is not opened.");
        
        // To place a bid, amount sent has to be bigger than the highest bid 
        require(amount > highestBid, "Place a higher bid."); 
        
        //Validating the amount of wei sent with the transaction 
        require(msg.value == amount, "Insufficient Deposit."); 
        
        bidder[msg.sender].placedBids++; //STOPPED HERE WHEN CHECKING 
        bidder[msg.sender].deposit += msg.value; 
        
        highestBid = amount; 
        highestBidder= msg.sender; 
        
        emit bidPlaced(address(this), msg.sender, amount); 
        
    }
    
    function exitAuction(address registerContractAddr) onlyBidder(registerContractAddr) public {
        
        // Buyers can exit auction if no bids are placed yet 
        require(bidder[msg.sender].placedBids == 0, "Buyer has placed a bid already."); 
        bidder[msg.sender] = buyer(false, 0 ,0); 
        totalBidders--; 
        emit bidderExited(address(this), msg.sender); 
    }
    
    
    function endAuction() public{
        
        require( isOpen, "Auction is not avalible.");
        //require(endTime < now, "Auction duration is not up yet.");
        require(highestBidder != address(0), "No bids have been placed"); 
        
        isOpen = false; 
        
        uint halfAmount = highestBid/2;
    
        // Pay the seller 
        (auctionOwner).transfer(halfAmount); 
        
        //Calculate each participants' share & reward recyclers 

        uint contributionRate =0; 
        uint reward; 
        
        //1. Filter unique recyclers from contributors array 
        
        for(uint i=0; i < contributors.length; i++){
                uint j;
             for(j=0; j < i; j++)
                  if(contributors[i] == contributors[j])
                      break;
                if(i==j)
                tempArray.push(contributors[i]);
              }
        
        //2. Find number of contribution 

        for(uint i=0; i < tempArray.length; i++){
            contribution=0;
             for(uint z=0; z < contributors.length; z++){
                  if(tempArray[i] == contributors[z])
                      contribution++;
             }
             contribution = contribution *100; 
             contributionRate = contribution / (plasticBale.length);
             reward = ((contributionRate * halfAmount)/ 100)+1;
             tempArray[i].transfer(reward); 
             rewardRecycler(tempArray[i], reward); 
    
        }
          
          
          for(uint i=0; i< plasticBale.length; i++)
          updateBottleStatus(highestBidder, plasticBale[i]); 
          
        emit auctionEnded(address(this), highestBidder, highestBid , now); 
    
    }
    
    function updateBottleStatus(address buyerAddress, address plasticBottleAddress) public {
        
        emit updateStatusBuyer(buyerAddress, plasticBottleAddress, "Purchased", now); 
    }
    
    function rewardRecycler(address recycler, uint reward) public {
        
        emit recyclerRewarded(recycler, reward);
    }
    
    function contractBalance() public view returns(uint){
        return address(this).balance;
    }
    
    
    // For debugging 
     function getTime()  public view returns (uint){
        return now + 2 minutes; 
    }
    
}

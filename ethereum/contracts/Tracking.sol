pragma solidity ^0.5.0; 

 interface RegisterSC{
       function getSellerSortingmMachineDetails(address addr) external view returns ( address [] memory); 
    }
    

contract Tracking{
    
    //state variables - stored permanently in contract storage 
   
    string public status;
    address public caller; 
     
    //variables for counting plastic bottles scanned in the sorting machine 
    uint256 public bottlesSortedCounter; 
    uint256 public bottlesSortedLimit; 
    address [] public plasticBale; 
    address payable [] public plasticBaleContributorsAddresses; 
    address [] public deployedPlasticBales;
    
     //constructor - initilize state variables
    constructor() public{
        status = 'NoStatus'; 
        bottlesSortedCounter = 0;
    }
    
    //events
    event updateStatusRecycler(address indexed recycler, address indexed plasticBottleAddress, string  status, uint  time);
    event updateStatusMachine(address indexed plasticBottleAddress, address indexed sellerAddress, string  status, uint time); 
    event plasticBaleCompleted(address [] plasticBale, address payable [] plasticBaleContributorsAddresses,  address indexed sellerAddress, PlasticBale plasticbale, uint256 bottlesInBaleNo,  uint time ); 
    
    
    modifier sortingMachineOnly (address registerContractAddr, address sellerAddr){
        
        address[] memory tempArray; 

       RegisterSC registerSC = RegisterSC(registerContractAddr); //pass contract address 
       tempArray = registerSC.getSellerSortingmMachineDetails(sellerAddr); // pass address of sorting facility-seller
      
      
       for(uint256 i=0; i< tempArray.length; i++){ //only registered sorting machines can update the status of the bottle 
       
         if (msg.sender == tempArray[i])
          _;
          
       }
        
   }
   

    function setBottlesSortedLimit (uint256 _bottlesSortedLimit) public {  // Can be changed based on the sorting facility production goals 
        bottlesSortedLimit = _bottlesSortedLimit;
        
    }
    
    //Key: bottle address - bottleToRecycler[BottleAddress] = RecyclerAddress
    mapping(address=>address payable) bottleToRecycler; 
    
    
    function updateStatusDisposed (address plasticBottleAddress) public{
        bottleToRecycler[plasticBottleAddress] = msg.sender; //save recycler's address
        status = 'Disposed'; 
        emit updateStatusRecycler (msg.sender, plasticBottleAddress, status, now);
    }
    
    function updateStatusSorted (address registerContractAddr, address payable sellerAddr, address plasticBottleAddress) public sortingMachineOnly (registerContractAddr, sellerAddr){
        
       plasticBaleContributorsAddresses.push(bottleToRecycler[plasticBottleAddress]); 
       plasticBale.push(plasticBottleAddress);
       bottlesSortedCounter++;
       status = 'Sorted';
       
       emit updateStatusMachine(plasticBottleAddress, sellerAddr, status, now);
      
      if(bottlesSortedCounter == bottlesSortedLimit )
         createPlasticBale(sellerAddr); 
      
    }
    
    function createPlasticBale(address payable sellerAddr) public {
         bottlesSortedCounter =0; 
         PlasticBale newBale = new PlasticBale(plasticBale, plasticBaleContributorsAddresses, sellerAddr);
         deployedPlasticBales.push(address(newBale)); 
         emit plasticBaleCompleted (plasticBale,plasticBaleContributorsAddresses, sellerAddr, newBale, bottlesSortedLimit,  now); 
        
    }
    
    function getDeployedBales() public view returns (address[] memory){
        return deployedPlasticBales; 
    }
    
}
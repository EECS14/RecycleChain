pragma solidity ^0.5.0; 
//(new) contain all things related to ipfs
 interface RegisterSC{
       function getSellerSortingmMachineDetails(address addr) external view returns ( address [] memory); 
    }
    

contract Tracking{

    string public IPFSHash; //(new)
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
        IPFSHash = 'NoPicture'; //(new)
        bottlesSortedCounter = 0;
    }
    
   
    event updateStatusRecycler(address indexed recycler, address indexed plasticBottleAddress, string  status, uint  time);
    event updateStatusMachine(address indexed plasticBottleAddress, address indexed sellerAddress, string  status, uint time); 
    event plasticBaleCompleted(address [] plasticBale, address payable [] plasticBaleContributorsAddresses,  address indexed sellerAddress, 
    PlasticBale plasticbale, uint256 bottlesInBaleNo, string IPFSHash,  uint time); //(new) added string IPFSHash
    
    
    modifier sortingMachineOnly (address registerContractAddr, address sellerAddr){
        address[] memory tempArray; 
       RegisterSC registerSC = RegisterSC(registerContractAddr); 
       tempArray = registerSC.getSellerSortingmMachineDetails(sellerAddr); 
       for(uint256 i=0; i< tempArray.length; i++){ 
       
         if (msg.sender == tempArray[i])
          _;
          
       }
         }
   
   mapping(address=>address payable) bottleToRecycler; 
    
    

    function setBottlesSortedLimit (uint256 _bottlesSortedLimit) public {  
        bottlesSortedLimit = _bottlesSortedLimit;
          }
    
    function setBaleIPFSHash (string memory _IPFSHash) public { //(new) 
        IPFSHash = _IPFSHash;
    }
    
    function updateStatusDisposed (address plasticBottleAddress) public{
        bottleToRecycler[plasticBottleAddress] = msg.sender; 
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
         PlasticBale newBale = new PlasticBale(plasticBale, plasticBaleContributorsAddresses, sellerAddr, IPFSHash);//(new) added IPFSHash
         deployedPlasticBales.push(address(newBale)); 
         emit plasticBaleCompleted (plasticBale,plasticBaleContributorsAddresses, sellerAddr, newBale, bottlesSortedLimit, IPFSHash,  now); //(new) added IPFSHash
    }
    
    function getDeployedBales() public view returns (address[] memory){
        return deployedPlasticBales; 
    }
    
}
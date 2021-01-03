pragma solidity ^0.5.0; 

interface RegisterSC{
    function getManufactuererIdentifier(address manufacturerAddress) external view returns (uint);
    function isManufactuererExist(address addr) external view returns (bool);
}

contract BottleProduction {
    //state variables - stored permanently in contract storage 
    
    // manufacturing entity - manufacturer 
    address public manufacturingEntity; 
    
    // Plastic Bottle varibles
    struct PlasticBottle {
        address  bottleAddress; 
        uint bottleManufacturer;
        uint bottlePlasticType;
        uint bottleColor;
        uint bottleSize;
    }
    
    //constructor - initilize state variables
    constructor() public{
        manufacturingEntity = msg.sender; 
    }
    
    //events
    event botteIsRegistered(address plasticBottleAddress, uint ManufacturerID, uint bottlePlasticType, uint bottleColor, uint bottleSize, uint time); 
    
    // Mappings 
    mapping (address => PlasticBottle) registeredBottles; 
    
    modifier onlyRegisteredManufacturers (address registerContractAddr) {
    
        RegisterSC registerSC = RegisterSC(registerContractAddr); //pass the deployed register contract address 

        //to check if the manufacturer has been registered
        bool isManufactuererExist = registerSC.isManufactuererExist(msg.sender);
        require(isManufactuererExist, "Manufacturer not authorized to register bottles.");
        _;

    }
    
    function registerBottle (address registerContractAddr, uint bottlePlasticType, uint bottleColor, uint bottleSize) public onlyRegisteredManufacturers(registerContractAddr){
       
        //get id of manufacturer from register contract
        RegisterSC registerSC = RegisterSC(registerContractAddr); 
        uint ManufacturerID = registerSC.getManufactuererIdentifier(msg.sender);
        
        // gets generated address for bottle
        address addr = generateUniqueBottleAddress(ManufacturerID, bottlePlasticType, bottleColor, bottleSize);
        
        registeredBottles[addr] = PlasticBottle(addr, ManufacturerID, bottlePlasticType, bottleColor, bottleSize);
        
        emit botteIsRegistered(addr, ManufacturerID, bottlePlasticType, bottleColor, bottleSize, now);
    }
    
     function generateUniqueBottleAddress (uint ManufacturerID, uint bottlePlasticType, uint bottleColor, uint bottleSize) internal view returns (address) {
        //https://gist.github.com/techbubble/8f9db0f3ddd83ae0b1786ccf7805c461
        
        //generates a unique 20 byte value
        bytes20 b = bytes20(keccak256(abi.encodePacked(msg.sender, now)));
        
        uint addr = 0;
        for (uint index = b.length-1; index > 1; index--) {// used to extract the least significant 16 bytes
            addr += uint(uint8(b[index])) * ( 16 ** ((b.length - index - 1)*2));
        }
        
        //this will append the ID's to the bottle address 0x(manufact)(type)(color)(size)...etc
        uint firstMSByte= ManufacturerID*16 +bottlePlasticType;
        uint secondMSByte= bottleColor*16 +bottleSize;
        addr += firstMSByte * ( 16 ** ((19)*2));
        addr += secondMSByte * ( 16 ** ((18)*2));
        
        return address(addr);
     
    }
} 
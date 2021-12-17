/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Verifier } from "../Verifier";

export class Verifier__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112d9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806343753b4d14610030575b600080fd5b61018f600480360361012081101561004757600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156100fc578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050815260200190600101906100a8565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080602001906001806020026040519081016040528092919082600160200280828437600081840152601f19601f82011690508083019250505050505091929192905050506101a9565b604051808215151515815260200191505060405180910390f35b60006101b3611161565b6040518060400160405280876000600281106101cb57fe5b60200201518152602001876001600281106101e257fe5b60200201518152508160000181905250604051806040016040528060405180604001604052808860006002811061021557fe5b602002015160006002811061022657fe5b602002015181526020018860006002811061023d57fe5b602002015160016002811061024e57fe5b6020020151815250815260200160405180604001604052808860016002811061027357fe5b602002015160006002811061028457fe5b602002015181526020018860016002811061029b57fe5b60200201516001600281106102ac57fe5b602002015181525081525081602001819052506040518060400160405280856000600281106102d757fe5b60200201518152602001856001600281106102ee57fe5b602002015181525081604001819052506060600167ffffffffffffffff8111801561031857600080fd5b506040519080825280602002602001820160405280156103475781602001602082028036833780820191505090505b50905060008090505b600181101561038f5784816001811061036557fe5b602002015182828151811061037657fe5b6020026020010181815250508080600101915050610350565b50600061039c82846103bc565b14156103ad576001925050506103b4565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000190506103ea611194565b6103f26105f0565b9050806080015151600186510114610472576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f76657269666965722d6261642d696e707574000000000000000000000000000081525060200191505060405180910390fd5b61047a6111db565b6040518060400160405280600081526020016000815250905060008090505b865181101561057957838782815181106104af57fe5b60200260200101511061052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640081525060200191505060405180910390fd5b61056a826105658560800151600185018151811061054457fe5b60200260200101518a858151811061055857fe5b60200260200101516109e4565b610adf565b91508080600101915050610499565b5061059c81836080015160008151811061058f57fe5b6020026020010151610adf565b90506105d26105ae8660000151610bf9565b8660200151846000015185602001518587604001518b604001518960600151610c93565b6105e257600193505050506105ea565b600093505050505b92915050565b6105f8611194565b60405180604001604052807f10c8d326622ed733c752a2dce9bf7df66b9f1c4ffbf7ba532cee52d5e0251e6b81526020017f0d2a5b37b6082681b16a9d04f7c9c8f6ba8d271921404376f35689eb121526328152508160000181905250604051806040016040528060405180604001604052807f05a9cd2a19e9d89e53e87172281f57b8758833ca50ae9a28117daada12b2038481526020017f0b615fddd676a0b8da53c528acda15d812f9bba26e9827568c3b88a6f8cf1ea5815250815260200160405180604001604052807f095d96738b1bbe6d865dca08d4efcc4f5460404104a6a4780e48e4408e915b7581526020017f1c00ef5b734967af24897ce8aa6d59af78857c3a25a4779da841d4d9a01166fb8152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f06de74616abb3742e9d8266fbd13ddcdaec922d5123282b9196bff6a1b167bf581526020017f2abf6840c44c4a0064b0468d2b3f51f0b993a2c8303772bb4585b324b2756347815250815260200160405180604001604052807f2fddfac962f968838f45b58d3aa9b45ac6f258afe00eb9bc6bcd1cc216b9dab381526020017f26c5953a4f548d1399c371b8c68a936752590e085bf7136f3ff042d95e826d578152508152508160600181905250600267ffffffffffffffff811180156108bc57600080fd5b506040519080825280602002602001820160405280156108f657816020015b6108e36111db565b8152602001906001900390816108db5790505b50816080018190525060405180604001604052807f277c4938f3926b4b3e435c9cc9de5ca599846b487cdd40a3962a8e529a9ee94d81526020017f2e4e76deb45e6b7922d0246c6139e139f14724699a5b16fd235af9ee6c7dd481815250816080015160008151811061096557fe5b602002602001018190525060405180604001604052807f150c2e6f2662b4a070065036e7dff0822bb871e219647229ff660915797d01c281526020017f0e6a268e7ff2edc307a1d1586cd6e63d61747d07bbf96675245302a0d6c7ae4181525081608001516001815181106109d657fe5b602002602001018190525090565b6109ec6111db565b6109f46111f5565b836000015181600060038110610a0657fe5b602002018181525050836020015181600160038110610a2157fe5b6020020181815250508281600260038110610a3857fe5b602002018181525050600060608360808460076107d05a03fa90508060008114610a6157610a63565bfe5b5080610ad7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f70616972696e672d6d756c2d6661696c6564000000000000000000000000000081525060200191505060405180910390fd5b505092915050565b610ae76111db565b610aef611217565b836000015181600060048110610b0157fe5b602002018181525050836020015181600160048110610b1c57fe5b602002018181525050826000015181600260048110610b3757fe5b602002018181525050826020015181600360048110610b5257fe5b602002018181525050600060608360c08460066107d05a03fa90508060008114610b7b57610b7d565bfe5b5080610bf1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f70616972696e672d6164642d6661696c6564000000000000000000000000000081525060200191505060405180910390fd5b505092915050565b610c016111db565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610c3e575060008360200151145b15610c62576040518060400160405280600081526020016000815250915050610c8e565b60405180604001604052808460000151815260200182856020015181610c8457fe5b0683038152509150505b919050565b60006060600467ffffffffffffffff81118015610caf57600080fd5b50604051908082528060200260200182016040528015610ce957816020015b610cd66111db565b815260200190600190039081610cce5790505b5090506060600467ffffffffffffffff81118015610d0657600080fd5b50604051908082528060200260200182016040528015610d4057816020015b610d2d611239565b815260200190600190039081610d255790505b5090508a82600081518110610d5157fe5b60200260200101819052508882600181518110610d6a57fe5b60200260200101819052508682600281518110610d8357fe5b60200260200101819052508482600381518110610d9c57fe5b60200260200101819052508981600081518110610db557fe5b60200260200101819052508781600181518110610dce57fe5b60200260200101819052508581600281518110610de757fe5b60200260200101819052508381600381518110610e0057fe5b6020026020010181905250610e158282610e25565b9250505098975050505050505050565b60008151835114610e9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f70616972696e672d6c656e677468732d6661696c65640000000000000000000081525060200191505060405180910390fd5b600083519050600060068202905060608167ffffffffffffffff81118015610ec557600080fd5b50604051908082528060200260200182016040528015610ef45781602001602082028036833780820191505090505b50905060008090505b8381101561109a57868181518110610f1157fe5b602002602001015160000151826000600684020181518110610f2f57fe5b602002602001018181525050868181518110610f4757fe5b602002602001015160200151826001600684020181518110610f6557fe5b602002602001018181525050858181518110610f7d57fe5b602002602001015160000151600060028110610f9557fe5b6020020151826002600684020181518110610fac57fe5b602002602001018181525050858181518110610fc457fe5b602002602001015160000151600160028110610fdc57fe5b6020020151826003600684020181518110610ff357fe5b60200260200101818152505085818151811061100b57fe5b60200260200101516020015160006002811061102357fe5b602002015182600460068402018151811061103a57fe5b60200260200101818152505085818151811061105257fe5b60200260200101516020015160016002811061106a57fe5b602002015182600560068402018151811061108157fe5b6020026020010181815250508080600101915050610efd565b506110a361125f565b6000602082602086026020860160086107d05a03fa905080600081146110c8576110ca565bfe5b508061113e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f70616972696e672d6f70636f64652d6661696c6564000000000000000000000081525060200191505060405180910390fd5b60008260006001811061114d57fe5b602002015114159550505050505092915050565b60405180606001604052806111746111db565b8152602001611181611239565b815260200161118e6111db565b81525090565b6040518060a001604052806111a76111db565b81526020016111b4611239565b81526020016111c1611239565b81526020016111ce611239565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b604051806040016040528061124c611281565b8152602001611259611281565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b604051806040016040528060029060208202803683378082019150509050509056fea2646970667358221220ab4840e95036d07b5eedee9e4ecf65129aefe7f64323426787262f4a9e7d75f464736f6c634300060b0033";

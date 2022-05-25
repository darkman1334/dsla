// SPDX-License-Identifier: MIT
pragma solidity 0.6.6;

import '@openzeppelin/contracts/access/Ownable.sol';

import '../interfaces/IMetaverseFactory.sol';
import './SkillNFT.sol';

contract MetaverseFactory is Ownable, IMetaverseFactory {
    SkillNFT skillNFT;

    constructor(string memory skillNftUri) public {
        skillNFT = new SkillNFT(skillNftUri);
    }

    function mintSkillNFT(address account, SkillType tokenId)
        external
        override
    {
        skillNFT.mint(account, tokenId);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface ISLORegistry {
    function getDeviation(uint256 _sli, address _slaAddress)
        external
        view
        returns (uint256);

    function isRespected(uint256 _value, address _slaAddress)
        external
        view
        returns (bool);
}

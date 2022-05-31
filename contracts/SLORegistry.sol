// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

/**
 * @title SLORegistry
 * @dev SLORegistry is a contract for handling creation of service level
 * objectives and querying those service level objectives
 */
contract SLORegistry {
    enum SLOType {
        EqualTo,
        NotEqualTo,
        SmallerThan,
        SmallerOrEqualTo,
        GreaterThan,
        GreaterOrEqualTo
    }

    struct SLO {
        uint256 sloValue;
        SLOType sloType;
    }
    /**
     * @dev SLO Registered event
     * @param sla 1. -
     * @param sloValue 2. -
     * @param sloType 3. -
     */
    event SLORegistered(address indexed sla, uint256 sloValue, SLOType sloType);

    address private slaRegistry;
    mapping(address => SLO) public registeredSLO;

    /// @dev Modifier ensuring that certain function can only be called by SLARegistry
    modifier onlySLARegistry() {
        require(
            msg.sender == slaRegistry,
            'Should only be called using the SLARegistry contract'
        );
        _;
    }

    /**
     * @notice function to set SLARegistry address
     * @dev this function can be called only once
     */
    function setSLARegistry() public {
        // Only able to trigger this function once
        require(
            address(slaRegistry) == address(0),
            'SLARegistry address has already been set'
        );
        slaRegistry = msg.sender;
    }

    /**
     * @notice public function for creating service level objectives
     * @dev only SLARegistry can call this function
     * @param _sloValue 1. -
     * @param _sloType 2. -
     * @param _slaAddress 3. -
     */
    function registerSLO(
        uint256 _sloValue,
        SLOType _sloType,
        address _slaAddress
    ) public onlySLARegistry {
        registeredSLO[_slaAddress] = SLO({
            sloValue: _sloValue,
            sloType: _sloType
        });
        emit SLORegistered(_slaAddress, _sloValue, _sloType);
    }

    /**
     * @dev external view function to check a value against the SLO
     * @param _value The SLI value to check against the SLO
     * @return boolean with the SLO honoured state
     */
    function isRespected(uint256 _value, address _slaAddress)
        external
        view
        returns (bool)
    {
        SLOType sloType = registeredSLO[_slaAddress].sloType;
        uint256 sloValue = registeredSLO[_slaAddress].sloValue;

        if (sloType == SLOType.EqualTo) {
            return _value == sloValue;
        }

        if (sloType == SLOType.NotEqualTo) {
            return _value != sloValue;
        }

        if (sloType == SLOType.SmallerThan) {
            return _value < sloValue;
        }

        if (sloType == SLOType.SmallerOrEqualTo) {
            return _value <= sloValue;
        }

        if (sloType == SLOType.GreaterThan) {
            return _value > sloValue;
        }

        if (sloType == SLOType.GreaterOrEqualTo) {
            return _value >= sloValue;
        }

        revert("isRespected wasn't executed properly");
    }

    /**
     * @dev external view function to get the percentage difference between SLI and SLO
     * @param _sli The SLI value to check against the SLO
     * @param _slaAddress The SLO value to check against the SLI
     * @param _precision The precision for the calculation
     * @return uint256 with the deviation value for the selected sli and sla
     */
    function getDeviation(
        uint256 _sli,
        address _slaAddress,
        uint256 _precision
    ) external view returns (uint256) {
        SLOType sloType = registeredSLO[_slaAddress].sloType;
        uint256 sloValue = registeredSLO[_slaAddress].sloValue;

        // Ensures a positive deviation for greater / small comparisons
        // The deviation is the percentage difference between SLI and SLO
        uint256 deviation = ((
            _sli >= sloValue ? _sli - sloValue : sloValue - _sli
        ) * _precision) / ((_sli + sloValue) / 2);

        // Enforces a deviation capped at 25%
        if (deviation > (_precision * 25) / 100) {
            deviation = (_precision * 25) / 100;
        }

        if (sloType == SLOType.EqualTo) {
            // Fixed deviation for this comparison, the reward percentage is the cap
            deviation = (_precision * 25) / 100;
            return deviation;
        }

        if (sloType == SLOType.NotEqualTo) {
            // Fixed deviation for this comparison, the reward percentage is the cap
            deviation = (_precision * 25) / 100;
            return deviation;
        }

        if (sloType == SLOType.SmallerThan) {
            return deviation;
        }

        if (sloType == SLOType.SmallerOrEqualTo) {
            return deviation;
        }

        if (sloType == SLOType.GreaterThan) {
            return deviation;
        }

        if (sloType == SLOType.GreaterOrEqualTo) {
            return deviation;
        }

        revert("getDeviation wasn't executed properly");
    }
}

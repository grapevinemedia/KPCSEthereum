import {Administrator} from "./Administrator.sol";
import {UserType} from "./User.sol";
// import {ParticipantAuthority} from "./ParticipantAuthority.sol";

/*
	Particpants are member countries that participate in the Kimberley Process.
	They delegate ParticipantAgents, which are entities (e.g. the Minister of Mines
	and Mining), which have the power to issue certificates
*/
contract Participant is Administrator("name", 0x0, 2) {
	enum Status {
		Applied, Active, Suspended 
	}
	
	mapping(address => bool) public registeredAddresses;

	Status public status;
	address public administrator;

	event ParticipantCreated(address participant, string name, address administrator);

	//KPCS Core Document - IV Each particpant should: (b) designate an Importing and an Exporting Authority(ies);
	struct Authorities {
		address importing;
		address exporting;
	}
	Authorities public authorities;

	function Participant(string _name, address _administrator) {
		name = _name;
		administrator = _administrator;
		ParticipantCreated(this, name, administrator);
	}

	function getType() public returns (int) {
		return UserType.Participant();
	}

	function registerAsImportingAuthority(address _address) public returns (bool) {
		if(authorities.importing != 0x0) {
			return false;
		}
		authorities.importing = _address;
		return true;
	}

	function registerAsExportingAuthority(address _address) public returns (bool) {
		if(authorities.exporting != 0x0) {
			return false;
		}
		authorities.exporting = _address;
		return true;
	}

	function changeStatus(uint _status) public returns (bool) {
		if(msg.sender != owner) {
			return false;
		}
		status = convertUIntToStatus(_status);
		return true;
	}

	function convertUIntToStatus(uint _status) private returns (Status) {
		if (_status == 0) {
			return Status.Applied;
		} else if(_status == 1) {
			return Status.Active;
		} else if(_status == 2) {
			return Status.Suspended;
		}
		throw;
	}
}

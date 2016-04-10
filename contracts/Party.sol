import {User} from "./User.sol";
import {UserType} from "./UserType.sol";

contract Party is User("name", 0x0, 5) {
	string public contactDetails;

	function Party(string _name, string _contactDetails, address _administrator) {
		name = _name;
		contactDetails = _contactDetails;
		state = State.Applied;
		administrator = _administrator;
	}

	function getType() public returns (int) {
		return UserType.Party();
	}
}

import {useContext} from "react";
import {ProfileContext} from "./ProfileContext.jsx";

// useContext of "ProfileContext" and saved to profile
// "Profile" component will display the value of "profile"
export default function Profile() {
    const profile = useContext(ProfileContext);

    return (
        <>
            <h2>Profile</h2>
            <p>Hello {profile}</p>
        </>
    )
}

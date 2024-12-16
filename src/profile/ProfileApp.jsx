import {ProfileContext} from "./ProfileContext.jsx";
import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";

export default function ProfileApp() {
    return (
        <>
            <ProfileContext.Provider value="Eko">
                <h1>Profile App</h1>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}
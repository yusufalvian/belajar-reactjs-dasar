import {ProfileContext} from "./ProfileContext.jsx";
import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import {useState} from "react";
import ProfileForm from "./ProfileForm.jsx";

// we can think of context like "global value"
// "name" is changed in ProfileForm component
// Profile component can access the "name" value using useContext
export default function ProfileApp() {
    const [name, setName] = useState("Eko");

    return (
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName}/>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}

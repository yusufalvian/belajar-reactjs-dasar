

// input form that accept value "name" with type "text"
// the event handler onChange will execute function handleChange
// handleChange will set the value of "name" using setName function that passed in prop
export default function ProfileForm({name, setName}) {

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" value={name} onChange={handleChange}/>
        </>
    )
}

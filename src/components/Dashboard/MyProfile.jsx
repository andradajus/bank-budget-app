import { Input } from "@material-tailwind/react";

const MyProfile = ({ user }) => {
    console.log('User Object:', user);

    return (
        <>
            <div className="bg-blue-100 h-full rounded-md">
                <h2>Your Profile</h2>

                <div
                    className="flex w-12"
                    label={user.username}
                    disabled
                />

            <div className="bg-red-200 flex flex-row justify-around p-1">
                
                
                <span>{user.firstName}</span>
                <span>{user.middleName}</span>
                <span>{user.lastName}</span>
            </div>

                <p>Name: {user.firstName} {user.middleName} {user.lastName}</p>
                <p>Email: {user.email}</p>
            </div>
        </>
    )
}

export default MyProfile
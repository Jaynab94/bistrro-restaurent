import UseAuth from "../../../hooks/UseAuth";


const UserHome = () => {
    const { user } = UseAuth();
    return (
        <div>
            <h1><span>Hi Welcome </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }

            </h1>
        </div>
    );
};

export default UserHome;
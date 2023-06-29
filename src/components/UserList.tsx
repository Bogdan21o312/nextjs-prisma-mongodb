import {getUsers} from "@/actions/actionsUsers";
import {User} from "@/components/User";

export async function UserList() {
    const users = await getUsers()
    return (
        <div>
            {users.reverse().map((user: any) => (
                <User id={user.id} email={user.email} name={user.name}/>
            ))}
        </div>
    );
};

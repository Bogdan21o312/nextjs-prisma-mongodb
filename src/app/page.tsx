import styles from './page.module.css';
import {CreateUser} from "@/components/CreateUser";
import {getUsers} from "@/actions/actionsUsers";

export default async function Home() {
    const users = await getUsers()

    return (
        <main className={styles.main}>
            <CreateUser/>
            {users.reverse().map((user: any) => (
                <div key={user.id}>
                    <div>{user.email}</div>
                    <div>{user.name}</div>
                    <br/>
                </div>
            ))}
        </main>
    );
}

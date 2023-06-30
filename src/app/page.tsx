import styles from './page.module.css';
import {CreateUser} from "@/components/CreateUser/CreateUser";
import {UserList} from "@/components/UserList/UserList";

export default function Page() {

    return (
        <main className={styles.main}>
            <CreateUser/>
            <UserList/>
        </main>
    );
}

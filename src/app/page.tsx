import styles from './page.module.css';
import {CreateUser} from "@/components/CreateUser";
import {UserList} from "@/components/UserList";

export default function Page() {

    return (
        <main className={styles.main}>
            <CreateUser/>
            <UserList/>
        </main>
    );
}

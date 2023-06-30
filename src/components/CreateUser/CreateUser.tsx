'use client'
import {useState} from "react";
import {createUser} from "@/actions/actionsUsers";
export const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleCreateUser = async (e: any) => {
        e.preventDefault();

        if (!email || !name) {
            return;
        }

        const newUser = await createUser(email, name);
        setEmail('');
        setName('');
    };
    return (
        <form onSubmit={handleCreateUser}>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button type="submit">Створити користувача</button>
        </form>
    );
};

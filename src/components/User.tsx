'use client'
import {deleteUser} from "@/actions/actionsUsers";

export function User({id, email, name}: any) {
    return (
        <>
            <div>{email}</div>
            <div>{name}</div>
            <br/>
            <button onClick={() => deleteUser(id)}>DELETE</button>
        </>
    )
}

import classes from "./LayoutMain.module.scss"
import {ReactNode} from "react";
import Link from "next/link";

const data = [
    {
        link: "/",
        text: "Home"
    },
    {
        link: "/users",
        text: "Users"
    },
]

export function LayoutMain({children}: { children: ReactNode }) {
    return (
        <div className={classes.wrapper}>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href={'/'}>LOGO</Link>
                </div>
                <nav className={classes.menu}>
                    <ul className={classes.list}>
                        {data.map(link =>
                            <li className={classes.item}>
                                <Link className={classes.link} href={link.link}>
                                    {link.text}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                Footer
            </footer>
        </div>
    )
}

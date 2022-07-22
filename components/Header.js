import Link from 'next/link';
import { ConnectButton } from "web3uikit";

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between">
            <Link href="/">
            <h1 className="py-4 px-4 font-bold text-3xl"> Plants And Pillars </h1>
            </Link>
            <div className="flex justify-self-center items-center space-x-10 p-5">
                <Link href="/about">
                    <h4>About</h4>
                </Link>
                <Link href="/dashboard">
                    <h4>Dashboard</h4>
                </Link><Link href="/plantsPedia">
                    <h4>PlantsPedia</h4>
                </Link><Link href="/poap">
                    <h4>Competition</h4>
                </Link>
            </div>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}
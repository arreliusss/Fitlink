import Image from "next/image";
import { Button, buttonVariants } from "../../components/ui/button";
import Home from "../page";
import Navbar2 from "../(component)/navbar2";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Navbar2 />
        <h1>
            login
        </h1>
    </main>
  );
}

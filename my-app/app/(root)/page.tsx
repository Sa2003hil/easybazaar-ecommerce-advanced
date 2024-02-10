import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


const setupPage = () => {
  return (
    <main className="p-4">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}

export default setupPage;
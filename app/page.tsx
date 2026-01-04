import { UserButton } from "@clerk/nextjs";
import Header from "./_shared/header";
import Hero from "./_shared/hero";

export default function Home() {
  return (
 <div className="overflow-hidden relative min-h-screen">
  <Header/> <Hero />
 <div className="absolute -top-40 -left-40 h-[500] w-[500] bg-purple-400/20 blur-[120px] rounded-full" />
 <div className="absolute top-20 right-[-200px] h-[500] w-[500] bg-pink-400/20 blur-[120px] rounded-full" />
 <div className="absolute bottom-[-200px] left-1/3 h-[500] w-[500] bg-blue-400/20 blur-[120px] rounded-full" />
 <div className="absolute top-[200px] left-1/2 h-[500] w-[500] bg-sky-400/20 blur-[120px] rounded-full" />
 
{/* <UserButton /> */}
  </div>
  );
}

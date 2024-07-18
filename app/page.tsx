import Landingpage from "@/components/landingpage/Landingpage";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/signin");
  }

  return (
    
      <div className="w-full">
        <Landingpage/>
      </div>
    
  );
}

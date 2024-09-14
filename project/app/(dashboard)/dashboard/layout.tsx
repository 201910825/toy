import { auth } from "@/auth";
import SideBar from "./_components/sidebar";

export default async function DashboardLayout ({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <SideBar session={session}/>
      {children}
    </div>
  )
}

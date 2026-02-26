import { auth } from "@/auth.config";
import { NavbarMenu } from "@/components";
import { redirect } from "next/navigation";

export default async function ShopLayout({children}: {
 children: React.ReactNode;
}) {

  const session = await auth();

  if ( session?.user) {
    redirect('/');
  }


  return (
    <main className="flex justify-center">
      <div className="w-full">
        {children}

      </div>
    </main>
  );
}
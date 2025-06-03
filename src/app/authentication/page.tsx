// utilizar mais de uma div nas hooks feitos no lado do usuario e nao do server

import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col md:flex-row sm:flex-1 h-screen w-screen items-center justify-center">
      <div className="p-10">
        <div className="flex items-center space-x-4 mb-4">
          <Image src="/logomarca.svg" alt="Dr.Agenda" width={136} height={28} />
          <h1 className="text-5xl font-bold mb-6">Dr.Agenda</h1>
        </div>

        <h2 className="text-3xl font-serif mb-4 text-center">
          Gerencie suas clínicas aqui mesmo
        </h2>
      </div>

      <div className="flex">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Faça Login</TabsTrigger>
            <TabsTrigger value="register">Criar Conta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;

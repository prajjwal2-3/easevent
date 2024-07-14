"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  email_validator,
  password_validator,
} from "@/lib/Validator";
import { useToast } from "@/components/ui/use-toast";
const uservalidation = z.object({
    email: email_validator,
    password: password_validator,
  });
export default function Signin() {
    useEffect(() => {
        signOut({
          redirect: false,
        });
      }, []);
    const router = useRouter();
    const { toast } = useToast();
    const [isloading, setisloading] = useState(false);
    const [user,setUser]=useState({
        email:'',
        password:''
    })
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      }
   async function login(){
    setisloading(true)
    const validation = uservalidation.safeParse(user)
    if (!validation.success) {
        const errors = validation.error.errors.map((err) => err.message);
        toast({ title: errors.toLocaleString() });
      }
    try{
        const login = await signIn("credentials",{
            email: user.email,
            password: user.password,
             redirect:false
         })
         if(login?.ok){
            toast({title:'Login successful'})
            router.push('/')
         }
         setisloading(false)
    }catch(err){
        setisloading(false)
        toast({title:`LOGIN_ERR ${err}`})
    }
   }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="Email">Email</Label>
            <Input
              value={user.email}
              name="email"
              onChange={handleChange}
              disabled={isloading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
            value={user.password}
            name="password"
            onChange={handleChange}
            disabled={isloading}
            type="password"
            />
          </div>
          <Button type="submit" onClick={login}  className="w-full">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

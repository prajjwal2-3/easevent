"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  name_validator,
  email_validator,
  password_validator,
} from "@/lib/Validator";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { signOut } from "next-auth/react";
import { ToastAction } from "../ui/toast";
const uservalidation = z.object({
  username: name_validator,
  email: email_validator,
  firstName: name_validator,
  lastName: name_validator,
  password: password_validator,
});
export default function Signup() {
    useEffect(() => {
        signOut({
          redirect: false,
        });
      }, []);
  const router = useRouter();
  const { toast } = useToast();
  const [user, setuser] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [isloading, setisloading] = useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  async function registerUser() {
    
    const validation = uservalidation.safeParse(user);
    if (!validation.success) {
      const errors = validation.error.errors.map((err) => err.message);
      console.log(errors)
      toast({ title: errors.toLocaleString() });
      return
    }
    try {
      setisloading(true);
      await axios.post("/api/register", { user });
      toast({ title: "Registration Successful" });
      router.push("/signin");
    } catch (err) {
      setisloading(false);
      toast({ title: `Register ERR ${err}` });
    } finally {
      setisloading(false);
    }
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up </CardTitle>
        <CardDescription>
          Enter your details below to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <section>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  value={user.email}
                  id="email"
                  placeholder="Jackdaniels@gmail.com"
                  onChange={handleChange}
                  disabled={isloading}
                />
              </section>
              <section>
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  value={user.username}
                  id="username"
                  placeholder="Jackdaniels@cool"
                  onChange={handleChange}
                  disabled={isloading}
                />
              </section>
            </div>
            <div className="flex flex-row space-x-1.5">
              <section>
                <Label htmlFor="Firstname">First Name</Label>
                <Input
                  name="firstName"
                  value={user.firstName}
                  id="firstname"
                  placeholder="Jack"
                  onChange={handleChange}
                  disabled={isloading}
                />
              </section>
              <section>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  name="lastName"
                  value={user.lastName}
                  id="lastname"
                  placeholder="Daniel"
                  onChange={handleChange}
                  disabled={isloading}
                />
              </section>
            </div>
            <section>
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                value={user.password}
                id="password"
                placeholder="Jackdaniel@1123"
                type="password"
                onChange={handleChange}
                disabled={isloading}
              />
            </section>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex ">
      
        <Button type="submit" onClick={registerUser} className="w-full">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}

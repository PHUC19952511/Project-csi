"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/app/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components//ui/input";
import { Button } from "@/components//ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: true,
        },
    });

    // This effect runs when the component mounts
    useEffect(() => {
      const storedEmail = localStorage.getItem("rememberedEmail");
      if (storedEmail) {
          form.setValue("email", storedEmail); // Set the saved email as the default value
      }
  }, [form]);

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        setLoading(true);
        
        if (data.remember) {
            localStorage.setItem("rememberedEmail", data.email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }
        
        // Handle login logic here...

        setLoading(false); // Reset loading state after processing
    };

    const { pending } = useFormStatus();
    return (
        <CardWrapper
            label="Enter your email below to login to your account"
            title="Login"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="IT"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="******" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="remember"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="remember"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                        <label
                                            htmlFor="remember"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={pending}>
                        {loading ? "Loading..." : "Login"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default LoginForm;
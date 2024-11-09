"use client"

import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
import AuthHeader from "./auth-header";

interface CardWrapperProps {
    label: string
    title: string
    children: React.ReactNode
    }



const CardWrapper = ({label, title, children}: CardWrapperProps) => {
  return (
    <Card className="mx-auto max-w-sm shadow-md">
        <CardHeader>
            <AuthHeader label={label} title={title} />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}

export default CardWrapper
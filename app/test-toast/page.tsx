"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function TestToastPage() {
  const { toast } = useToast()

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Test Toast",
            description: "This is a test toast notification.",
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  )
}

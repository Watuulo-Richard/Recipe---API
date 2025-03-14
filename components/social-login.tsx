import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export default function SocialLogin() {
  return (
    <div className="space-y-3">
      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
        <Mail size={20} />
        Login with Google
      </Button>
      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
        <Github size={20} />
        Login with GitHub
      </Button>
    </div>
  )
}


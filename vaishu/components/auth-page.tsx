"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Github, GitlabIcon } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-[1200px] p-6 md:p-8 bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - Stats */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="CodeAnt AI"
                width={32}
                height={32}
                className="dark:invert"
              />
              <span className="font-semibold text-xl">AI to Detect & Autofix Bad Code</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-muted-foreground">Language Support</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">500K+</div>
                  <span className="text-sm text-green-600">↑14%</span>
                </div>
                <div className="text-sm text-muted-foreground">Issues Fixed</div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="CodeAnt Illustration"
                width={400}
                height={400}
                className="w-full max-w-[400px] mx-auto"
              />
            </div>
          </div>

          {/* Right Section - Auth */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center space-y-2">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="CodeAnt AI"
                width={48}
                height={48}
                className="mx-auto mb-4 dark:invert"
              />
              <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
            </div>

            <div className="flex gap-4 w-full max-w-sm">
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={() => router.push("/")}
              >
                SAAS
              </Button>
              <Button
                variant="outline"
                className="flex-1"
              >
                Self Hosted
              </Button>
            </div>

            <div className="w-full max-w-sm space-y-4">
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Sign in with GitHub
              </Button>
              
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Bitbucket"
                  width={20}
                  height={20}
                />
                Sign in with Bitbucket
              </Button>
              
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Azure DevOps"
                  width={20}
                  height={20}
                />
                Sign in with Azure Devops
              </Button>
              
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <GitlabIcon className="w-5 h-5" />
                Sign in with GitLab
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              By signing up you agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}


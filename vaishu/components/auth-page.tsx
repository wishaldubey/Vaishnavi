"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LuKeyRound } from "react-icons/lu"
import { useState } from 'react'
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingThemeToggle } from "@/components/floating-theme-toggle"

export default function AuthPage() {
  const [mode, setMode] = useState<'saas' | 'self-hosted'>('saas')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] grid md:grid-cols-[1fr,500px] gap-16">
        {/* Left Section - Hidden on Mobile */}
        <div className="hidden md:block relative h-[400px]">
          {/* Main Stats Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] overflow-hidden w-[90%] text-gray-900 dark:text-white">
            {/* Header */}
            <div className="px-6 py-4 border-b">
              <div className="flex items-center gap-3">
                <svg className="shrink-0 text-gray-900 dark:text-white" width="32" height="32" viewBox="0 0 29 32" fill="currentColor">
                  <path d="M15.8 1.6c-1.6.8-2.8 1.7-2.8 2 0 .2.9 0 1.9-.6 1.1-.5 3.1-1 4.5-1S22 1.5 22 1c0-1.4-3.1-1.2-6.2.6m3.9 3.3c2.3.4 5.1 1.6 6.3 2.6 1.7 1.6 2 1.6 2 .2 0-2.3-3.2-3.7-8.2-3.6l-4.3.2zM5.5 13.2c-3.9 8.4-2.9 13.4 3.3 16.4 8.4 4 16.2 2.4 16.2-3.4 0-6.2-7.7-13.7-13.3-12.9-2.4.3-2.8.1-2.4-1.5.3-1.1.1-1.6-.6-1.1-.6.4-.8 0-.4-1 1.5-3.9-.6-1.3-2.8 3.5m11.4 5.4c4 3.3 4.1 5.7.4 4.8-4.3-1-7.3-3.2-7.3-5.4 0-2.8 3.2-2.5 6.9.6"/>
                  <path d="M1.2 17.5C-1.4 23.1 1.1 30 6 31.3c1.6.4 1.3-.1-1.1-2.4-3-2.8-3.1-3.3-2.6-8.4.3-3 .4-5.5.3-5.5-.2 0-.8 1.1-1.4 2.5"/>
                </svg>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">AI to Detect & Autofix Bad Code</h1>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 divide-x">
              <div className="py-5 px-4 text-center">
                <div className="text-2xl font-bold mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Language Support</div>
              </div>
              <div className="py-5 px-4 text-center">
                <div className="text-2xl font-bold mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="py-5 px-4 text-center">
                <div className="text-2xl font-bold mb-1">100K+</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
            </div>
          </div>

          {/* Issues Fixed Card */}
          <div className="absolute right-0 top-[45%] bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-5 w-[260px] text-gray-900 dark:text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F4F3FF] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28.5" cy="28.5" r="28.5" fill="#9D90FA" fillOpacity="0.25"/>
                  <path d="M38.434 27.755h-9.778v-9.912a.22.22 0 0 0-.22-.222h-.71a10.8 10.8 0 0 0-4.181.841A10.9 10.9 0 0 0 20 20.864a11 11 0 0 0-2.34 3.52 11.2 11.2 0 0 0-.859 4.313c0 1.497.29 2.944.859 4.31a11.1 11.1 0 0 0 2.34 3.52 10.9 10.9 0 0 0 3.473 2.373 10.7 10.7 0 0 0 4.255.874 10.8 10.8 0 0 0 4.18-.841 10.9 10.9 0 0 0 3.544-2.402 11 11 0 0 0 2.34-3.52c.572-1.365.865-2.832.862-4.314v-.72a.225.225 0 0 0-.221-.222m2.403-1.538-.07-.782a11.07 11.07 0 0 0-3.148-6.771 10.84 10.84 0 0 0-6.697-3.185l-.774-.072a.22.22 0 0 0-.237.219V26.26a.22.22 0 0 0 .218.222l10.49-.028a.22.22 0 0 0 .218-.238" fill="#9D90FA"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Issues Fixed</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="mr-1">↑</span>14%
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">This week</div>
              </div>
            </div>
          </div>

          {/* Background Logo */}
          <div className="absolute bottom-[-50px] left-0 w-[150px] h-[150px] opacity-[0.08] pointer-events-none">
            <svg viewBox="0 0 29 32" fill="currentColor">
              <path d="M15.8 1.6c-1.6.8-2.8 1.7-2.8 2 0 .2.9 0 1.9-.6 1.1-.5 3.1-1 4.5-1S22 1.5 22 1c0-1.4-3.1-1.2-6.2.6m3.9 3.3c2.3.4 5.1 1.6 6.3 2.6 1.7 1.6 2 1.6 2 .2 0-2.3-3.2-3.7-8.2-3.6l-4.3.2zM5.5 13.2c-3.9 8.4-2.9 13.4 3.3 16.4 8.4 4 16.2 2.4 16.2-3.4 0-6.2-7.7-13.7-13.3-12.9-2.4.3-2.8.1-2.4-1.5.3-1.1.1-1.6-.6-1.1-.6.4-.8 0-.4-1 1.5-3.9-.6-1.3-2.8 3.5m11.4 5.4c4 3.3 4.1 5.7.4 4.8-4.3-1-7.3-3.2-7.3-5.4 0-2.8 3.2-2.5 6.9.6"/>
              <path d="M1.2 17.5C-1.4 23.1 1.1 30 6 31.3c1.6.4 1.3-.1-1.1-2.4-3-2.8-3.1-3.3-2.6-8.4.3-3 .4-5.5.3-5.5-.2 0-.8 1.1-1.4 2.5"/>
            </svg>
          </div>
        </div>

        {/* Right Section - Full Width on Mobile */}
        <Card className="p-8 flex flex-col items-center justify-center space-y-8 md:max-w-none max-w-sm mx-auto w-full bg-white dark:bg-gray-800">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg width="32" height="32" viewBox="0 0 29 32" fill="currentColor" className="text-gray-900 dark:text-white">
                <path d="M15.8 1.6c-1.6.8-2.8 1.7-2.8 2 0 .2.9 0 1.9-.6 1.1-.5 3.1-1 4.5-1S22 1.5 22 1c0-1.4-3.1-1.2-6.2.6m3.9 3.3c2.3.4 5.1 1.6 6.3 2.6 1.7 1.6 2 1.6 2 .2 0-2.3-3.2-3.7-8.2-3.6l-4.3.2zM5.5 13.2c-3.9 8.4-2.9 13.4 3.3 16.4 8.4 4 16.2 2.4 16.2-3.4 0-6.2-7.7-13.7-13.3-12.9-2.4.3-2.8.1-2.4-1.5.3-1.1.1-1.6-.6-1.1-.6.4-.8 0-.4-1 1.5-3.9-.6-1.3-2.8 3.5m11.4 5.4c4 3.3 4.1 5.7.4 4.8-4.3-1-7.3-3.2-7.3-5.4 0-2.8 3.2-2.5 6.9.6"/>
                <path d="M1.2 17.5C-1.4 23.1 1.1 30 6 31.3c1.6.4 1.3-.1-1.1-2.4-3-2.8-3.1-3.3-2.6-8.4.3-3 .4-5.5.3-5.5-.2 0-.8 1.1-1.4 2.5"/>
              </svg>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">CodeAnt AI</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Welcome to CodeAnt AI</h1>
          </div>

          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gray-100 rounded-md">
              <div className={cn(
                "w-1/2 h-full bg-blue-600 rounded-md transition-all duration-300 ease-in-out",
                mode === 'self-hosted' && "translate-x-full"
              )} />
            </div>
            <div className="relative flex">
              <button
                className={cn(
                  "flex-1 py-2 px-4 text-sm font-medium transition-colors duration-300",
                  mode === 'saas' ? "text-white" : "text-gray-700"
                )}
                onClick={() => setMode('saas')}
              >
                SAAS
              </button>
              <button
                className={cn(
                  "flex-1 py-2 px-4 text-sm font-medium transition-colors duration-300",
                  mode === 'self-hosted' ? "text-white" : "text-gray-700"
                )}
                onClick={() => setMode('self-hosted')}
              >
                Self Hosted
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm relative min-h-[216px]">
            <div className="space-y-3">
              {/* SAAS content */}
              <div className={cn(
                "space-y-3 transition-all duration-300 ease-in-out absolute w-full",
                mode === 'saas' ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-4 opacity-0 pointer-events-none"
              )}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-start gap-3 h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                  </svg>
                  Sign in with GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-start gap-3 h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="#2684FF" fillRule="evenodd" d="M1.403 2.15A.43.43 0 0 1 1.73 2l12.54.002a.43.43 0 0 1 .424.496l-1.81 11.135a.43.43 0 0 1-.425.36H3.693a.585.585 0 0 1-.568-.478l-1.82-11.02a.43.43 0 0 1 .098-.345m5.203 7.814H9.41l.677-3.93H5.859z" clipRule="evenodd"/>
                  </svg>
                  Sign in with Bitbucket
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-start gap-3 h-12 min-h-[48px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#0075D1" d="M2.966 8.331 18.021 5.403 10.652 0 10.652 2.476 2.247 5.899 0 8.871 0 15.714 2.966 16.57z"/>
                    <path fill="#0075D1" d="M8.944 20.939 18.247 24 24 19.092 24 4.412 18.023 5.403 18.023 18.372 2.966 16.57 8.944 24z"/>
                  </svg>
                  <span className="truncate">Sign in with Azure DevOps</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-start gap-3 h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#FC6D26" d="m23.593 13.622-3.99-11.963a.816.816 0 0 0-1.548-.021L14.82 8.17H9.181L5.945 1.638a.816.816 0 0 0-1.548.021L.407 13.622a.824.824 0 0 0 .3.924L12 22.938l11.294-8.392a.824.824 0 0 0 .3-.924Z"/>
                    <path fill="#E24329" d="m12 22.938-4.204-12.93h8.408L12 22.938Z"/>
                    <path fill="#FC6D26" d="M12 22.938 16.204 10.01h5.154L12 22.938Z"/>
                  </svg>
                  Sign in with GitLab
                </Button>
              </div>

              {/* Self Hosted content */}
              <div className={cn(
                "space-y-3 transition-all duration-300 ease-in-out absolute w-full",
                mode === 'self-hosted' ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-4 opacity-0 pointer-events-none"
              )}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-start gap-3 h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#FC6D26" d="m23.593 13.622-3.99-11.963a.816.816 0 0 0-1.548-.021L14.82 8.17H9.181L5.945 1.638a.816.816 0 0 0-1.548.021L.407 13.622a.824.824 0 0 0 .3.924L12 22.938l11.294-8.392a.824.824 0 0 0 .3-.924Z"/>
                    <path fill="#E24329" d="m12 22.938-4.204-12.93h8.408L12 22.938Z"/>
                    <path fill="#FC6D26" d="M12 22.938 16.204 10.01h5.154L12 22.938Z"/>
                  </svg>
                  Self Hosted GitLab
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-start gap-3 h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <LuKeyRound className="w-5 h-5" />
                  Sign in with SSO
                </Button>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            By signing up you agree to the{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Privacy Policy
            </a>
          </p>
        </Card>
        <FloatingThemeToggle />
      </div>
    </div>
  )
}


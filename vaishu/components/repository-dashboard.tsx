"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"
const cn = (...inputs: string[]) => twMerge(inputs)
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cloud, Code2, FolderGit2, HelpCircle, LogOut, RefreshCcw, Settings, FlagIcon as SupportIcon, ChevronDown, Menu, Search} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


interface Repository {
  name: string
  status: "Public" | "Private"
  language: string
  size: string
  updatedAt: string
}

export default function RepositoryDashboard() {
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Repositories")

  const repositories: Repository[] = [
    {
      name: "design-system",
      status: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "1 day ago"
    },
    {
      name: "codeant-ci-app",
      status: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "2 days ago"
    },
    {
      name: "analytics-dashboard",
      status: "Private",
      language: "Python",
      size: "4521 KB",
      updatedAt: "5 days ago"
    },
    {
      name: "mobile-app",
      status: "Public",
      language: "Swift",
      size: "3096 KB",
      updatedAt: "3 days ago"
    },
    {
      name: "e-commerce-platform",
      status: "Private",
      language: "Java",
      size: "6210 KB",
      updatedAt: "6 days ago"
    },
    {
      name: "blog-website",
      status: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "4 days ago"
    },
    {
      name: "social-network",
      status: "Private",
      language: "PHP",
      size: "5432 KB",
      updatedAt: "7 days ago"
    }
  ]

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const NavLinks = () => {
    const links = [
      { name: "Repositories", icon: FolderGit2 },
      { name: "AI Code Review", icon: Code2 },
      { name: "Cloud Security", icon: Cloud },
      { name: "How to Use", icon: HelpCircle },
      { name: "Settings", icon: Settings },
    ]

    return (
      <nav className="space-y-1">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => setSelectedOption(link.name)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm rounded-md w-full text-left",
              selectedOption === link.name
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.name}
          </button>
        ))}
      </nav>
    )
  }

  const BottomLinks = () => {
    const links = [
      { name: "Support", icon: SupportIcon },
      { 
        name: "Logout", 
        icon: LogOut,
        onClick: () => router.push("/auth")
      },
    ]

    return (
      <div className="space-y-1">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={link.onClick || (() => setSelectedOption(link.name))}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm rounded-md w-full text-left",
              selectedOption === link.name
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.name}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col bg-white border-r">
        <div className="flex flex-col flex-1">
          <div className="p-4 border-b">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 font-semibold text-lg outline-none">
                <FolderGit2 className="h-6 w-6" />
                CodeAnt AI
                <ChevronDown className="h-4 w-4 ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem onClick={() => setSelectedOption("Vaishnavi Waghmare")}>
                  Vaishnavi Waghmare
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedOption("Switch Account")}>
                  Switch Account
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex-1 px-2 py-4">
            <NavLinks />
          </div>
          
          <div className="border-t p-2">
            <BottomLinks />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 border-b bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <FolderGit2 className="h-6 w-6" />
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          <Sheet onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="w-full h-[80vh] p-0"
            >
              <div className="flex flex-col h-full bg-white">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2 font-semibold text-lg">
                    <FolderGit2 className="h-6 w-6" />
                    CodeAnt AI
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-gray-100"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex-1 p-2 overflow-auto">
                  <NavLinks />
                </div>
                <div className="border-t p-2">
                  <BottomLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn(
        "flex-1 overflow-auto transition-opacity duration-200",
        isMobileMenuOpen && "opacity-20"
      )}>
        <div className="container mx-auto p-4 md:p-6 mt-16 md:mt-0">
          <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-3rem)]">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
                  <p className="text-sm text-muted-foreground">{repositories.length} total repositories</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={cn(
                      "flex-1 md:flex-none",
                      "border-black text-black hover:bg-blue-50"
                    )}
                  >
                    <RefreshCcw className="h-4 w-4 mr-2" />
                    Refresh All
                  </Button>
                  <Button 
                    size="sm" 
                    className={cn(
                      "flex-1 md:flex-none",
                      "bg-blue-600 text-white hover:bg-blue-700"
                    )}
                  >
                    Add Repository
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative mb-6 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search Repositories"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="-mx-6 md:-mx-8">
                {filteredRepositories.map((repo) => (
                  <button
                    key={repo.name}
                    onClick={() => setSelectedRepo(repo.name)}
                    className={cn(
                      "w-full text-left px-6 md:px-8 py-4 transition-colors",
                      "hover:bg-gray-100 active:bg-gray-100",
                      "focus:outline-none focus-visible:bg-gray-100",
                      "cursor-pointer select-none",
                      selectedRepo === repo.name && "bg-gray-100"
                    )}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{repo.name}</span>
                        <Badge 
                          variant={repo.status === "Public" ? "secondary" : "outline"}
                          className={cn(
                            "px-2 py-0.5 text-xs font-normal",
                            repo.status === "Public" 
                              ? "bg-blue-100 text-blue-800" 
                              : "border-gray-300 text-gray-600"
                          )}
                        >
                          {repo.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          {repo.language}
                        </div>
                        <span>{repo.size}</span>
                        <span>Updated {repo.updatedAt}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


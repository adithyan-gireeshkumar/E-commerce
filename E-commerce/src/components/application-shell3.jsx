"use client";;
import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  ClipboardList,
  Clock3,
  FileText,
  Folder,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { cn } from "cn";
import logoImage from "../assets/ChatGPT Image Sep 25, 2026, 08_42_36 PM.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Shared sidebar data - works with all sidebar variations
const sidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Shadcnblocks",
    title: "Shadcnblocks",
    description: "Build your app",
  },
  navGroups: [
    {
      title: "Overview",
      defaultOpen: true,
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "#",
          isActive: true,
        },
        { label: "Tasks", icon: ClipboardList, href: "#" },
        { label: "Roadmap", icon: BarChart3, href: "#" },
      ],
    },
    {
      title: "Projects",
      defaultOpen: true,
      items: [
        {
          label: "Active Projects",
          icon: Briefcase,
          href: "#",
          children: [
            { label: "Project Alpha", icon: FileText, href: "#" },
            { label: "Project Beta", icon: FileText, href: "#" },
            { label: "Project Gamma", icon: FileText, href: "#" },
          ],
        },
        {
          label: "Archived",
          icon: Folder,
          href: "#",
          children: [
            { label: "2024 Archive", icon: FileText, href: "#" },
            { label: "2023 Archive", icon: FileText, href: "#" },
          ],
        },
      ],
    },
    {
      title: "Team",
      defaultOpen: false,
      items: [
        { label: "Members", icon: Users, href: "#" },
        { label: "Sprints", icon: Clock3, href: "#" },
        { label: "Approvals", icon: BadgeCheck, href: "#" },
        { label: "Reviews", icon: Star, href: "#" },
      ],
    },
    {
      title: "Workspace",
      defaultOpen: false,
      items: [
        { label: "Integrations", icon: Globe2, href: "#" },
        { label: "Automations", icon: Sparkles, href: "#" },
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: HelpCircle, href: "#" },
      { label: "Settings", icon: Settings, href: "#" },
    ],
  },
  user: {
    name: "About to login",
    email: "Please sign in",
    avatar: "",
  },
  workspaces: [
    {
      id: "1",
      name: "Shadcnblocks",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Enterprise",
    },
    {
      id: "2",
      name: "Shadcn Templates",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Startup",
    },
    {
      id: "3",
      name: "Shadcn Components",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Free",
    },
  ],
  activeWorkspace: "1",
};

// Static user identity
const NavUser = ({ user }) => {
  return (
    <div className="flex items-center gap-2 px-2">
      <Avatar className="size-8">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium">{user.name}</span>
    </div>
  );
};

export function ApplicationShell3({
  children,
  className,
}) {
  return (
    <div className={cn("flex min-h-svh flex-col", className)}>
      {/* Top navigation bar */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="flex h-14 items-center gap-4 px-4 lg:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Peedika"
              className="h-10 w-auto max-w-[180px] object-contain"
            />
          </a>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 w-64 pl-8"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="size-5" />
            </Button>
            {sidebarData.user && <NavUser user={sidebarData.user} />}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}

import { useState } from "react";
import { Button } from "./ui/button";
import { 
  Home, 
  BookOpen, 
  Sparkles, 
  Users, 
  BarChart3,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: '홈', icon: Home },
    { id: 'library', label: '내 서재', icon: BookOpen },
    { id: 'recommendations', label: '추천', icon: Sparkles },
    { id: 'social', label: '북클럽', icon: Users },
    { id: 'statistics', label: '통계', icon: BarChart3 }
  ];

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-card border-r flex-col p-4 z-10">
        <div className="mb-8">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen className="size-6 text-primary" />
            독서 친구
          </h2>
          <p className="text-sm text-muted-foreground mt-1">AI 도서 추천 & 소셜 플랫폼</p>
        </div>
        
        <div className="space-y-2 flex-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleTabChange(item.id)}
            >
              <item.icon className="size-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="text-sm text-muted-foreground space-y-1">
            <p>사용자: 독서애호가</p>
            <p>읽은 책: 29권</p>
            <p>목표: 48권/년</p>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 bg-card border-b p-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <BookOpen className="size-6 text-primary" />
            <h2 className="font-semibold">독서 친구</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-15" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <nav className={`fixed top-16 left-0 right-0 bg-card border-b p-4 space-y-2 z-15 transform transition-transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleTabChange(item.id)}
            >
              <item.icon className="size-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-card border-t p-2 flex justify-around z-10">
          {navItems.slice(0, 5).map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              size="sm"
              className="flex-col h-auto py-2 px-2"
              onClick={() => handleTabChange(item.id)}
            >
              <item.icon className="size-4" />
              <span className="text-xs mt-1">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </>
  );
}
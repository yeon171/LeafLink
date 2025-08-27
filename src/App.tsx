import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { MyLibrary } from "./components/MyLibrary";
import { Recommendations } from "./components/Recommendations";
import { SocialFeed } from "./components/SocialFeed";
import { Statistics } from "./components/Statistics";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'library':
        return <MyLibrary />;
      case 'recommendations':
        return <Recommendations />;
      case 'social':
        return <SocialFeed />;
      case 'statistics':
        return <Statistics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <main className="md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0">
        {renderContent()}
      </main>
    </div>
  );
}
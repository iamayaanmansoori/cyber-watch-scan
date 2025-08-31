import { useState } from "react";
import { Shield, RefreshCw, Activity, Eye, Brain, Zap, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlertCard } from "@/components/ui/alert-card";
import heroImage from "@/assets/hero-surveillance.jpg";
import robberyScene from "@/assets/robbery-scene.jpg";

const demoAlerts = [
  {
    id: 1,
    datetime: "2025-08-31 10:45 AM",
    items: "Knife",
    location: "Jaipur, MI Road, Shop #22",
    suspectImg: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Kitchen_knife.jpg",
    frameImg: "https://images.unsplash.com/photo-1581091012184-5c8a48f3d3f5"
  },
  {
    id: 2,
    datetime: "2025-08-31 10:50 AM",
    items: "Gun",
    location: "Jaipur, MI Road, Shop #22",
    suspectImg: "https://upload.wikimedia.org/wikipedia/commons/8/87/Glock_17_9mm.png",
    frameImg: "https://images.unsplash.com/photo-1602487952318-53c3df5f5a5c"
  },
  {
    id: 3,
    datetime: "2025-08-31 11:00 AM",
    items: "Cell Phone",
    location: "Jaipur, MI Road, Shop #22",
    suspectImg: "https://upload.wikimedia.org/wikipedia/commons/f/f1/IPhone_15_Pro_Blue_Titanium.png",
    frameImg: "https://images.unsplash.com/photo-1598887142486-0f83f3b6a1cb"
  },
  {
    id: 4,
    datetime: "2025-08-31 11:15 AM",
    items: "Knife",
    location: "Jaipur, MI Road, Shop #22",
    suspectImg: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    frameImg: robberyScene
  },
  {
    id: 5,
    datetime: "2025-08-31 11:30 AM",
    items: "Gun",
    location: "Jaipur, MI Road, Shop #22",
    suspectImg: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    frameImg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"
  }
];

export const SurveillanceDashboard = () => {
  const [alerts, setAlerts] = useState(demoAlerts);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setAlerts([...demoAlerts]);
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Surveillance Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-alert-success animate-ping" />
            <Eye className="w-10 h-10 text-surveillance-blue animate-float" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <Brain className="w-11 h-11 text-surveillance-purple animate-float" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
            AI-Powered CCTV
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
            Weapon Detection
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              A smart surveillance system that uses <span className="text-primary font-semibold">AI (YOLOv8)</span> to detect weapons like knives, guns, and suspicious objects in real-time.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <Zap className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Real-time Detection</h3>
                <p className="text-sm text-muted-foreground">Instant AI-powered weapon recognition with YOLOv8 technology</p>
              </div>
              
              <div className="bg-gradient-card p-6 rounded-xl border border-surveillance-blue/20 hover:border-surveillance-blue/40 transition-all duration-300 hover:shadow-glow">
                <Activity className="w-8 h-8 text-surveillance-blue mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Smart Alerts</h3>
                <p className="text-sm text-muted-foreground">Email & Telegram notifications with location details and evidence</p>
              </div>
              
              <div className="bg-gradient-card p-6 rounded-xl border border-surveillance-purple/20 hover:border-surveillance-purple/40 transition-all duration-300 hover:shadow-glow">
                <Shield className="w-8 h-8 text-surveillance-purple mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Audio Warnings</h3>
                <p className="text-sm text-muted-foreground">On-site beep & voice alerts for immediate response</p>
              </div>
            </div>
          </div>

          <div className="bg-alert-critical/10 border border-alert-critical/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-alert-critical font-medium">
              ⚡ Helping shop owners and authorities take quick action for better security
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3 text-foreground">
              Surveillance Alert Dashboard
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time weapon detection alerts from your CCTV network
            </p>
          </div>
          
          <Button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-glow hover:shadow-alert transition-all duration-300"
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh Alerts'}
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Alerts</p>
                <p className="text-3xl font-bold text-primary">{alerts.length}</p>
              </div>
              <Shield className="w-8 h-8 text-primary opacity-60" />
            </div>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Critical Threats</p>
                <p className="text-3xl font-bold text-alert-critical">
                  {alerts.filter(a => a.items.toLowerCase().includes('gun')).length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-alert-critical opacity-60" />
            </div>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Cameras</p>
                <p className="text-3xl font-bold text-surveillance-blue">12</p>
              </div>
              <Eye className="w-8 h-8 text-surveillance-blue opacity-60" />
            </div>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Detection Rate</p>
                <p className="text-3xl font-bold text-alert-success">99.2%</p>
              </div>
              <Brain className="w-8 h-8 text-alert-success opacity-60" />
            </div>
          </div>
        </div>

        {/* Alerts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </section>
    </div>
  );
};
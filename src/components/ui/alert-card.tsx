import { Clock, MapPin, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AlertData {
  id: number;
  datetime: string;
  items: string;
  location: string;
  suspectImg: string;
  frameImg: string;
}

interface AlertCardProps {
  alert: AlertData;
}

export const AlertCard = ({ alert }: AlertCardProps) => {
  const getAlertColor = (item: string) => {
    if (item.toLowerCase().includes('gun')) return 'border-alert-critical bg-alert-critical/5';
    if (item.toLowerCase().includes('knife')) return 'border-alert-warning bg-alert-warning/5';
    return 'border-surveillance-blue bg-surveillance-blue/5';
  };

  const getAlertIcon = (item: string) => {
    if (item.toLowerCase().includes('gun') || item.toLowerCase().includes('knife')) {
      return <AlertTriangle className="w-5 h-5 text-alert-critical animate-pulse" />;
    }
    return <AlertTriangle className="w-5 h-5 text-surveillance-blue" />;
  };

  return (
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-alert border-2 ${getAlertColor(alert.items)} bg-gradient-card backdrop-blur-sm hover:shadow-glow`}>
      <div className="absolute inset-0 bg-gradient-alert opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getAlertIcon(alert.items)}
            <span className="text-sm font-semibold text-alert-critical uppercase tracking-wider">
              THREAT DETECTED
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
            ID: {alert.id}
          </span>
        </div>

        {/* Alert Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-foreground font-medium">{alert.datetime}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-surveillance-purple" />
            <span className="text-muted-foreground">{alert.location}</span>
          </div>
        </div>

        {/* Detected Item */}
        <div className="bg-secondary/30 rounded-lg p-3 border border-border/50">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Detected Object
          </div>
          <div className="text-lg font-bold text-primary">
            {alert.items}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Suspect Object
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-border/50 bg-secondary/20">
              <img 
                src={alert.suspectImg} 
                alt={`Detected ${alert.items}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop";
                }}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              CCTV Frame
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-border/50 bg-secondary/20">
              <img 
                src={alert.frameImg} 
                alt="CCTV Frame"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop";
                }}
              />
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between pt-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-alert-critical/20 text-alert-critical border border-alert-critical/30">
            <div className="w-2 h-2 rounded-full bg-alert-critical animate-pulse" />
            ACTIVE ALERT
          </span>
          
          <div className="text-xs text-muted-foreground">
            Auto-detected • AI Verified
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface OrbitalItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  href: string;
  relatedIds: number[];
  status: "live" | "popular" | "new";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: OrbitalItem[];
  centerLabel?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  centerLabel = "OUTILS",
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: OrbitalItem["status"]): string => {
    switch (status) {
      case "popular":
        return "text-white bg-gradient-to-r from-purple-600 to-pink-600 border-pink-400";
      case "new":
        return "text-white bg-gradient-to-r from-orange-500 to-yellow-500 border-orange-400";
      case "live":
      default:
        return "text-white bg-purple-500/30 border-purple-400/60";
    }
  };

  return (
    <div
      className="w-full h-full min-h-[720px] flex flex-col items-center justify-center bg-transparent overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center node */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-pulse flex items-center justify-center z-10 shadow-2xl shadow-purple-500/50">
            <div className="absolute w-24 h-24 rounded-full border border-purple-300/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-28 h-28 rounded-full border border-pink-300/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center">
              <span className="text-[9px] font-black text-purple-700 tracking-wider">
                {centerLabel}
              </span>
            </div>
          </div>

          {/* Orbit circle */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-purple-400/15"></div>
          <div className="absolute w-[480px] h-[480px] rounded-full border border-pink-400/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform
                    ${isExpanded ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white border-white shadow-lg shadow-purple-500/60 scale-150" : isRelated ? "bg-purple-400/40 text-white border-purple-300 animate-pulse" : "bg-black text-white border-purple-400/50 hover:border-purple-300"}
                  `}
                >
                  <Icon size={18} />
                </div>

                <div
                  className={`
                    absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold tracking-wider transition-all duration-300
                    ${isExpanded ? "text-white scale-125" : "text-white/70"}
                  `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-72 bg-black/95 backdrop-blur-lg border-purple-500/40 shadow-2xl shadow-purple-500/20 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-purple-400/70"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                          {item.status === "popular" ? "POPULAIRE" : item.status === "new" ? "NOUVEAU" : "GRATUIT"}
                        </Badge>
                        <span className="text-[10px] font-mono text-white/50">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-purple-500/20">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center text-white/70">
                            <Zap size={10} className="mr-1" />
                            Utilité
                          </span>
                          <span className="font-mono text-white/80">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-purple-500/20">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-purple-300 mr-1" />
                            <h4 className="text-[10px] uppercase tracking-wider font-bold text-purple-300">
                              Outils liés
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-[10px] rounded-md border-purple-400/30 bg-transparent hover:bg-purple-500/20 text-white/80 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-purple-300" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <Link
                        href={item.href}
                        className="mt-4 flex items-center justify-center gap-1 px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                      >
                        Tester l&apos;outil <ArrowRight className="w-3 h-3" />
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/40 font-mono uppercase tracking-wider z-50">
        Cliquez sur un outil pour l&apos;explorer
      </div>
    </div>
  );
}

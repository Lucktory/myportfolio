import type { ComponentType, SVGProps } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Brain,
  Briefcase,
  Calendar,
  Cloud,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  School,
  Shield,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import type { IconKey } from "@/types";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

export const iconRegistry: Record<IconKey, IconComponent> = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  badgeCheck: BadgeCheck,
  brain: Brain,
  briefcase: Briefcase,
  calendar: Calendar,
  cloud: Cloud,
  code: Code2,
  cpu: Cpu,
  download: Download,
  external: ExternalLink,
  github: FaGithub as unknown as IconComponent,
  globe: Globe,
  graduation: GraduationCap,
  layers: Layers,
  linkedin: FaLinkedinIn as unknown as IconComponent,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  school: School,
  shield: Shield,
  sparkles: Sparkles,
  users: Users,
  wrench: Wrench,
  close: X,
};

export function getIcon(key: IconKey): IconComponent {
  return iconRegistry[key];
}

import { Archive, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import type { CareerStatus } from '../types/career.ts';

interface StatusIndicatorProps {
  status: CareerStatus;
  className?: string;
}

export function StatusIndicator({ status, className = '' }: StatusIndicatorProps) {
  const config: Record<
    CareerStatus,
    { label: string; textClass: string; Icon: typeof CheckCircle2 }
  > = {
    Current: {
      label: 'Current Profession',
      textClass: 'text-[#166534]',
      Icon: CheckCircle2,
    },
    Emerging: {
      label: 'Emerging Field',
      textClass: 'text-[#1E3A8A]',
      Icon: Sparkles,
    },
    Historical: {
      label: 'Historical Profession',
      textClass: 'text-[#92400E]',
      Icon: Clock,
    },
    Obsolete: {
      label: 'Obsolete Role',
      textClass: 'text-stone-600',
      Icon: Archive,
    },
  };

  const { label, textClass, Icon } = config[status] || config.Current;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wide whitespace-nowrap ${textClass} ${className}`}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

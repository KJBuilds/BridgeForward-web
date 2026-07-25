// BrainID: Sonnet 5 | Date: 2026-07-25 | Action: Added honest pending-feature banner to replace fake success states
import { Construction } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface WorkInProgressNoticeProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function WorkInProgressNotice({
  title = "This isn't connected yet",
  children,
  className,
}: WorkInProgressNoticeProps) {
  return (
    <Alert
      className={cn(
        "border-amber-500/40 bg-amber-500/10 [&>svg]:text-amber-600",
        className
      )}
    >
      <Construction className="h-4 w-4" />
      <AlertTitle className="text-amber-900">{title}</AlertTitle>
      <AlertDescription className="text-amber-800/90">{children}</AlertDescription>
    </Alert>
  );
}

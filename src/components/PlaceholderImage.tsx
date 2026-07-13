import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: "video" | "square" | "wide";
}

export default function PlaceholderImage({ label, aspectRatio = "video" }: PlaceholderImageProps) {
  const ratioClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${ratioClass} rounded-2xl bg-gradient-to-br from-muted via-purple-soft to-fuchsia-soft border border-border flex flex-col items-center justify-center gap-3`}
    >
      <ImageIcon className="w-10 h-10 text-muted-foreground/40" />
      <p className="text-sm text-muted-foreground/60 font-medium">{label}</p>
    </motion.div>
  );
}

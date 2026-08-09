"use client";

import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────── */
export type LiquidGlassDialogSize = "sm" | "md" | "lg" | "xl" | "full";

export interface LiquidGlassDialogProps {
  /** Controlled open state */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Optional subtitle below the title */
  image?: string;
  /** Dialog size */
  size?: LiquidGlassDialogSize;
  /** Show close button (default: true) */
  showClose?: boolean;
  /** Close when clicking the backdrop (default: true) */
  closeOnBackdrop?: boolean;
  /** Extra classes for the panel */
  className?: string;
  children?: React.ReactNode;
}

/* ─── Size Map ──────────────────────────────────────────────────── */
const SIZE_MAP: Record<LiquidGlassDialogSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-3xl",
};

/* ─── Sub-components ─────────────────────────────────────────────── */

export interface LiquidGlassDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const LiquidGlassDialogHeader: React.FC<
  LiquidGlassDialogHeaderProps
> = ({ className, children, ...props }) => (
  <div
    className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)}
    {...props}
  >
    {children}
  </div>
);
LiquidGlassDialogHeader.displayName = "LiquidGlassDialogHeader";

export interface LiquidGlassDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
export const LiquidGlassDialogTitle: React.FC<LiquidGlassDialogTitleProps> = ({
  className,
  children,
  ...props
}) => (
  <h2
    className={cn(
      "text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-snug",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);
LiquidGlassDialogTitle.displayName = "LiquidGlassDialogTitle";

export interface LiquidGlassDialogimageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}
export const LiquidGlassDialogimage: React.FC<LiquidGlassDialogimageProps> = ({
  className,
  children,
  ...props
}) => (
  <p
    className={cn(
      "text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium",
      className,
    )}
    {...props}
  >
    {children}
  </p>
);
LiquidGlassDialogimage.displayName = "LiquidGlassDialogimage";

export interface LiquidGlassDialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const LiquidGlassDialogBody: React.FC<LiquidGlassDialogBodyProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn("text-sm text-slate-700 dark:text-slate-200", className)}
    {...props}
  >
    {children}
  </div>
);
LiquidGlassDialogBody.displayName = "LiquidGlassDialogBody";

export interface LiquidGlassDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const LiquidGlassDialogFooter: React.FC<
  LiquidGlassDialogFooterProps
> = ({ className, children, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 pt-2",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
LiquidGlassDialogFooter.displayName = "LiquidGlassDialogFooter";

/* ─── Main Dialog ────────────────────────────────────────────────── */
export const LiquidGlassDialog: React.FC<LiquidGlassDialogProps> = ({
  open,
  onOpenChange,
  image,
  size = "md",
  showClose = true,
  closeOnBackdrop = true,
  className,
}) => {
  // Escape key closes dialog
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    },
    [onOpenChange],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* ── Frosted Backdrop ─────────────────────────────── */}
          <motion.div
            key="lg-dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeOnBackdrop ? () => onOpenChange(false) : undefined}
            className="fixed inset-0 z-99998 backdrop-blur-md "
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.65) 0%, rgba(30,0,60,0.55) 100%)",
            }}
            aria-hidden="true"
          />

          {/* ── Dialog Panel ─────────────────────────────────── */}
          <motion.div
            key="lg-dialog-panel"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed z-99999 inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className={cn(
                "relative w-full rounded-3xl pointer-events-auto",

                // Dark liquid glass
                "bg-slate-950/40",
                "backdrop-blur-2xl backdrop-saturate-150",

                // Glass border
                "border border-white/15",

                // Glass depth
                "shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5)]",

                SIZE_MAP[size],
                className,
              )}
            >
              {/* ── Close Button ───────────────────────────────── */}
              {showClose && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onOpenChange(false)}
                  type="button"
                  aria-label="Close dialog"
                  className={cn(
                    "absolute -top-7 -right-2 md:-top-5 md:-right-5 z-20 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer",
                    "bg-slate-900/10 dark:bg-black/40 hover:bg-slate-900/20 dark:hover:bg-black/60",
                    "border border-slate-900/15 dark:border-white/30",
                    "shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.3)]",
                    "text-slate-800 dark:text-white",
                  )}
                >
                  <X className="w-4 h-4 stroke-[2.5] text-white" />
                </motion.button>
              )}

              {/* ── Content ────────────────────────────────────── */}
              {image && (
                <div className="relative z-10 flex flex-col gap-4 ">
                  {/* Header (title + image) */}

                  <img
                    src={image}
                    alt="Dialog image"
                    className="
                    w-full
                    h-auto
                    rounded-2xl
                    border border-white/10
                    shadow-[0_20px_50px_rgba(0,0,0,0.45)]
"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

LiquidGlassDialog.displayName = "LiquidGlassDialog";
export default LiquidGlassDialog;

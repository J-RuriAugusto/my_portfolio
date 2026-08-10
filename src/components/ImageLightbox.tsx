import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn, FiZoomOut, FiRotateCcw } from "react-icons/fi";

interface ImageLightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const SCALE_STEP = 0.6;

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
    const [scale, setScale] = useState(1);
    const constraintsRef = useRef<HTMLDivElement>(null);

    // Escape key closes the lightbox.
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", onKeyDown);
        // Prevent the page from scrolling behind the lightbox.
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
        window.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    function zoomIn() {
        setScale((s) => Math.min(MAX_SCALE, +(s + SCALE_STEP).toFixed(2)));
    }

    function zoomOut() {
        setScale((s) => Math.max(MIN_SCALE, +(s - SCALE_STEP).toFixed(2)));
    }

    function reset() {
        setScale(1);
    }

    function handleWheel(e: React.WheelEvent) {
        e.preventDefault();
        if (e.deltaY < 0) zoomIn();
        else zoomOut();
    }

    function handleDoubleClick() {
        setScale((s) => (s > 1 ? 1 : 2.2));
    }

    return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
        >
            {/* Toolbar */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 z-10 flex items-center gap-2"
            >
                <button
                    type="button"
                    onClick={zoomOut}
                    disabled={scale <= MIN_SCALE}
                    aria-label="Zoom out"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 disabled:opacity-40"
                >
                    <FiZoomOut size={17} />
                </button>
                <button
                    type="button"
                    onClick={zoomIn}
                    disabled={scale >= MAX_SCALE}
                    aria-label="Zoom in"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 disabled:opacity-40"
                >
                    <FiZoomIn size={17} />
                </button>
                <button
                    type="button"
                    onClick={reset}
                    disabled={scale === 1}
                    aria-label="Reset zoom"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 disabled:opacity-40"
                >
                    <FiRotateCcw size={15} />
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                    <FiX size={18} />
                </button>
            </div>

            {/* Zoom viewport */}
            <div
                ref={constraintsRef}
                onClick={(e) => e.stopPropagation()}
                onWheel={handleWheel}
                className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-20"
            >
            <motion.img
                src={src}
                alt={alt}
                drag={scale > 1}
                dragConstraints={constraintsRef}
                dragElastic={0.05}
                onDoubleClick={handleDoubleClick}
                animate={{ scale }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                draggable={false}
                className={`max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl ${
                scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                }`}
            />
            </div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/60">
            Scroll or use the controls to zoom &middot; double-click to reset &middot; Esc to close
            </p>
        </motion.div>
        </AnimatePresence>
    );
}
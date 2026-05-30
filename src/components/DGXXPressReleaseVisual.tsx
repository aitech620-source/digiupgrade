import React from 'react';
import { motion } from 'framer-motion';
import { GLASS_LAYERS } from './dgxxGlassLayers';

/**
 * DGXXPressReleaseVisual
 * The "DGXX · Glass Stack" press-release animation: four overlapping brand
 * layers (embedded as base64 PNGs) drift together in a slow 7s float loop over
 * a dark warm-vignette stage. Ported from the standalone glass-stack mockup to
 * the repo's component conventions (self-contained, fills its parent, no
 * external assets). The leftmost layer sits on top ("logo on front").
 */

const DGXXPressReleaseVisual: React.FC = () => {
  return (
    <div className="w-full h-full" style={{ fontFamily: 'monospace' }}>
      {/* Card chrome */}
      <div className="w-full h-full flex flex-col overflow-hidden rounded-[14px] border border-[#1c1c1c] bg-black">
        {/* Header strip */}
        <div className="flex items-center justify-between border-b border-[#141414] px-4 py-2.5">
          <span className="text-[13px] font-semibold tracking-[1px] text-[#FFD43B]">
            DGXX · GLASS STACK
          </span>
          <span className="text-[11px] text-[#6b5a1e]">logo on front · floating</span>
        </div>

        {/* Stage */}
        <div
          className="relative w-full flex-1 overflow-hidden"
          style={{
            aspectRatio: '1536 / 1024',
            background:
              'radial-gradient(130% 100% at 30% 25%, #120f08 0%, #000 60%)',
          }}
        >
          {/* Floating group — the whole stack drifts as one unit */}
          <motion.div
            className="absolute inset-0"
            style={{ willChange: 'transform' }}
            animate={{
              y: ['0%', '-3.2%', '-1.2%', '-3.8%', '0%'],
              x: ['0%', '0.8%', '0%', '-0.8%', '0%'],
            }}
            transition={{
              duration: 7,
              ease: 'easeInOut',
              repeat: Infinity,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            {GLASS_LAYERS.map((layer, i) => (
              <img
                key={i}
                src={layer.src}
                alt=""
                className="absolute top-0 h-full"
                style={{
                  left: `${layer.left}%`,
                  width: `${layer.width}%`,
                  zIndex: layer.z,
                  objectFit: 'fill',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DGXXPressReleaseVisual;

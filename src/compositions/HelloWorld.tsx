import React from "react";
import { z } from "zod";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const helloWorldSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

export const HelloWorld: React.FC<z.infer<typeof helloWorldSchema>> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 200 } });
  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b1021",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 120,
          fontWeight: 800,
          color: "white",
          margin: 0,
          transform: `scale(${scale})`,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 48,
          color: "#8ab4ff",
          marginTop: 24,
          opacity: subtitleOpacity,
        }}
      >
        {subtitle}
      </p>
    </AbsoluteFill>
  );
};

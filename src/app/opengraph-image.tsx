import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Rushang Shah. Software and solutions engineer in Fremont, CA.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [display, sans] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/BodoniModa-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/HankenGrotesk-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0f1418",
          color: "#e8ebee",
          fontFamily: "Bodoni Moda",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.14em",
            color: "#7f8b94",
            fontFamily: "Hanken Grotesk",
          }}
        >
          <span>RUSHANG SHAH</span>
          <span>FREMONT, CA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: "-0.01em" }}>
            Rushang Shah
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              color: "#a9b2ba",
              maxWidth: 940,
              fontFamily: "Hanken Grotesk",
            }}
          >
            Software and solutions engineer. Backend systems, LLM services,
            and internal platforms, sized for the load they will actually see.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.14em",
            color: "#d4b56c",
            fontFamily: "Hanken Grotesk",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#d4b56c",
            }}
          />
          <span>SHAHRUSHANG.COM · RUNNING ON ITS OWN HOST</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bodoni Moda", data: display, style: "normal", weight: 400 },
        { name: "Hanken Grotesk", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}

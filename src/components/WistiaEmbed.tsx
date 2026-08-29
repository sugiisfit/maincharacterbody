"use client";

export default function WistiaEmbed({ videoId }: { videoId: string }) {
  return (
    <div style={{ width: "100%", paddingTop: "56.25%", position: "relative", borderRadius: 10, overflow: "hidden", background: "#111" }}>
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${videoId}?videoFoam=true`}
        title="VSL"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}

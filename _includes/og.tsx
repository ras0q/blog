// Used for OG images

import { siteTitle } from "../_config.ts";
import { Post } from "../generators/types.d.ts";

export default function (data: Lume.Data & Post) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontSize: 32,
        padding: "2rem",
        position: "relative",
      }}
    >
      <h1>{data.title}</h1>
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        {data.tags.map((tag) => (
          <div key={tag} style={{ display: "flex" }}>#{tag}</div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
        }}
      >
        {siteTitle}
      </div>
    </div>
  );
}

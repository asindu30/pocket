// preview page for newly created UI components

import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Component Preview</h2>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.125rem", fontWeight: "600" }}>Skeleton Component</h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
          {/* Skeleton Card */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Card Variant</p>
            <Skeleton variant="card" />
          </div>

          {/* Avatar Skeleton */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Avatar Variant</p>
            <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
              <Skeleton variant="avatar" />
            </div>
          </div>

          {/* Text Skeleton */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Text Variant</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Skeleton variant="text" width="100%" height="16px" />
              <Skeleton variant="text" width="100%" height="16px" />
              <Skeleton variant="text" width="80%" height="16px" />
            </div>
          </div>

          {/* Line Skeleton */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Line Variant</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Skeleton variant="line" width="100%" height="12px" />
              <Skeleton variant="line" width="100%" height="12px" />
              <Skeleton variant="line" width="60%" height="12px" />
            </div>
          </div>

          {/* Custom Sizes */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Custom Sizes</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Skeleton variant="text" width="100%" height="24px" />
              <Skeleton variant="text" width="100%" height="14px" />
              <Skeleton variant="text" width="70%" height="14px" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.125rem", fontWeight: "600" }}>Avatar Component</h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
          {/* Single Word Name */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Single Word (First Letter)</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Avatar name="Alice" size="md" />
              <Avatar name="Bob" size="lg" />
              <Avatar name="Charlie" size="sm" />
            </div>
          </div>

          {/* Multi-Word Name */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Multi-Word (First 2 Letters)</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Avatar name="Jane Smith" size="md" />
              <Avatar name="John Doe" size="lg" />
              <Avatar name="Mary Johnson" size="sm" />
            </div>
          </div>

          {/* PascalCase Name */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>PascalCase (First 2 Uppercase)</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Avatar name="JohnDoe" size="md" />
              <Avatar name="AliceBrown" size="lg" />
              <Avatar name="CharlieEvans" size="sm" />
            </div>
          </div>

          {/* All Sizes */}
          <div style={{ padding: "1rem", border: "1px solid #101828", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "#99A1AF" }}>Size Variants</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Avatar name="Small" size="sm" />
              <Avatar name="Medium" size="md" />
              <Avatar name="Large" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

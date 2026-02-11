// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="center-content" style={{ flex: 1 }}>
        <div className="page-content">
          <h1>
            P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
          </h1>
          <div>Coordinate. Execute. Celebrate.</div>

          <div style={{ marginTop: "2rem", maxWidth: "500px", lineHeight: "1.6", color: "#ccc" }}>
            <p>
              Welcome to Pocket Heist, where workplace pranks meet strategic planning. Organize your team,
              assign missions, and execute the perfect office heist with precision and style.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Whether you&apos;re planning a surprise celebration, coordinating a team scavenger hunt, or just
              keeping things interesting at the office, Pocket Heist is your go-to platform for organized chaos.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Create heists, invite your team members, track progress, and watch as your plans unfold.
              Every mission counts. Every moment matters. Are you ready to pull off the perfect heist?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import Footer from "@/components/Footer"

export default function SignupPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="center-content" style={{ flex: 1 }}>
        <div className="page-content">
          <h2 className="form-title">Signup for an Account</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // อัพเดต state เพื่อแสดง fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // แสดง fallback UI แทนที่จะเป็นจอขาว
      return (
        <div
          style={{
            padding: "20px",
            margin: "20px",
            border: "1px solid #ff6b6b",
            borderRadius: "8px",
            backgroundColor: "#ffe0e0",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2 style={{ color: "#d63031", marginBottom: "10px" }}>
            เกิดข้อผิดพลาด!
          </h2>
          <p style={{ marginBottom: "15px" }}>
            แอปพลิเคชันเกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองรีเฟรชหน้า
          </p>

          {/* แสดงรายละเอียด error ใน development mode */}
          {process.env.NODE_ENV === "development" && (
            <details style={{ marginTop: "10px" }}>
              <summary style={{ cursor: "pointer", marginBottom: "10px" }}>
                รายละเอียดข้อผิดพลาด (Development Mode)
              </summary>
              <pre
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "10px",
                  overflow: "auto",
                  fontSize: "12px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}

          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: "#0984e3",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            รีเฟรชหน้า
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

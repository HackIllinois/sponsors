export default function Home() {
  return (
    <div style={{ height: '100svh' }}>
      <object
        data="/sponsors.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>Your browser does not support PDFs. <a href="/sponsors.pdf">Download the PDF</a>.</p>
      </object>
    </div>
  );
}

import pdfSvg from '../../cv/pdf.svg'

export function CvHeader() {
  return (
    <>
      <h1>
        Dániel Kántor <span>developer</span>
      </h1>
      <p>
        <a
          className="top-button"
          href="http://daniel-kantor.com/cv/cv_daniel_kantor_developer.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          <img src={pdfSvg} alt="" /> Download PDF
        </a>
      </p>
    </>
  )
}

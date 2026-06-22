import pdfSvg from '../../cv/pdf.svg'

export function CvHeader() {
  return (
    <>
      <h1 className="text-[2.618rem] mt-[2.618rem] mb-[5.5rem] max-[700px]:mb-[2.618rem] leading-none text-[#e16552] font-heading">
        Dániel Kántor <span className="text-[0.5em] block text-[#7c9fb0] text-right w-[8.82rem] mb-[-1em]">developer</span>
      </h1>
      <p className="m-0">
        <a
          className="fixed top-2 right-4 z-[10000] text-[0.8rem] text-inherit no-underline py-[0.1rem] px-[0.3rem] rounded-[0.3rem] bg-linear-to-b from-[#F9F9F9] to-[#e3e3e3] shadow-[1px_2px_4px_1px_rgba(0,0,0,0.302)] active:bg-[#e3e3e3] active:shadow-none print:hidden"
          href="http://daniel-kantor.com/cv/cv_daniel_kantor_developer.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          <img src={pdfSvg} alt="" className="inline-block w-[0.8rem] h-[0.8rem] mb-[-0.1rem]" /> Download PDF
        </a>
      </p>
    </>
  )
}

export function ContactInfo() {
  return (
    <address className="absolute top-[3.618rem] right-[5.618rem] max-[700px]:static max-[700px]:my-8 not-italic">
      <p className="m-0">www.daniel-kantor.com/cv</p>
      <dl className="m-0">
        <div><dt className="inline font-semibold">Email</dt>{': '}<dd className="inline">cv@daniel-kantor.com</dd></div>
        <div><dt className="inline font-semibold">Location</dt>{': '}<dd className="inline">Barcelona, Spain</dd></div>
        <div><dt className="inline font-semibold">Date of Birth</dt>{': '}<dd className="inline">May 1993</dd></div>
      </dl>
    </address>
  )
}

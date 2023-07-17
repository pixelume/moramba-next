import { getEstablishment } from "@/lib/utils"
import { PageWrapper } from "@/components/page-wrapper"

import { ContactForm } from "./components/contact-form"

export default async function ContactPage() {
  const { data } = await getEstablishment()
  const {
    attributes: { establishmentName, EstablishmentAddress },
  } = data
  const {
    address1,
    address2,
    townOrCity,
    country,
    postalCode,
    contactPersons,
  } = EstablishmentAddress ?? {}

  return (
    <div className="relative">
      <PageWrapper>
        <div className="container flex flex-col items-center gap-y-7 pb-8 pt-6 md:py-10">
          <div className="mb-6 w-full rounded-lg bg-accent p-5 sm:w-2/3 md:w-1/2">
            <h2 className="mb-6 text-center text-3xl">Contact us</h2>
            <ContactForm />
          </div>
          <div className="flex flex-wrap items-start gap-6 lg:flex-nowrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.386736611108!2d25.58608957531487!3d-33.982598873183335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad20da85be073%3A0x3c66fd549478ce19!2sMoramba%20Self%20Catering!5e0!3m2!1sen!2sza!4v1689340662196!5m2!1sen!2sza"
              // width="600"
              className="aspect-[4/3] h-[262px] w-[350px] sm:h-[450px] sm:w-[600px]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col items-start gap-y-7">
              <h2 className="text-3xl">{data.attributes.establishmentName}</h2>
              <div>
                <p>
                  {address1}
                  <br />
                  {address2}
                  <br />
                  {townOrCity}
                  <br />
                  {country}
                  <br />
                  {postalCode}
                </p>
              </div>
              <h3 className="text-xl">Phone or Whatsapp:</h3>
              <div>
                {contactPersons?.map((contactPerson) => {
                  const { contactPersonName, contactPersonPhone } =
                    contactPerson
                  return (
                    <p key={contactPersonName}>
                      {contactPersonName} - {contactPersonPhone}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

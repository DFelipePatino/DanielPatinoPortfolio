import { CONTACT_INFO, CONTACT, ContactInfoItem, ArrowLink } from "../OOPData/Contact-data";

const Contact = () => {
    return (
        <>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>

                <div className="contact-info-upper-container">
                    {CONTACT_INFO.map((contact, index) => (
                        <ContactInfoItem key={index} {...contact} />
                    ))}
                </div>
            </section>

            <ArrowLink href={CONTACT.arrowUpLink} icon={CONTACT.arrowUpIcon} alt="Arrow icon" className="icon arrowup" />
        </>
    );
};

export default Contact;
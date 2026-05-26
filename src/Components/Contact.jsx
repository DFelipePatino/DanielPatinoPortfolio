import { useTheme } from "../Context/ThemeContext";
import { DEV_CONTACT_INFO, CX_CONTACT_INFO, CONTACT, ContactInfoItem, ArrowLink } from "../OOPData/Contact-data";

const Contact = () => {
    // Single source of truth context tracking
    const { isDarkMode } = useTheme();

    // Select Upwork stack or standard LinkedIn stack based on persona choice
    const currentContactInfo = isDarkMode ? CX_CONTACT_INFO : DEV_CONTACT_INFO;

    return (
        <>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>

                <div className="contact-info-upper-container">
                    {currentContactInfo.map((contact, index) => (
                        <ContactInfoItem key={index} {...contact} />
                    ))}
                </div>
            </section>

            <ArrowLink href={CONTACT.arrowUpLink} icon={CONTACT.arrowUpIcon} alt="Arrow icon" className="icon arrowup" />
        </>
    );
};

export default Contact;
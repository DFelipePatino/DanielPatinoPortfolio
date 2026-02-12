import { SOCIALS, PROFILE, ButtonLink, ACTIONS, SocialIcon } from "../OOPData/MyNameIs-data"

const MyNameIs = ({ tiltX, tiltY, setTiltX, setTiltY }) => {
    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (centerY - mouseY) / centerY;
        setTiltX(deltaX * 20);
        setTiltY(deltaY * 10);
    };

    const handleMouseLeave = () => {
        setTiltX(0);
        setTiltY(0);
    };

    return (
        <section id="profile" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="section__pic-container">
                <img
                    src={PROFILE.image}
                    alt={`${PROFILE.name} profile picture`}
                    style={{ transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)` }}
                />
            </div>

            <div className="section__text">
                <p className="section__text__p1">Hello, I&apos;m</p>
                <h1 className="title">{PROFILE.name}</h1>
                <p className="section__text__p2">{PROFILE.title}</p>

                <div className="btn-container">
                    {ACTIONS.map((action) => (
                        <ButtonLink key={action.label} {...action} />
                    ))}
                </div>

                <div id="socials-container">
                    {SOCIALS.map((social) => (
                        <SocialIcon key={social.href} {...social} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyNameIs;

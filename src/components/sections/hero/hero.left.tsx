import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from 'helpers/data';
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface IProps {
    scrollToSkills: () => void
}

const HeroLeft = (props: IProps) => {
    const { scrollToSkills } = props;

    const { t } = useTranslation();

    const handleDownloadCV = () => {
        const url: string = "https://drive.google.com/file/d/1EHhS-2neYvAyVkkpcVTr4Y4exvzVyXld/view?usp=sharing"
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='hero-left'>
            <h3>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'M &nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        "Self-taught Developer",
                        "Technical Consultant",
                        "Software engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div
                className="mt-md-6 mt-3 mb-md-5 mb-2"
            >
                <SocialMedia
                    gmail={APP_DATA.GMAIL_URL}
                    linkedin={APP_DATA.LINKEDIN_URL}
                    zalo={APP_DATA.ZALO_URL}
                    facebook={APP_DATA.FACEBOOK_URL}
                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire style={{ color: "orange" }} />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                    onClick={scrollToSkills}
                />
                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownloadCV}
                />

            </div>

        </div>
    )
}

export default HeroLeft;
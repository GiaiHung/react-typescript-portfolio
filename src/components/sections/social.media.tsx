import { FaFacebook } from "react-icons/fa6";
import { SiGmail, SiZalo } from "react-icons/si";
import { FaLinkedin, } from "react-icons/fa";

interface IProps {
    gmail: string,
    linkedin: string,
    zalo: string,
    facebook: string
}

const SocialMedia = (props: IProps) => {
    const { gmail, linkedin, zalo, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={gmail} target='_blank' className="highlight" title="My Gmail: hunggiaitruong288@gmail.com">
                <SiGmail size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="My LinkedIn">
                <FaLinkedin size={30} />
            </a>
            <a href={zalo} target='_blank' className="highlight" title="My Zalo">
                <SiZalo size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="My Facebook">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;
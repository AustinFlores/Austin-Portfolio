
import '../../styles/landingPage/Certificates.css';

const certificateData = [
    { name: "Google UX Design Certificate", date: "2023" },
    { name: "Meta Front-End Developer Certificate", date: "2023" },
    { name: "Certificate NameComputer Systems Servicing NC III", date: "2025" },
];

const CertificateEntry = ({ name, date }) => (
    <div className="certificate-entry">
        <h3 className="certificate-name">{name}</h3>
        <p className="certificate-date">{date}</p>
    </div>
);

const Certificates = () => {
    return (
        <section className="certificates-section" id='certificate-section'>
            <div className="content-container certificate-layout">
                {/* Left side: Certificate List */}
                <div className="certificates-list-column">
                    {certificateData.map((cert, index) => (
                        <CertificateEntry key={index} {...cert} />
                    ))}
                </div>

                {/* Right side: Large Split Header */}
                <div className="certificates-title-column">
                    <h2 className="certificates-title title">
                        CERTIFI<br/>CATES
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
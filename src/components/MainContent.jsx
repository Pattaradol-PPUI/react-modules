import { Button } from "./common/Button";
export function MainContent() {
    return (
        <main>
            <div className="company-detail-left">
                <h1>Welcome to XYZ Corp</h1>
                <p>Your Trusted Partner in Excellence</p>
                <img src="https://placehold.co/300x300" />
            </div>
            <div className="company-detail-right">
                <h2>About Our Company</h2>
                <p>
                    Welcome to XYZ Corp, where excellence meets innovation. We are a
                    passionate team dedicated to providing high-quality solutions for the
                    technology industry. With a track record of 10 years of success, we
                    have become a trusted partner for clients worldwide.
                </p>
                <p>
                    Our mission is to empower businesses through cutting-edge technology.
                    We believe in integrity, collaboration, and innovation, and we strive
                    to make a positive impact on businesses and communities alike.
                </p>
                <p>
                    At XYZ Corp, we take pride in our commitment to staying at the
                    forefront of technological advancements. Our team of experts is ready
                    to collaborate with you to tackle your most complex challenges and
                    drive your success.
                </p>
                <Button buttonText="Learn More" buttonStyle="learn-button" />
            </div>
        </main>
    );
}
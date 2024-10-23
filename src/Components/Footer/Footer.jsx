
const Footer = () => {
    return (
        <footer className="footer bg-slate-800 text-base-content text-white py-10 w-full flex">
            <aside className="w-2/5 px-7">
                <h2 className="text-3xl font-bold mb-4">Career Craft</h2>
                <p className="">
                There are many variations of passages <br /> of Lorem Ipsum , but the majority have suffered <br /> alteration in some form.
                </p>
            </aside>
            {/* <div className="w-1/5"></div> */}
            <nav className="w-1/5 justify-center">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="w-1/5 justify-center">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="w-1/5 justify-center">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
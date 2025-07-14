"use client";

const BottomFooter = () => {
    return (
        <>
            <footer className="c-space h-[7rem] pt-4 pb-3 border-t border-black-300 flex flex-col justify-between items-center ">
                <div className="text-white-500 flex gap-2 ">
                    <p>Terms & Conditions</p>
                    <span>|</span>
                    <p>Privacy Policy</p>
                </div>
                <div className="flex gap-3">
                    <div className="social-icon">
                        <a href="https://github.com/unstopablesid" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-github.svg" alt="github" className="w-8 h-8" />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://x.com/Mayur_nikumbh07" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/twitter.svg" alt="twitter" className="w-8 h-8"  />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.instagram.com/mayurnikumbh07/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram.svg" alt="instagram" className="w-8 h-8"  />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/mayur-nikumbh/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.svg" alt="linkedin" className="w-8 h-8"  />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default BottomFooter;
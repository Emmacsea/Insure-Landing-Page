import intro from "../assets/images/image-intro-desktop.jpg";
import imgright from "../assets/images/bg-pattern-intro-right-desktop.svg";
import imgleft from "../assets/images/bg-pattern-intro-left-desktop.svg";
import process from "../assets/images/icon-snappy-process.svg";
import price from "../assets/images/icon-affordable-prices.svg";
import pple from "../assets/images/icon-people-first.svg";
import work from "../assets/images/bg-pattern-how-we-work-desktop.svg";
import workm from "../assets/images/bg-pattern-how-we-work-mobile.svg"
import fb from "../assets/images/icon-facebook.svg";
import twit from "../assets/images/icon-twitter.svg";
import pinte from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";
import imgfoot from "../assets/images/bg-pattern-footer-desktop.svg";
import menu from "../assets/images/bg-pattern-mobile-nav.svg"

export const Insurance = () => {
  return (
    <>
      <div className="md:flex flex-col">
        <header>
          <nav className="lg:flex justify-between items-center py-4 px-40">
            <div>
              <h2 className="head text-2xl ">Insure</h2>
            </div>

            <ul className="flex justify-center items-center">
              <li className="nav">
                <a href="">How we work</a>
              </li>
              <li className="nav">
                <a href="">Blog</a>
              </li>
              <li className="nav">
                <a href="">Account</a>
              </li>
              <li className="head btn border-primary-darkviolet border-4 ">
                <a href="">View Plans</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="relative">
            <div className="flex justify-between items-center bg-primary-darkviolet w-full h-auto px-48 py-20 relative">
              <div className="">
                <div className="w-52 py-10 border-t-neutral-vlightgray border-t-2">
                  <span></span>
                </div>
                <h2 className="font-semibold text-nowrap text-neutral-vlightgray text-8xl">
                  Humanizing <br /> your insurance.
                </h2>
                <p className="py-10 font-light text-neutral-vlightgray text-xl">
                  Get your life insurance coverage easier and faster. We blend
                  our expertise <br /> and technology to help you find the plan
                  that's right for you. Ensure you <br /> and loced ones are
                  protected.
                </p>

                <p className="btn bgbtn w-40 my-4 ">
                  <a href="#">View Plans</a>
                </p>
              </div>
              <div>
                <div className="absolute right-40 top-40 ">
                  <img src={intro} alt="" />
                </div>
                <div className="absolute top-0 right-0">
                  <img src={imgright} alt="" />
                </div>
              </div>
            </div>

            <div className="absolute top-96 left-0 mt-24">
              <img src={imgleft} alt="" />
            </div>

            <div className="py-64 px-48">
              <div className="w-52 border-t-primary-darkviolet border-t-2">
                <span></span>
              </div>

              <div>
                <h2 className="text-neutral-vdarkviolet text-4xl md:text-6xl font-bold py-20">
                  We're different
                </h2>
                <div className="flex flex-col space-y-12 justify-center items-center text-center md:flex-row md:justify-between md:items-center md:space-x-9">
                  <div>
                    <img src={process} alt="" />
                    <h3 className="det">Snappy Process</h3>
                    <p className="detp">
                      Our application process can be completed in minutes, not
                      hours. Don't get stuck filling in tedious forms.
                    </p>
                  </div>

                  <div>
                    <img src={price} alt="" />
                    <h3 className="det">Affordable Prices</h3>
                    <p className="detp">
                      We don't want you worrying about high monthly costs. Our
                      prices may be low, but we still offer the best coverage
                      possible.
                    </p>
                  </div>

                  <div>
                    <img src={pple} alt="" />
                    <h3 className="det">People First</h3>
                    <p className="detp">
                      Our plans aren't full of conditions and clauses to prevent
                      payouts. We make sure you're covered when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="relative flex flex-col md:flex-row md:justify-between items-center bg-primary-darkviolet h-auto py-16 md:px-24 mb-28 mx-48 ">
            <div>
              <p className="text-neutral-vlightgray text-3xl text-center md:text-6xl font-bold ">
                Find out more <br /> about how we work
              </p>
            </div>

            <div>
              <div className="absolute md:hidden right-0 top-0">
                <img src={work} alt="" />

              </div>
              
              <p className="btn bgbtn w-40 my-4 ">
                <a href="#">How we work</a>
              </p>
            </div>
          </div>

          <div className="relative px-48 py-8 bg-neutral-vlightgray">
            <div className="absolute left-0 top-0">
              <img src={imgfoot} alt="" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-5 py-8 border-b-primary-grayishblue border-b-2">
              <h2 className="head text-2xl ">Insure</h2>
              <div className="flex gap-5">
                <img src={fb} alt="" />
                <img src={twit} alt="" />
                <img src={pinte} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center   md:flex-row md:justify-between md:items-start space-y-8 mt-12">
              <div>
              <h3 className="foothead">Our Company</h3>
              <div className="footdetails space-y-3">
                <p className="">
                  <a href="#">How we work</a>
                </p>
                <p className="">
                  <a href="#">Why Insure?</a>
                </p>
                <p className="">
                  <a href="#">View Plans</a>
                </p>
                <p className="">
                  <a href="#">Reviews</a>
                </p>
              </div>
              </div>

              <div>
              <h3 className="foothead">Help Me</h3>
              <div className="footdetails">
              <p className="mb-3">
                  <a href="#">Faq</a>
                </p>
                <p className="mb-3">
                  <a href="#">Terms of use</a>
                </p>
                <p className="mb-3">
                  <a href="#">Privacy Policy</a>
                </p>
                <p className="mb-3">
                  <a href="#">Cookies</a>
                </p>
              </div>
              </div>

              <div>
              <h3 className="foothead">Contact</h3>
              <div className="footdetails">
              <p className="mb-3">
                  <a href="#">Sales</a>
                </p>
                <p className="mb-3">
                  <a href="#">Support?</a>
                </p>
                <p className="mb-3">
                  <a href="#">Live chat</a>
                </p>                
              </div>
              </div>

              <div>
              <h3 className="foothead">Others</h3>
              <div className="footdetails">
              <p className="mb-3">
                  <a href="#">Careers</a>
                </p>
                <p className="mb-3">
                  <a href="#">Press</a>
                </p>
                <p className="mb-3">
                  <a href="#">Licenses</a>
                </p>                
              </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

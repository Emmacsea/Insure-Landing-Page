import { useState } from "react";
import introdesktop from "../assets/images/image-intro-desktop.jpg";
import intromobile from "../assets/images/image-intro-mobile.jpg";
import imgdesktopright from "../assets/images/bg-pattern-intro-right-desktop.svg";
import imgmobileright from "../assets/images/bg-pattern-intro-right-mobile.svg"
import imgdesktopleft from "../assets/images/bg-pattern-intro-left-desktop.svg";
import imgmobileleft from "../assets/images/bg-pattern-intro-left-mobile.svg";
import process from "../assets/images/icon-snappy-process.svg";
import price from "../assets/images/icon-affordable-prices.svg";
import pple from "../assets/images/icon-people-first.svg";
import workdesktop from "../assets/images/bg-pattern-how-we-work-desktop.svg";
import workmobile from "../assets/images/bg-pattern-how-we-work-mobile.svg";
import fb from "../assets/images/icon-facebook.svg";
import twit from "../assets/images/icon-twitter.svg";
import pinte from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";
import imgdesktopfoot from "../assets/images/bg-pattern-footer-desktop.svg";
import imgmobilefoot from "../assets/images/bg-pattern-footer-mobile.svg";
import menunav from "../assets/images/bg-pattern-mobile-nav.svg";
import menuclose from "../assets/images/icon-close.svg";
import menuopen from "../assets/images/icon-hamburger.svg"

export const Insurance = () => {
  const [isMenu, setMenu] = useState(false);


  return (
    <>
      <div className="flex flex-col h-full ">
        <header className="relative">
          <nav className="flex justify-between items-center py-4 md:px-40 px-7">
            <div>
              <h2 className="head text-2xl ">Insure</h2>
            </div>

            <ul className="hidden md:flex justify-center items-center">
              <li className="nav">
                <a href="">How we work</a>
              </li>
              <li className="nav">
                <a href="">Blog</a>
              </li>
              <li className="nav">
                <a href="">Account</a>
              </li>
              <li className="head border-primary-darkviolet border-4 ">
                <a href="">View Plans</a>
              </li>
            </ul>

            {/* {Mobile View } */}
            <div className="block md:hidden">
              <button type="click" onClick={() => setMenu(!isMenu)}>
                <img src={isMenu ? menuclose : menuopen} alt="" />
              </button>
            </div>

            {isMenu && (
              <div className="absolute top-16 left-0 right-0  z-10 bg-neutral-vdarkviolet min-w-full flex flex-col justify-center items-center h-auto pt-10">
              <nav>
                <ul className="mobile-nav">
                  <li>How we Work</li>
                  <li>Blog</li>
                  <li>Account</li>
                  <li>
                    <button className="mobile-btn">
                      View Plans
                    </button>
                  </li>
                </ul>
              </nav>

              <div>
                <div className="mt-10">
                  <img src={menunav} alt="" />
                </div>
              </div>
            </div>
            )}
          </nav>
        </header>

        <main>
          <section className="">
            <div className="flex md:flex-row flex-col justify-between items-center bg-primary-darkviolet w-full h-auto md:px-40 md:py-20 relative">
              <div className="">
                <div className="md:block hidden w-52 py-10 border-t-neutral-vlightgray border-t-2">
                  <span></span>
                </div>
                <div>
                  <div className="md:hidden block z-10">
                    <img src={intromobile} alt="" />
                  </div>
                </div>
                <div className="md:px-0 md:mr-16 px-10 md:py-0 py-10 md:block flex flex-col justify-center md:text-start text-center items-center">
                <h2 className="md:font-semibold font-bold text-nowrap text-neutral-vlightgray md:text-6xl text-3xl">
                  Humanizing <br /> your insurance.
                </h2>
                <p className="py-10 font-light text-neutral-vlightgray  md:text-base  text-lg">
                  Get your life insurance coverage easier and faster. We blend
                  our expertise and technology to help you find the plan
                  that&apos;s right for you. Ensure you and loved ones are
                  protected.
                </p>

                <p className="btn bgbtn w-40 my-4 ">
                  <a href="#">View Plans</a>
                </p>
                </div>
              </div>
              <div className="md:block hidden w-full">
                <div className="absolute right-32 top-40 ">
                  <img src={introdesktop} alt="" />
                </div>
                <div className="absolute top-0 right-0">
                  <img src={imgdesktopright} alt="" />
                </div>
              </div>
            </div>

            <div className="md:block hidden absolute top-96 left-0 mt-24">
              <img className="" src={imgdesktopleft} alt="" />
            </div>
            <div className="md:hidden block absolute top-80 mt-52 left-0">
              <img  src={imgmobileleft} alt="" />              
            </div>
            <div className="md:hidden block absolute right-0 top-96 mt-96">
              <img src={imgmobileright} alt="" />
            </div>

            <div className="md:py-64 py-32 md:px-40 px-7 ">
              <div className="w-40  border-t-neutral-vlightgray border-t-4 md:mb-0 mb-12">
                <span></span>
              </div>

              <div className="flex flex-col md:justify-start md:items-start justify-center items-center">
                <h2 className="text-neutral-vdarkviolet text-4xl md:text-6xl font-bold md:py-20 ">
                  We&apos;re different
                </h2>
                <div className="flex md:flex-row flex-col md:justify-between md:items-start md:space-x-14 md:space-y-0 space-y-12 justify-center items-center md:mt-0 mt-12">
                  <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-center md:text-start">
                    <img src={process} alt="" />
                    <h3 className="det">Snappy Process</h3>
                    <p className="detp">
                      Our application process can be completed in minutes, not
                      hours. Don&apos;t get stuck filling in tedious forms.
                    </p>
                  </div>

                  <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-center md:text-start">
                    <img src={price} alt="" />
                    <h3 className="det">Affordable Prices</h3>
                    <p className="detp">
                      We don&apos;t want you worrying about high monthly costs. Our
                      prices may be low, but we still offer the best coverage
                      possible.
                    </p>
                  </div>

                  <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-center md:text-start">
                    <img src={pple} alt="" />
                    <h3 className="det">People First</h3>
                    <p className="detp">
                      Our plans aren&apos;t full of conditions and clauses to prevent
                      payouts. We make sure you&apos;re covered when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="">
        <div className="relative flex flex-col md:flex-row md:justify-between items-center bg-primary-darkviolet h-auto py-16 md:px-24 mb-28 md:mx-40 mx-5 md:space-y-0 space-y-7">
            <div>
              <p className="text-neutral-vlightgray text-3xl text-center md:text-6xl font-bold ">
                Find out more <br /> about how we work
              </p>
            </div>

            <div>
              <div className="md:block hidden absolute right-0 top-0">
                <img src={workdesktop} alt="" />

              </div>
              <div className="absolute md:hidden block right-0 top-0">
                <img src={workmobile} alt="" />

              </div>
              
              <p className="btn bgbtn w-40 my-4 ">
                <a href="#">How we work</a>
              </p>
            </div>
          </div>

          <div className="relative md:px-40 px-7  py-8 bg-neutral-vlightgray ">
            <div className="md:block hidden absolute left-0 top-0">
              <img src={imgdesktopfoot} alt="" />
            </div>
            <div className="block md:hidden absolute left-0 top-0">
              <img src={imgmobilefoot} alt="" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-5 py-8 border-b-primary-grayishblue border-b-2">
              <h2 className="head text-2xl ">Insure</h2>
              <div className="flex cursor-pointer gap-5">
                <img src={fb} alt="" />
                <img src={twit} alt="" />
                <img src={pinte} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:justify-between md:items-start justify-center items-center md:text-start text-center md:pr-40 mt-12 md:space-y-0 space-y-8">
              <div className="space-y-4">
                <h1 className="foothead">Our Company</h1>
                <ul className="footdetails">
                  <li className="hover:underline">How we work</li>
                  <li className="hover:underline">Why Insure?</li>
                  <li className="hover:underline">View Plans</li>
                  <li className="hover:underline">Reviews</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h1 className="foothead">Help me</h1>
                <ul className="footdetails">
                  <li className="hover:underline">Faq</li>
                  <li className="hover:underline">Terms of use</li>
                  <li className="hover:underline">Privacy Policy</li>
                  <li className="hover:underline">Cookies</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h1 className="foothead">Contact</h1>
                <ul className="footdetails">
                  <li className="hover:underline">Sales</li>
                  <li className="hover:underline">Support</li>
                  <li className="hover:underline">Live Chat</li>                  
                </ul>
              </div>

              <div className="space-y-4">
                <h1 className="foothead">Others</h1>
                <ul className="footdetails">
                  <li className="hover:underline">Careers</li>
                  <li className="hover:underline">Press</li>
                  <li className="hover:underline">Licenses</li>                  
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

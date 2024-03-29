import Head from "next/head";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube, AiFillInstagram, AiFillGithub, AiFillMediumCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import devey from "../public/dev-ey-wave.png";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    // @ts-ignore
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>DIGITAL EMRE || EMRE YILMAZ</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/ey.ico" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5}}
                    >
                        <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl">DigitalEmre</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="#"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </motion.div>

                    <div className="text-center p-10 py-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3}}
                            className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-96 md:w-96">
                            <Image src={devey} layout="responsive" objectFit="cover"  alt="EmreYilmazDev"  />
                        </motion.div>
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            Emre Yılmaz
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                            Software Developer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            The self-taught Junior Developer, who started his software life with PHP , is now interested in JavaScript and Java-based technologies and is dedicated to continuous improvement.
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 flex-wrap">
                            <a href="https://github.com/emreylmaz" target="_blank"><AiFillGithub/></a>
                            <a href="https://twitter.com/emreyilmaz_dev" target="_blank"><AiFillTwitterCircle /></a>
                            <a href="https://www.linkedin.com/in/emreyilmazinfo/" target="_blank"><AiFillLinkedin /></a>
                            <a href="https://medium.com/@emreyilmaz.txt" target="_blank"><AiFillMediumCircle /></a>
                            <a href="https://www.youtube.com/@digitalemre" target="_blank"><AiFillYoutube /></a>
                            <a href="https://www.instagram.com/digitalemre/" target="_blank"><AiFillInstagram/></a>

                        </div>

                    </div>
                </section>
                <section>
                    <div className="flex text-center justify-items-center">
                        <h3 className=" text-3xl py-1 dark:text-white ">Coming Soon Blog</h3>
                    </div>

                </section>
            </main>
        </div>
    );
}
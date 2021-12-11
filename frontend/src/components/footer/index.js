import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo-georgea1.svg';
import { ReactComponent as Facebook } from '../../assets/facebookWhite.svg';
import { ReactComponent as Twitter } from '../../assets/twitterWhite.svg';
import { ReactComponent as Instagram } from '../../assets/instagramWhite.svg';

export function Footer() {

    return (
        <>
            <footer className="w-100" style={{ backgroundColor: "var(--rosewood)" }}>
                <div className="container d-flex justify-content-between align-items-center row mx-auto">
                    <div className="d-flex align-items-center col-12 col-md-10">
                        <Logo style={{ width: "192px" }} className="footer" />
                        <div className="menu d-none d-md-block ml-5">
                            <button type="button">Sobre</button>
                            <span className="menu">|</span>
                            <button type="button">Contato</button>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center col-12 col-md-2">
                        <span className="fs-6 text-white">Redes sociais</span>
                        <div className="d-flex mt-3">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="mx-4"><Twitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /></a>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="d-flex justify-content-center" style={{ backgroundColor: "#761336" }}>
                <span className="text-white my-2 font-weight-light" style={{ fontSize: "14px" }}>©2021 Georgia Nery. Todos os direitos reservados.</span>
            </footer>
        </>
    )
}

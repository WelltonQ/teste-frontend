import React from 'react'
import './header.css'
import { ReactComponent as Logo } from '../../assets/logo-georgea1.svg';

export function Header() {
    return (
        <header>
            <div className="container d-flex justify-content-between align-items-center">
                <Logo className="logo" />
                <div className="col-2 col-md-1 col-sm-2 p-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-0">
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="sobre">Sobre</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-none d-lg-block">
                    <button type="button">Sobre</button>
                    <span className="menu">|</span>
                    <button type="button">Contato</button>
                </div>
            </div>
        </header >
    )
}

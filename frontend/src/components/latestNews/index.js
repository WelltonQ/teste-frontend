import React, { useEffect, useState } from 'react'
import rec10 from '../../assets/rectangle10.png'
import profile from '../../assets/profile.png'
import { ReactComponent as ArrowRight } from '../../assets/arrowPaginationRight.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrowPaginationLeft.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';

import api from '../../services/api';

import './latestNews.css'


export function LatestNews() {
    const [news, setNews] = useState([])
    const [reads, setReads] = useState([])
    const [navigation, setNavigation] = useState([])

    useEffect(() => {
        api.get('/informations').then(response => {
            setNews(response.data)
        })
        api.get('/reads').then(response => {
            setReads(response.data)
        })
    }, [])

    useEffect(() => {
        if (navigation.length === 0) {
            update()
        }
    }, [navigation, update])

    let perPage = 4
    const pagination = {
        page: 1,
        perPage,
        totalPage: Math.ceil(news.length / perPage)
    }

    const controls = {
        next() {
            pagination.page++

            if (pagination.page > pagination.totalPage) {
                pagination.page--
            }
            update()
        },
        prev() {
            pagination.page--

            if (pagination.page < 1) {
                pagination.page++
            }
            update()
        }
    }

    function update() {
        let page = pagination.page - 1
        let start = page * pagination.perPage
        let end = start + pagination.perPage

        const paginationItems = news.slice(start, end)

        setNavigation(paginationItems)
    }

    console.log('navigation', navigation)

    return (
        <section className="latestNews">
            <div className="container row mx-auto">
                <div className="latestNews col-12 col-md-8">
                    <h1>Últimas notícias</h1>
                    {navigation.map(data => (
                        <div key={data.id}>
                            <div className="card mb-3 mt-4 bg-transparent border-0">
                                <img src={data.image} className="card-img-top" alt="..." />
                                <div className="card-body px-0">
                                    <h5><span className={`badge ${data.detach ? 'rose' : ''}`}>{data.date}</span></h5>
                                    <p className={`card-text ${data.detach ? 'rose' : ''}`}>{data.title}</p>
                                    <div className="d-flex">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm d-flex align-items-center" style={{ color: '#BDBDBD' }} data-toggle="collapse" data-target={`#showReadInformation${data.id}`} aria-controls={`showReadInformation${data.id}`} aria-expanded="false" aria-label="Toggle navigation">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-right mr-2" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                                                </svg>
                                                Leia mais
                                            </button>
                                            <button type="button" className="btn btn-sm d-flex align-items-center" style={{ color: '#BDBDBD' }} data-toggle="collapse" data-target={`#shareTarget${data.id}`} aria-controls={`shareTarget${data.id}`} aria-expanded="false" aria-label="Toggle navigation">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share mr-2" viewBox="0 0 16 16">
                                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                </svg>
                                                Compartilhar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse" id={`shareTarget${data.id}`}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ color: 'var(--gray)', fontSize: '14px', display: 'flex', alignItems: 'center' }} href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                            Whatsapp
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ color: 'var(--gray)', fontSize: '14px', display: 'flex', alignItems: 'center' }} href="https://outlook.live.com/mail/" target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope mr-2" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                            </svg>
                                            E-mail
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id={`showReadInformation${data.id}`}>
                                <p>{data.description}</p>
                            </div>
                            {data.publicity && (
                                <a href="https://www.miranda.com.br/" target="_blank" rel="noreferrer">
                                    <img src={data.publicity} alt="Publicidade" className="publicity" />
                                </a>
                            )}
                        </div>
                    ))}

                    <nav aria-label="Page navigation" className="d-flex justify-content-center align-item-center">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="prev" id="prev" onClick={() => controls.prev()} aria-label="Previous">
                                    <ArrowLeft />
                                </button>
                            </li>
                            <li><button type="button" className={`pagination px-2 mx-1 ${navigation[0]?.id === 4 ? 'active' : ""}`} onClick={() => controls.prev()}>1</button></li>
                            <li><button type="button" className={`pagination px-2 mx-1 ${navigation[0]?.id === 15 ? 'active' : ""}`} onClick={() => controls.next()}>2</button></li>
                            <li className="page-item">
                                <button className="next" onClick={() => controls.next()} aria-label="Next">
                                    <ArrowRight />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="profile col-12 col-md-4">
                    <h1>Perfil</h1>
                    <div className="card bg-transparent border-0 mt-4">
                        <div className="align-self-end profile1"></div>
                        <img src={profile} className="card-img-top profile" alt="Foto do Perfil" />
                        <div className="align-self-start profile2"></div>
                        <div className="card-body px-0">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column">
                                    <h5>Georgia Nery</h5>
                                    <span className="social">Jornalista</span>
                                </div>
                                <ul className="d-flex p-0">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook /></a>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="mx-3"><Twitter /></a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /></a>
                                </ul>
                            </div>
                            <p className="card-text fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing hendrerit risus, volutpat imperdiet quam vulputate sit amet.</p>
                        </div>
                    </div>

                    <div className="mostRead">
                        <h1>As mais lidas</h1>

                        {reads.map(read => (
                            <div className="read" key={read.id}>
                                <h5>
                                    <span className={`badge mt-4 ${read.detach && 'rose'}`}>
                                        {read.date}
                                    </span>
                                </h5>
                                <p className={`card-text read fs-6 ${read.detach ? 'rose' : ''}`}>{read.title}</p>
                            </div>
                        ))}

                    </div>

                    <div className="publicity">
                        <h5 className="publicity">Publicidade</h5>
                        <img src={rec10} alt="Bio Extratus" />
                    </div>

                    <div className="d-flex flex-column cadaster">
                        <div className="d-flex">
                            <Mail height="33" />
                            <div className="d-flex flex-column mail">
                                <h2 className="mail">Cadastre-se</h2>
                                <span className="mail">Receba notícias exclusicas no seu e-mail!</span>
                            </div>
                        </div>
                        <input type="text" placeholder="Seu nome" />
                        <input type="text" placeholder="Seu melhor e-mail" />
                        <button type="button" className="btn mail">Enviar</button>
                        <p className="mail">Ao clicar em “enviar”, você concorda em receber e-mails do Fê-liz com a vida e aceita nossos termos de uso, política de privacidade e cookies.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

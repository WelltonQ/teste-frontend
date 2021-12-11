import React, { useState } from 'react'
import './lastVideos.css'
import foto from '../../assets/foto.png'
import foto1 from '../../assets/foto1.png'
import foto2 from '../../assets/foto2.png'
import foto3 from '../../assets/foto3.png'

export function LastVideos() {
    const [video, setVideo] = useState(foto)

    return (
        <section className="lastVideos">
            <div className="container lastVideos">
                <h1 className="lastVideos">Últimos vídeos</h1>
                <img src={video} className="d-block w-100 position-relative mt-4" alt="Vídeo principal" />
                <div id="slider" className="carousel slide mt-4" >
                    <ol className="carousel-indicators carousel slide">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ul className="row row-cols-2 row-cols-lg-4 px-0">
                                <li className="col img"><img onClick={() => setVideo(foto1)} src={foto1} alt="foto1" /></li>
                                <li className="col img"><img onClick={() => setVideo(foto2)} src={foto2} alt="foto2" /></li>
                                <li className="col img d-none d-lg-block"><img onClick={() => setVideo(foto)} src={foto3} alt="foto3" /></li>
                                <li className="col img d-none d-lg-block"><img onClick={() => setVideo(foto1)} src={foto1} alt="foto1" /></li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="row row-cols-2 row-cols-lg-4 px-0">
                                <li className="col img"><img onClick={() => setVideo(foto)} src={foto3} alt="foto3" /></li>
                                <li className="col img"><img onClick={() => setVideo(foto1)} src={foto1} alt="foto1" /></li>
                                <li className="col img d-none d-lg-block"><img onClick={() => setVideo(foto)} src={foto3} alt="foto3" /></li>
                                <li className="col img d-none d-lg-block"><img onClick={() => setVideo(foto1)} src={foto1} alt="foto1" /></li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="row row-cols-2 row-cols-lg-4 px-0">
                                <li className="col img"><img onClick={() => setVideo(foto2)} src={foto2} alt="foto2" /></li>
                                <li className="col img"><img onClick={() => setVideo(foto)} src={foto3} alt="foto3" /></li>
                                <li className="col img d-none d-lg-block"><img onClick={() => setVideo(foto2)} src={foto2} alt="foto2" /></li>
                                <li className="col img d-none d-lg-block"><img onClick={() => setVideo(foto)} src={foto1} alt="foto1" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

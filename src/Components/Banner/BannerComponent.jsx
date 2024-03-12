import React from "react";
import bannerPhoto from './images/happy-lab.jpeg'
import './BannerComponent.css'

function BannerComponent () {
    return (
        <>
            <main>
                <section className="banner-container">
                    <div className="banner-photo"/>
                    <div className="banner-text">
                        <h1 className="banner-title">Bestsellers for your best friend!</h1>
                        <h2 className="banner-subtitle">
                            Discover our most loved pet essentials:
                        </h2>
                        <ul>
                            <li>Cozy beds</li>
                            <li>Chew toys</li>
                            <li>Grooming kits</li>
                            <li>Organic treats</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export {BannerComponent}
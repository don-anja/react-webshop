import "./AboutUsComponent.css"
import aboutUsPhoto from "./images/dog_and_friend.jpeg"

function  AboutUsComponent() {
    return (
        <main>
            <div className="about-greeting">
                <h1>Welcome to Tail Waggers - Where Every Pet is Family!</h1>
            </div>
            <div className="content-container">
                <section className="about-container">
                    {" "}
                    <h2>Our Story</h2>
                    <p>
                        At Tail Waggers, our journey began with a simple love for animals. Founded in 2023, we set out to
                        create more than just a pet shop; we aimed to build a community for pet lovers. Our founder, a
                        lifelong animal enthusiast, envisioned a place where pets and their owners could find not only
                        quality products but also support, advice, and a shared sense of joy.
                    </p>
                </section>
                <aside className="image-container">
                    {" "}
                    <img src={aboutUsPhoto} alt="Our Shop"/>
                </aside>
            </div>
        </main>
    )
}

export {AboutUsComponent}
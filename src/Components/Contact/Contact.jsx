import "./Contact.css"

function ContactComponent() {
return (
    <main>
        <div className="contact-container">
            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>
                    <strong>Email:</strong> info@tailwaggers.com
                </p>
                <p>
                    <strong>Phone:</strong> +1 (555) 789-PAWS
                </p>
                <p>
                    <strong>Address:</strong> 42 Happy Paws Lane, Petville, PV 12345
                </p>
                <p>Open Hours: Mon-Sat, 10 AM - 8 PM</p>
            </section>
            <section className="contact-form-section">
                <h2>Send Us a Message</h2>
                <form
                    className="contact-form"
                    method="POST"
                >
                    <input type="text" name="name" placeholder="Your Name" required=""/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required=""
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required=""
                        defaultValue={""}
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    </main>
)
}

export {ContactComponent}
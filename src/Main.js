import React from "react";

function Main() {
    return (
        <main className="main">
            <section className="hero">
                <h2>Welcome to Little Lemon</h2>
                <p>Experience the vibrant flavors of Mediterranean cuisine at Little Lemon. Our menu features a delightful array of dishes crafted with fresh, locally sourced ingredients. From our signature lemon-infused entrees to our delectable desserts, every bite is a celebration of taste. Join us for an unforgettable dining experience that will tantalize your taste buds and leave you craving more.</p>
            </section>

            <section className="cards">
                <article className="card">
                    <h3>Specialty Dish</h3>
                    <p>Our chef's choice dish, made with the freshest ingredients.</p>
                </article>

                <article className="card">
                    <h3> Dessert</h3>
                    <p>Indulge in our delicious lemon tart, a perfect end to your meal.</p>
                </article>

                <article className="card">
                    <h3>Burger</h3>
                    <p>Juicy grilled burgers.</p>
                </article>
            </section>
        </main>
    )
}

export default Main;
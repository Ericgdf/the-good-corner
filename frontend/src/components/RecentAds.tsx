import React from 'react'
import AdCards, { AdcardsProps } from "./Adcards"

const RecentAds = () => {
    const ads: AdcardsProps[] = [
        {
            title: "Dame-jeanne",
            imgUrl: "/images/dame-jeanne.webp",
            link: "/ads/dame-jeanne",
            price: 75,
        },
        {
            imgUrl: "/images/table.webp",
            link: "/images/table.webp",
            price:  120,
            title: "Table"
        },
        {
            imgUrl: "/images/vide-poche.webp",
            link: "/ads/vide-poche",
            price: 4,
            title: "Vide-poche"
        },
        {
            imgUrl: "/images/vaisselier.webp",
            link: "/ads/vaisselier",
            price: 900,
            title: "Vaisselier",
        },
        {
            imgUrl: "/images/bougie.webp",
            link: "/ads/bougie",
            price: 8,
            title: "Bougie"
        },
        {
            imgUrl: "/images/porte-magazine.webp",
            link: "/ads/porte-magazine",
            price: 45,
            title: "Porte-magazine"
        }
    ]
    return (
        <>
            <h2>Annonces récentes</h2>
            <section className="recent-ads">
                {
                    ads.map((ad) => (
                        <AdCards
                            imgUrl={ad.imgUrl}
                            link={ad.link}
                            price={ad.price}
                            title={ad.title}
                            key={ad.title}
                        />
                    ))
                }

            </section>
        </>
    )
}

export default RecentAds
import { useState, useEffect } from 'react'
import axios from 'axios'
import AdCards, { AdcardsProps } from './AdCards'

const RecentAds = () => {
    const [total, setTotal] = useState(0)
    const [ads, setAds] = useState<AdcardsProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<AdcardsProps[]>(
                    'http://localhost:4000/ads'
                )
                setAds(result.data)
                console.log(result.data)
            } catch (err) {
                console.log("error fetching ads :", err)
            }
        };
        fetchData()

    }, [])


    return (
        <>
            <h2>Annonces récentes</h2>
            <p>prix total : {total}</p>
            <section className="recent-ads">
                {ads.map((ad) => (
                    <div key={ad.title}>
                        <AdCards
                            picture={ad.picture}
                            link={ad.link}
                            price={ad.price}
                            title={ad.title}

                        />
                        <button className="button" onClick={() => {
                            setTotal(total + ad.price)
                        }}> Add price to total</button>
                    </div>
                ))

                }

            </section>
        </>
    )
}

export default RecentAds
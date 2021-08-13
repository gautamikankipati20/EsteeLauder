/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductAttributes from './ProductAttributes';
import ProductOverview from './ProductOverview';
import ProductDetails from './ProductDetails';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            product: {
                display_name: 'Advanced Night Repair Serum Synchronized Multi-Recovery Complex',
                reviews: {
                    average_rating: 4.5,
                    number_of_reviews: 15625
                },
                short_description: 'The #1 serum in the U.S.* Fight the look of multiple signs of aging.',
                default_price: '$105',
                media: [
                    {
                        src: 'img/products/main-product.webp',
                        alt: 'Advanced Night Repair Serum'
                    },
                    {
                        src: 'img/products/alt-product-one.webp',
                        alt: 'Advanced Night Repair Serum'
                    },
                    {
                        src: 'img/products/alt-product-two.webp',
                        alt: 'Advanced Night Repair Serum'
                    },
                    {
                        src: 'img/products/alt-product-three.webp',
                        alt: 'Advanced Night Repair Serum'
                    },
                    {
                        src: 'img/products/alt-product-four.webp',
                        alt: 'Advanced Night Repair Serum'
                    },
                    {
                        src: 'img/products/EL_Website_Photo.webp',
                        alt: 'Advanced Night Repair Serum'
                    }
                ],
                sizes: [
                    {
                        label: '1.7 oz',
                        price: '$105'
                    },
                    {
                        label: '1.0 oz',
                        price: '$75'
                    },
                    {
                        label: '3.9 oz',
                        price: '$200'
                    }
                ],
                is_replenishable: true,
                description: `<B>Fast Visible Repair and Youth-Generating Power.</B><BR><BR>Experience the next generation of our revolutionary formula—the most comprehensive Advanced Night Repair serum ever. Patented until 2033.<BR><BR>Now with Chronolux™ Power Signal Technology, this deep- and fast-penetrating face serum reduces the look of multiple signs of aging caused by the environmental assaults of modern life. Skin looks smoother and less lined, younger, more radiant and even toned.<BR><BR><B>ONE DROPPER</B> <UL><LI>Skin looks radiant and plumped with hydration—all the way through till morning.</LI><LI>8-hour anti-oxidant power.</LI><LI>72-hour hydration (includes Hyaluronic Acid).</LI><LI>Strengthens skin barrier in just 4 hours.</LI><LI>Oil-free texture.</LI></UL><BR><B>THREE WEEKS</B> <UL><LI>Lines and wrinkles appear reduced.</LI><LI>88% of women said skin looked more youthful.<SUP>(1)</SUP></LI></UL><BR><B>ONE BOTTLE<SUP>(2)</SUP></B> <UL><LI>Skin feels firmer. 89% of women agreed.<SUP>(1)</SUP></LI><LI>Skin looks healthy, has a new bounce and vitality.</LI></UL>Plus, over time, pores look diminished.<BR><BR><B>THE #1 SERUM IN THE U.S.*</B><BR><BR>Proven effective for all skintones. This is the high performance face serum beautiful skin can’t live without.<BR><BR>Advanced Night Repair harnesses the restorative power of night to deliver visible renewal. It works night and day to help skin maximize its overall natural rhythm of repair and protection.<BR><BR><B>EVERY NIGHT</B><BR><BR>While you sleep, it helps ignite skin’s natural nightly repair process. Fast. A high level of Hyaluronic Acid helps lock in moisture for 72 hours. This helps create the perfect environment to optimize skin’s natural repair process.<BR><BR>Our exclusive Chronolux™ Power Signal Technology helps increase skin’s natural ability for visible self-repair, with in vitro testing showing it promotes skin’s natural renewal of vital new cells and boosts its natural production of collagen.<BR><BR><B>EVERY DAY</B><BR><BR>During the day, this serum helps protect skin from environmental assaults&shy;—a key part of skin’s own daily rhythm. Helps defend skin against the visible effects of free radical damage from environmental sources like pollution, ozone, blue light, infrared and micro dust. Provides 8-hour anti-oxidant protection to provide all-day defense against environmental assaults, and help keep skin looking younger, longer.<BR><BR><SUP>*Source: The NPD Group, Inc. / U.S. Prestige Beauty Total Department/Specialty, Skincare Product Layer Unit Sales, 12 months ending May 2021.<BR>(1) Consumer testing on 543 women.<BR>(2) 1.7 oz./50ml bottle.<BR></SUP>`,
                attributes: [
                    {
                        label: 'BENEFIT',
                        content: 'The #1 serum in the U.S.* Fight the look of multiple signs of aging.'
                    },
                    {
                        label: 'SKIN TYPE',
                        content: 'Serum for all skintypes.'
                    },
                    {
                        label: 'IDEAL FOR',
                        content: '<UL><LI>Multiple signs of aging</LI><LI>Visible age prevention</LI><LI>Loss of firmness, tone</LI><LI>Lines and wrinkles</LI><LI>Dryness, dehydration—includes Hyaluronic Acid</LI><LI>Dullness, loss of radiance</LI><LI>Uneven skintone</LI><LI>Anti-oxidants</LI></UL>'
                    },
                    {
                        label: 'FORMULA FACTS',
                        content: `<UL><LI>Oil-free</LI><LI>Recyclable glass bottle</LI><LI>Dermatologist-tested</LI><LI>Ophthalmologist-tested</LI><LI>Non-acnegenic; won't clog pores</LI><LI>Free of synthetic fragrance</LI><LI>Free of parabens, phthalates, sulfites, sulfates and mineral oil</LI><LI>Face serum with Hyaluronic Acid and anti-oxidants</LI></UL>`
                    }
                ],
                how_to_use: `Apply this face serum on clean skin before your moisturizer, AM and PM. Use one dropper. Smooth in gently all over face and throat.<BR><BR><B>Try Our Heart Ritual</B><BR><BR>Apply a full dropper of Advanced Night Repair serum to the palm of your hand.<BR><BR>Massage onto face in a heart shape: Using all fingers of both hands, start at the center of your face and move out to ears. Glide hands from sides of face down under chin.<BR><BR>Next, trace a larger heart from middle forehead out to temples. Glide down the sides of the face and close the heart again under your chin.<BR><BR>Finish the Heart Ritual by gently massaging onto neck in a downward motion.`,
                ingredients: `Ingredients: Water\\\\Aqua\\\\Eau, Bifida Ferment Lysate, Peg-8, Propanediol, Bis-Peg-18 Methyl Ether Dimethyl Silane, Methyl Gluceth-20, Glycereth-26, Peg-75, Butylene Glycol, Adansonia Digitata Seed Extract, Tripeptide-32, Sodium Hyaluronate, Yeast Extract\\\\Faex\\\\Extrait De Levure, Lactobacillus Ferment, Cola Acuminata (Kola) Seed Extract, Anthemis Nobilis (Chamomile) Flower Extract, Hydrolyzed Algin, Pantethine, Caffeine, Lecithin, Sodium Rna, Bisabolol, Squalane, Glycerin, Oleth-3 Phosphate, Caprylyl Glycol, Oleth-3, Oleth-5, Choleth-24, Hydrogenated Lecithin, Jojoba Wax Peg-120 Esters, Ceteth-24, Tocopheryl Acetate, Carbomer, Triethanolamine, Tetrasodium Edta, Bht, Xanthan Gum, Potassium Sorbate, Disodium Edta, Phenoxyethanol, Red 4 (Ci 14700), Yellow 5 (Ci 19140) <ILN47580>`
            }
        };
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Home
    */
    render() {
        const { product } = this.state;

        return (
            <section id="home">
                <div className="content">
                    <div className="elc-breadcrumbs">Home / Repair Serum</div>

                    <div className="elc-product-main">
                        <ProductCarousel images={product.media}/>
                        <ProductOverview product={product}/>
                    </div>


                    <div className="elc-product-info">
                        <ProductDetails description={product.description}/>
                        <ProductAttributes attributes={product.attributes}/>
                    </div>

                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;
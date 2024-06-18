import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Link href="/products">
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <Image
                src="/dino.webp"
                alt="Dino Earring"
                width={450}
                height={450}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="/panda.webp"
                alt="Panda Earring"
                width={450}
                height={450}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="/parrot.webp"
                alt="Parrot Earring"
                width={450}
                height={450}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="/bonbon.webp"
                alt="Bonbon Earring"
                width={450}
                height={450}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="/strawberry.webp"
                alt="Strawberry Earring"
                width={450}
                height={450}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="/chicken.webp"
                alt="Chicken Earring"
                width={450}
                height={450}
              />
            </div>
          </div>
        </Link>
        <div>
          <h1 className="text-5xl font-bold">FUSE BEADS | be creative</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Link href="/products" className="btn btn-primary">
            GO TO ALL PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
}

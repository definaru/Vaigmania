import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'

export function Slider()
{
    const slider = [
        {
            image: '/access/img/page/home/1.png',
            alt: '1',
            link: '/gallery',
            margin: 'my-10'
        },
        {
            image: '/access/img/page/home/2.png',
            alt: '2',
            link: '',
            margin: 'my-10'
        },
        {
            image: '/access/img/page/home/3.png',
            alt: '3',
            link: '/x_real',
            margin: ''
        },
        {
            image: '/access/img/page/home/5.png',
            alt: '5',
            link: '',
            margin: 'my-10'
        },
    ]

    return (
        <Swiper
            //direction={"horisontal"}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true} 
            modules={[Mousewheel, Navigation]}
            mousewheel={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slider.map((item, i) => (
            <SwiperSlide key={i}>
                <div className={`max-w-4xl mx-auto ${item.margin}`}>
                    {item.link !== '' ? 
                        <Link href={item.link}>
                            <img src={item.image} className="w-full" alt={item.alt} />
                        </Link> :
                        <img src={item.image} className="w-full" alt={item.alt} />
                    }
                </div>
            </SwiperSlide>                    
            ))}
        </Swiper>
    )
}
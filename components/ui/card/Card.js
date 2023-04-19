import React from 'react'
import { HiHeart } from 'react-icons/hi'
import Fancybox from '../slider/Fancybox'


export function Card({data, types})
{      
    const {name, datetime, image, thumb, rating} = data

    return (
        <div className="bg-white shadow-md rounded">
            <div className="flex items-center gap-4 px-4 py-3 border-b">
                <img 
                    src={
                        types === 'gallery' ? 
                            "https://mir-s3-cdn-cf.behance.net/user/115/227f7059973053.5bc095ceb8803.png" : 
                            "https://vaigmania.ru/img/qw18-300width.jpg"
                    } 
                    className="object-cover w-12 h-12 rounded-full border" 
                    alt={name} 
                />
                <div className="leading-4">
                    <h6 className="text-black font-black text-lg">
                        {types === 'gallery' ? 'Galerii' : 'Kavandid'} - {name}
                    </h6> 
                    <small className="text-gray-500">Shared publicly - {datetime}</small>
                </div>
            </div>
            <Fancybox>
                <a data-fancybox="gallery" data-caption={name} href={image}>
                    <img src={thumb} className="w-full" alt={name} />
                </a>
            </Fancybox>
            <div className="flex justify-between items-center gap-4 px-4 py-3 border-t">
                <p className="text-gray-500">Please evaluate this drawing</p> 
                <p className="flex items-center gap-2 leading-3">
                    <HiHeart className="w-5 h-5 text-red-500" />
                    <span className="mt-1">{rating}</span>
                </p>
            </div>
        </div> 
    )
}
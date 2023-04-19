import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'


export default function Music() 
{
    const Title = 'Muusika'

    return (
        <MainLayout title={`${Title} | Vaigμaηiα ❦`}>
            <div className='block pattern h-20'></div>
            <main className="max-w-xl mx-auto">
                <div className='grid grid-cols-1 gap-6 place-items-center my-20 relative'>
                    <div className="text-center absolute -top-28">
                        <img 
                            src="https://vaigmania.ru/img/music.png" 
                            className="w-20 h-20 rounded-full border-4 border-solid border-yellow-50" 
                            alt='Vaigμaηiα ❦' 
                        />
                        <h4 className='text-black mt-2 text'>Vaigμaηiα ❦</h4>
                    </div>
                    
                    <h2 className='text-red-500 text-3xl font-black mt-10'>{Title}</h2>
                    <p className="text-gray-600 text-center">
                        Projekti "Vaigmania" oli algselt erineva nime all ja on sündinud tänu 
                        suur soov ja soov luua huvitav ja ebatavaline muusika. Ma ei leia midagi 
                        nagu see on, ma tahan kirjutada ise, kas see tähendab, et see on midagi 
                        uut, võib-olla - jah. Usun, et kõik uus on hästi unustatud vana, aga ma 
                        kuulasin palju erinevaid muusika, erinevatel aastatel kuid midagi sellist 
                        ei leitud igal juhul.
                        <br /><br />
                        Ma otsustasin panna demoversiooniks oma projekti kogu Väike vihje, 
                        mida ma lähen kirjutada {' '}
                        <a href="http://vk.com/vaigmaniamusic" target="_blank" rel="nofollow" className="underline text-gray-500 hover:text-red-500 mt-1">
                            http://vk.com/vaigmaniamusic
                        </a>
                    </p>
                    <img src="/access/img/page/music/embed_asset.jpg" className="w-4/5" alt="Disk" />
                </div>              
            </main>  

            <section className="bg-gray-100">
                <main className="max-w-4xl mx-auto py-20">
                    <div class="grid grid-cols-3 gap-6">
                        <img 
                            src="/access/img/page/music/2Q.jpg" 
                            className="w-full rounded"
                            alt="Vaigμaηiα ❦ - Reprise For Flowers" 
                        />
                        <div className="col-span-2 grid gap-2">
                            <p className="text-gray-600">Author-Performer By Ray Vaigmi | 2017</p> 
                            <h2 className="text-red-600 font-semibold text-3xl">Välja esimene singel! Hääl</h2>
                            <div className="h-28">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    scrolling="no" 
                                    frameBorder="no" 
                                    allow="autoplay" 
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1332392944&amp;color=%23ff0000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
                                ></iframe>                                
                            </div>
                            <p><strong>Жанр:</strong> New Age, Dark Ambient, Expressia</p> 
                        </div>
                    </div>
                </main>
            </section>

            <section className="bg-fixed bg-black bg-no-repeat bg-center bg-cover music-box">
                <div class="bg-black bg-opacity-50">
                    <main className="max-w-4xl mx-auto py-40 text-white">
                        <div class="grid gap-6 border-l-8 border-white border-opacity-10 pl-20">
                            <div>
                                <h2 className="font-bold text-6xl text-red-600">Esimene album.</h2> 
                                <h3 className="font-normal text-5xl text-gray-100">vabastamist Ülevaade.</h3>                                 
                            </div>
                            <p className="text-xl">
                                "Vaigmania" projekti, mis on loodud Venemaal 2010. aasta suvel. 
                                Album release lükkus haiguse tõttu esineja. Output edasi 2015-2017.                    
                            </p>
                            <p className="text-gray-400 font-light">Sel ajal esimene album!</p>
                        </div>
                    </main>                    
                </div>
            </section>

            <section className="bg-gray-50 border-b">
                <main className="max-w-4xl mx-auto py-20">
                    <div class="block">
                        {/* <img 
                            src="/access/img/page/music/embed_asset_1.jpg" 
                            className="w-full rounded"
                            alt="Vaigμaηiα ❦ - Album" 
                        /> */}
                        
                        <iframe 
                            width="100%" 
                            height="500" 
                            scrolling="no" 
                            frameborder="no" 
                            allow="autoplay" 
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1489652980&amp;color=%23ff0000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
                        ></iframe>
                        <p className="text-center py-4"><strong>Жанр:</strong> New Age, Dark Ambient, Expressia</p> 
                        
                    </div>
                </main>
            </section>

            <section className="bg-white border-b">
                <main className="max-w-4xl mx-auto py-20">
                    <div class="grid grid-cols-2 gap-6 items-center">
                        <div className="flex flex-col gap-4 text-right">
                            <h2 className="font-bold text-6xl text-red-600">Vaigμaηiα ❦</h2>
                            <h3 className="font-bold text-3xl text-gray-600">
                                Kokku 13 CD 10 harv lugusid.
                                <span className="text-black"><br />Exclusive!</span> 
                            </h3>
                            <div className="grid gap-3 border-r-4 pr-4">
                                <p>
                                    Ilus muusika inspireerib ja erutab teadvuse. 
                                    Ainult majesteetlik meloodia ja sümfoonia võimalik 
                                    vallutada meie südamed. Muusika - allikas emotsioone!                                    
                                </p>
                                <p className="text-red-500">
                                    - Nautige ainulaadne kingitus. <strong>Naudi heli.</strong> 
                                </p>
                            </div>


                        </div>
                        <img 
                            src="/access/img/page/music/embed_asset2.jpg" 
                            className="w-full rounded"
                            alt="Vaigμaηiα ❦" 
                        />
                    </div>
                </main>
            </section>
            <section>
                <img src="/access/img/page/music/Vaigmania-CD_Design2.jpg" className="w-full" />
            </section>
            

        </MainLayout>
    )
}
import { ANIME, META } from '@consumet/extensions';
import { useEffect, useState } from 'react';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { MantineProvider } from '@mantine/core';
function App() {
    const anilist = new META.Anilist();

    const [test, setTest] = useState([])
    useEffect(() => {
        anilist.fetchTrendingAnime().then(data => {
            console.log(data);
            setTest(data.results)
        })

    }, [])

    return (
        <>
            this is home
           
            <div>
                <div className="carousel w-full">
                    {test.map((result, index) => (
                        <div id={`slide${index + 1}`} key={index} className="carousel-item relative w-full">

                            <figure className="px-10 pt-10">
                                <img src={result.cover} alt={`Slide ${index + 1}`} className="rounded-xl w-full" />
                            </figure>


                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${index === 0 ? test.length : index}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${(index + 1) % test.length === 0 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    {test.map((_, index) => (
                        <a key={index} href={`#slide${index + 1}`} className="btn btn-xs">{index + 1}</a>
                    ))}
                </div>

            </div>




<div className='flex justify-center'>
            <div className='grid grid-cols-3'>
                {test.map((result, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={result.image} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{result.title.english || result.title.romaji}</h2>
                            <p>{result.releaseDate}</p>
                            <div className="card-actions">

                            </div>
                        </div>
                    </div>
                ))}

            </div>
            </div>
        </>
    );
}

export default App;

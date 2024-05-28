import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ANIME } from '@consumet/extensions';

const AnimeInfo = () => {
    const { title } = useParams();
    const [anime, setAnime] = useState(null);
    const gogoanime = new ANIME.Gogoanime();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formattedTitle = title.replace(/-/g, ' ');
                console.log(formattedTitle);
                const data = await gogoanime.fetchAnimeInfo(formattedTitle);
                console.log(data);  // Log the data to understand its structure

                // Assuming data contains the anime details directly
                setAnime(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [title]);

    if (!anime) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={anime.image} className="rounded-xl" alt="Anime" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{anime.title.english || anime.title.romaji}</h2>
                    <p>{anime.releaseDate}</p>
                    <p>{anime.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AnimeInfo;

import { useEffect, useState } from 'react';
import { META } from '@consumet/extensions';
import { NavLink, useSearchParams } from 'react-router-dom';


const Search = () => {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const searchQuery = searchParams.get('query') || '';
    const anilist = new META.Anilist();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await anilist.search(searchQuery);
                setResults(data.results);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        if (searchQuery) {
            fetchData();
        }

        return () => setResults([]);
    }, [searchQuery]);

    return (
        <>
            <div className="flex justify-center">
                <div className='grid grid-cols-3 gap-4'>
                    {results.map((result) => (
                        <div key={result.id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                            <NavLink to={`/anime/${(result.title.english || result.title.romaji).replace(/\s+/g, '-')}`}>
                                <figure className="px-10 pt-10">
                                    <img src={result.image} className="rounded-xl" alt="Anime" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{result.title.english || result.title.romaji}</h2>
                                    <p>{result.releaseDate}</p>
                                </div>
                            </NavLink>

                        </div>
                    ))}
                </div>
            </div>

        </>

    );
};

export default Search;

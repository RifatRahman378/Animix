import  { useEffect, useState } from 'react';
import { ANIME,META } from '@consumet/extensions';
import { useSearchParams } from 'react-router-dom';
// import Search from '../Components/Search/Search';

const SearchApi = () => {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const searchQuery = searchParams.get('query') || '';
    // const gogoanime = new ANIME.Gogoanime();
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

        // Cleanup function to reset results when unmounting
        return () => setResults([]);
    }, [searchQuery]);

    console.log("Search query from Navbar:", searchQuery);
    console.log(results);

    return (
        <div className='grid grid-cols-3'>
             {results.map((result, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={result.image}  className="rounded-xl" />
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
    );
};

export default SearchApi;

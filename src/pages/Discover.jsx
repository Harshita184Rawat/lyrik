import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useDispatch, useSelector } from "react-redux";
import { useGetTopChartsQuery } from '../redux/services/shazamCore'


const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state => state.player));
    const { data, isFetching, error } = useGetTopChartsQuery();
    const genreTitle = 'Pop';

    if (isFetching) return <Loader title="Loading Songs...." />;

    if (error) return <Error />;



    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm
                     rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genres) => <option key={genres.value} value={genres.value}>
                        {genres.title}
                    </option>)}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}

            </div>

        </div>
    );
};


export default Discover;

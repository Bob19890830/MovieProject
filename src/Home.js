import Pagination from "./Pagination";
import MovieList from "./MovieList";
import {useState} from "react";

const Home = () => {

    const [category, setCategory] = useState('popular');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleTotalPages = (pages) =>{
        setTotalPages(pages);
    }

    const handleCategory = (e) => {
        setCurrentPage(1);
        setCategory(e.target.value);
    }

    const handlePrev = () => {
        if(currentPage < 2){
            setCurrentPage(1)
        }
        else{
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if(currentPage > totalPages - 1){
            setCurrentPage(totalPages)
        }
        else {
            setCurrentPage(currentPage + 1)
        }
    }

    return(
        <div>
            <div className='category' style={{paddingTop:'20px'}}>
                <select value={category} onChange={(e) =>handleCategory(e)}>
                    <option value='popular'>Popular</option>
                    <option value='now_playing'>Now Playing</option>
                    <option value='top_rated'>Top Rated</option>
                    <option value='upcoming'>Upcoming</option>
                </select>
            </div>
        <Pagination currentPage={currentPage} handlePrev={handlePrev} handleNext={handleNext} totalPages={totalPages} />
        <MovieList category={category} page={currentPage} handleTotalPages={handleTotalPages} />
        </div>
    )
}

export default Home;
import useApi from "../hooks/useApi";
import ImageItem from "./ImageItem";

const DisplayGif = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Cp7xy0uDSpQCWNbdeGGdzbWY0GcGVM2j&q=${category}&limit=9`;
    const { loading, data } = useApi(url);

    return ( 
       <div className="container-gifs">
        {
            loading ? 
            data.map(img => (
                <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
            ))
            : ''
        }
        
       </div>
    );
}

export default DisplayGif;
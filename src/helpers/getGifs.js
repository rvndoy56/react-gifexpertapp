

export const getGifs = async (category) =>{
    //encodeURI para reemplazar los espacios
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oY2enMbQweEVcPM3Y278cLCn9HuUkPKY&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title:img.title,
            url : img.images.downsized_medium.url
        }
    })

    return gifs;
}
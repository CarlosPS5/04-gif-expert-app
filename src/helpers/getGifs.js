
export const getGifs = async (props) => {
    console.log(props.categorias)
    const url = `https://api.giphy.com/v1/gifs/search?q=${props}&limit=10&api_key=ZPdoSj8YkxcP8B5Ow4VbDm74Xv8T4Pnx`
    const response = await fetch(url)
    const {data} = await response.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}
const Gif = ({url, title}) => {
    return (
        <div>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default Gif
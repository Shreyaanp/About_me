export default function Card({ title, description,imageSrcPath,
    date,    leftButtonText ,sourceURL}) {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={sourceURL} className="btn btn-primary">
            Go somewhere
            </a>
        </div>
        </div>
    )
    }
export function Button({title, onHandleClick, pathToGo}) {
    return (
        <button className="btn-acction" onClick={() => {
            onHandleClick(pathToGo)
        }}>{title}</button>
    )
}

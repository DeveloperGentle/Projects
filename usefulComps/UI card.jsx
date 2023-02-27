
export default function UiCard(props) {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={props.image} alt={props.alt}/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
      <p className="text-gray-700 text-base mb-4">
        {props.text}
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
    </div>
    )
}

export function SmallImage(props) {
    return (
        <img
        src={props.image}
        className="rounded-full w-32"
        alt={props.alt}
        style={{maxWidth:'100px'}}
      />
    )
}
export default function Alert(props) {
    return (
        <div className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert" style={{width:'350px'}}>
{props.alert}
</div>
    )
}
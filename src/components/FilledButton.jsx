import './FilledButton.css'

const FilledButton = (props)=>{
    const {color="primary", size="regular"} = props
    return (
        <button className={`filled-${color}-color filled-${size}-size`}>
            {props.children?props.children:"CTA"}
        </button>
    )
}
export default FilledButton
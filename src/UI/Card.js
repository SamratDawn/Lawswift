import './Card.css';
function Card(props)
{
    const classNamees='card '+props.className;
    return <div className={classNamees}>{props.children}</div>
}

export default Card;
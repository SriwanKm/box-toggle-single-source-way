import styles from "../page.module.css"

export default function Boxes(props){
const style = {backgroundColor: props.on? "pink": "transparent"}
return(
    <div style={style} onClick={()=>props.toggle(props.id)} className={styles.box}>{props.id}</div>
)
}
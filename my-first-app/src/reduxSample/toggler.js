import {useDispatch, useSelector} from "react-redux"

//Пока не нужен
// const toggleAc = (value) => ({
//     type:SWICH_TOGGLE,
//     payload:value,
// })

const Toggler = () => {

    const isChecked = useSelector(state => state);
    const dispatch = useDispatch();


    return (
        <>
            <input type="checkbox" value={isChecked}
            onChange = {() => {
                dispatch({type:SWICH_TOGGLE})
            }}/>
        </>
    )
}

export default Toggler
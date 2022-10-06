import { useDispatch, useSelector } from "react-redux"

const Toggler = () => {

    const isChecked = useSelector(state => state);
    const dispatch = useDispatch();


    return (
        <>
            <input type="checkbox" value={isChecked}
                onChange={() => {
                    dispatch({ type: 'SWICH_TOGGLE' })
                }} />
        </>
    );
}

export default Toggler;
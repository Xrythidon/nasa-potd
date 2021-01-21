import React from 'react'
import { useDispatch } from "react-redux";

import { deleteAllItems} from "../../redux/favourites/favourite.actions";


const DeleteAllFavourites = () => {
    const dispatch = useDispatch();


    const handleButton = () => {
        dispatch(deleteAllItems())

    }

    return (
        <button onClick={handleButton} className="btn favs__btn favs__btn--all">Delete All</button>
    )
}

export default DeleteAllFavourites

import { useEffect, useState } from "react"

const useStorageState = (key , initailState) => {

    const [value , setValue] = useState(localStorage.getItem(key) || initailState);

    useEffect(() => {
        localStorage.setItem(key , value)
    } , [value , key]);

    return [value , setValue];

}

export default useStorageState;
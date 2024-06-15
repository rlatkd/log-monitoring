// import axios from "axios";
import { useState } from "react";

const Item = () => {

    const [item, setItem] = useState("");

    const handleItem = (e) => {
        setItem(e.target.value);
    }

    console.log(item);



    
    const handleRegistItem = async () => {

    }

    return (
        <>
            <h1>상품등록페이지</h1>
            <input
                value={item}
                onChange={handleItem}
            />
            <button onClick={handleRegistItem}>상품 등록</button>

        </>
    )

}

export default Item;
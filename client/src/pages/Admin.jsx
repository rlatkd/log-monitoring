import { useNavigate } from "react-router-dom";

const Admin = () => {

    //유즈네비게이트
    const navigate = useNavigate();

    return (

        <>
            <h1>관리자페이지</h1>
            <button onClick={() => navigate("/item")}>상품페이지</button>
            <button onClick={() => navigate("/dashboard")}>대시보드페이지</button>
        </>
    )

}

export default Admin;
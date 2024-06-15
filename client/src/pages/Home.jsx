import { useNavigate } from "react-router-dom"

const Home = () => {
    
    //유즈네비게이트
    const navigate = useNavigate();

    return (
        <>
            <h1>홈</h1>
            <button onClick={() => navigate('/customer')}>고객</button>
            <button onClick={() => navigate('/admin')}>관리자</button>
        </>
    )
}

export default Home
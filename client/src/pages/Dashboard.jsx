import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {

    //상품 정보 저장
    const [data, setData] = useState({});

    useEffect(() => {

        //쿼리 필터
        const query = {
            query: {
                match: {
                    message: 'item' //'item'이 포함된 모든 문자열 조회
                }
            }
        };

        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:9200/logs/_search', {
                    auth: {
                        username: 'elastic',
                        password: 'elastic123!@#'
                    },
                    params: {
                        source: JSON.stringify(query), //쿼리 적용
                        source_content_type: 'application/json',
                        size: 10000 //원하는 결과 크기로 변경
                    },
                });

                const hits = res.data.hits.hits; //로그 메시지에서 원하는 데이터가 있는 곳
                const counts = {}; //갯수 셀 빈 객체

                hits.forEach(hit => {
                    const message = JSON.parse(hit._source.message).message;
                    const item = message.split('item-')[1];
                    if (item) {
                        counts[item] = (counts[item] || 0) + 1;
                    }
                });

                setData(counts);
                // setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getData();

    }, []);

    // console.log(data);
    console.log(data);

    return (
        <div>
            <h2>json확인</h2>
            <p>{JSON.stringify(data, null, 2)}</p>
        </div>
    );
};

export default Dashboard;

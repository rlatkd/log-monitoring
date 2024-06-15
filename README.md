## Preview

<img src = "https://github.com/rlatkd/monitoring-system/blob/main/assets/preview.png">

## System Architecture

<img src = "https://github.com/rlatkd/monitoring-system/blob/main/assets/system-architecture.png">

## Command

```
docker-compose up (--build)
```

## Usage

**로그 찍기**

```
[GET] http://localhost:9100/apple
[GET] http://localhost:9100/banana
```

**웹 브라우저에서 확인**

```
localhost:3000/dashboard
```

## Flow

```
1. GET(임시로 만든 API)으로 SpringBoot에게 요청을 보냄
2. SpringBoot에 LOG가 찍힘
3. Logback이 감지해서 LOG 수집
4. Logback이 Kafka의 구독한 토픽에게 LOG 메시지 발행 (local에 LOG txt도 저장하게 설정하긴 함)
5. Kafka에 쌓여있는 LOG 메시지를 Logstash에게 소비
6. Logstash가 형식에 맞게 Elasticsearch에게 전달
    6.1. Kibana를 통해 Elasticsearch에 있는 LOG 데이터를 모니터링 할 수 있음 (http://localhost:5601)
7. React가 Elasticsearch에게 GET 요청하면 해당 LOG 데이터 가져와서 커스텀한 형식에 맞게 화면에 보여줌
```
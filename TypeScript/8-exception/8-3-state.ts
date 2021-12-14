{
  type SuccessState = {
    result: "success";
  };
  type NetWorkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
    // 어떤 이유로 실패할 수 있는지 적절하게 설정
  };

  type ResultState = SuccessState | NetWorkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log(`error occurs!`);
        if (error instanceof OffLineError) {
          // 불가능
          // 캐치로 에러를 받을 땐 error 가 any 타입이 되기 때문 -> error state 사용하기
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  service.login();
  const app = new App(service);
  app.run();
}

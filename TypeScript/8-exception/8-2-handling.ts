{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error("Not network.");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    // login 안에서 try ~ catch문으로 에러를 처리할 수도 있음
    // 에러는 잡히지만 UserService가 실제 그 에러로 뭔가 할 수 있는 일은 없음
    // 그래서 여기서 어정쩡하게 잡기보단 에러를 처리할 수 있는 곳에서 쓰는 게 좋음
    login() {
      this.client.tryConnect();
      // login...
    }
  }

  // 예상하지 못한 에러를 핸들링 할 때 어디서 처리하는 게 의미있는지,
  // 가능한 가장 우아하게 처리할 수 있는 곳에서 해야 함
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log(`error occurs!`);
        // 여기서는 의미있는 에러 처리가 가능
        // 네트워크가 오프라인이거나...
        if (error instanceof OfflineError) {
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

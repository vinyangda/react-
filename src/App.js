import "./App.css";
import { useState } from "react";
import Box from "./Box";

function App() {
  let counter = 0;
  const [counter2, setcounter2] = useState(0); // state에 초깃값을 넣어준다 => array를 반환해준다

  const increase = () => {
    counter = counter + 1;
    setcounter2(counter2 + 1);
    console.log("counter?", counter); // 상태가 계속 1이 찍힘

    //1. 유저가 버튼을 클릭한다
    //2. counter+1가 === 결국 1이 됨
    //3. setState호출
    //4. consol.log가 실행됨
    //변수 값은 1로 보이고 state값은 아직 안 변해서 이 전 값이 보인다
    //함수가 끝이난다
    //App.js를 rerender한다
    //let counter = 0 을 거치면서 다시 초기값 0으로 초기화 된다
    //다시 함수를 업데이트 하면서 다시 상태를 렌더한다
    console.log(counter2); //상태가 계속 카운트 넘어가기 전이 찍힘
    // state의 비밀
    //state를 바꾸면으 UI를 재 렌더를 해준다 렌더링은 비싸다.
    //state는 바뀌는 데 시간이 좀 걸림 >> 비동기적으로 작동 함
    //state는 함수가 끝나야 실행이 됨
    //그래서 여기서 찍히는 콘솔은 함수가 실행되기 전 상태가 찍힘.
  };

  return (
    <div>
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default App;

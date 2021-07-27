## 완성된 하단 네비게이션 
![](https://images.velog.io/images/gym/post/dc9a0322-fd8e-4e6e-9cdb-de69b98e5b97/image.png)

## 과정
### 1. 5개의 버튼 생성하기
하단 네비게이션  컴포넌트를 BottomNav.jsx 라는 이름으로 파일을 생성하고 아래와 같이 타이핑한다.
``` jsx
import React from "react";

const BottomNav = () => {
  return (
    <nav className="wrapper">{/* 하단 네비게이션 최상위 태그 */
      <div>button1</div> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      <div>button2</div>
      <div>button3</div>
      <div>button4</div>
      <div>button5</div>
    </nav>
  );
};

export default BottomNav;

```
![](https://images.velog.io/images/gym/post/fb8f907e-f6e1-49c2-b9e8-8f3a835d31ac/image.png)
- 위와 같이 button이라는 글자가 5개 생겼다.

### 2. CSS를 적용하여 수평 정렬하기
![](https://images.velog.io/images/gym/post/52007fbc-481b-4e1a-bc62-6e0a0540d648/image.png)
BottomNav.jsx에 css를 적용할 BottomNav.css파일을 생성하고 아래와 같이 타이핑한다.
``` css
/* nav태그 아래의 자식들을 수평정렬하기 위한 설정 */
nav {
  overflow: hidden;
}
/* nav태그 아래의 div태그들을 수평정렬 및 세로길이 설정 */
nav > div {
  /* 수평정렬, 5개의 button을 각각 20% width만큼 할당 */
  text-align: center;
  float: left;
  width: 20%;

  /* 세로길이 설정 */
  height: 45px;
  line-height: 45px;
}
```
![](https://images.velog.io/images/gym/post/9c5b1b98-6f32-450b-92db-633285191525/image.png)
- 네비게이션의 형태를 갖추게 되었다.

### 3. 네비게이션 아이콘 적용하기
현재 button으로 출력되는 text를 아이콘으로 바꾸어보자.
![](https://images.velog.io/images/gym/post/35b3fd88-680e-4227-8a77-e0bd8ac209b8/image.png)
- https://fontawesome.com/v6.0/icons
위의 사이트에서 제공하는 아이콘을 react에서 사용할 수 있어서 써봤다.

#### 사용방법
https://fontawesome.com/v6.0/docs/web/use-with/react/
위의 사이트에 접속한다.

![](https://images.velog.io/images/gym/post/99389e30-8788-43d0-8d9b-96d1b72e7fab/image.png)
- set up 과정에 있는 패키지들을 추가해준다.

![](https://images.velog.io/images/gym/post/1310c087-edd9-4ec8-a9b9-6baad2579d57/image.png)
![](https://images.velog.io/images/gym/post/e10948b6-d9d2-40fc-9b3b-2597ddde313a/image.png)
패키지 설치가 끝났다면 사용할 아이콘을 관리할 FontAwesome.jsx 파일을 만들자

![](https://images.velog.io/images/gym/post/02b758d3-c6e6-469c-b36d-5e0b9a08ef4e/image.png)

``` jsx
// 라이브러리
import { library } from "@fortawesome/fontawesome-svg-core";
// 사용할 아이콘 import
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// 사용할 아이콘을 라이브러리에 추가
library.add(faPlus, faUser, faMedal, faCompass, faHome);

```
- font awesome은 사용할 아이콘을 라이브러리에 넣어서 사용한다. 위와 같이 사용할 아이콘들을 모두 라이브러리에 넣었다면 아이콘을 사용할 컴포넌트에서 불러와서 사용할 수 있다.


#### BottomNav.jsx
``` jsx
import React from "react";
import "./BottomNav.css";
// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <FontAwesomeIcon icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      </div>
      <div>
        <FontAwesomeIcon icon="compass" />
      </div>
      <div>
        <FontAwesomeIcon icon="plus" />
      </div>
      <div>
        <FontAwesomeIcon icon="medal" />
      </div>
      <div>
        <FontAwesomeIcon icon="user" />
      </div>
    </nav>
  );
};

export default BottomNav;
```
 FontAwesome icon을 사용하기 위한 것들을 import해주고 button을 아이콘으로 바꿔주었다.
![](https://images.velog.io/images/gym/post/c03ab839-cc3e-41bf-a99b-8c27b392b847/image.png)
- 네비게이션 바에 아이콘이 생겼다.

### 4. 아이콘에 링크와 Router 설정
아이콘을 누르면 본문의 컴포넌트가 바뀌도록 SPA로 구현한다.

![](https://images.velog.io/images/gym/post/4b793660-4494-4dc8-b04c-46f72bf9aff5/image.png)
- 먼저 본문의 더미 컴포넌트 5개를 만들었다.

#### index.js
``` js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BottomNav from "./BottomNav";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomNav /> // bottom nav가 항상 떠있도록 index.js에서 호출
      <App /> // bottom nav에 따라 바뀌는 본문
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```
- 네비게이션을 누르면 본문이 바뀌도록 구현했었는데, 본문 페이지로 넘어가버려서 네비게이션 바가 없어지는 시행착오를 겪었다.
- 네비게이션바를 항상 띄울 수 있게 가장 상위인 index.js에서 호출했다.

#### App.js
``` js
import { Route, Switch } from "react-router-dom";
import "./App.css";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        <Route path="/fourth" component={Fourth} />
        <Route path="/fifth" component={Fifth} />
      </Switch>
    </div>
  );
}

export default App;
```
app.js 에서는 페이지가 바뀔 수 있게 라우터를 설정해주었다.

#### BottomNav.jsx
``` jsx
import React from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <Link to="/first" className="nav-link">
          <FontAwesomeIcon icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/second" className="nav-link">
          <FontAwesomeIcon icon="compass" />
        </Link>
      </div>
      <div>
        <Link to="/third" className="nav-link">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div>
        <Link to="/fourth" className="nav-link">
          <FontAwesomeIcon icon="medal" />
        </Link>
      </div>
      <div>
        <Link to="/fifth" className="nav-link">
          <FontAwesomeIcon icon="user" />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
```

![](https://images.velog.io/images/gym/post/704926ab-6091-4762-a962-8c5884c36d3e/image.png)
- 각 버튼을 클릭하면 주소와 본문이 바뀐다.

## 5. 네비게이션 바 하단으로 옮기기
``` css
/* 네비바 하단 고정 밑 세로 길이 설정 */
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
}

/* nav태그 아래의 자식들을 수평정렬하기 위한 설정 */
nav {
  overflow: hidden;
  border-top: 2px solid grey;
}
/* nav태그 아래의 div태그들을 수평정렬 및 세로길이 설정 */
nav > div {
  /* 수평정렬, 5개의 button을 각각 20% width만큼 할당 */
  float: left;
  width: 20%;
  text-align: center;

  /* 세로길이 설정 */
  height: 45px;
  line-height: 45px;
}
```
가장 상위의 wrapper class를 하단으로 옮겨주고 position: fixed 옵션으로 항상 화면에 고정되게 한다.
![](https://images.velog.io/images/gym/post/1bc499bf-d82d-4554-91fb-d1924d821a5f/image.png)


## 6. 선택한 아이콘의 색 변경
아이콘의 색깔이 변경되지않아 사용자가 현재 어느 페이지를 보고있는지 알 수 없다. 아이콘을 누르면 색이 변경되게 하자.

#### BottomNav.jsx
``` jsx
import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <Link to="/first" className="nav-link" onClick={() => setActiveNav(1)}>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/second" className="nav-link" onClick={() => setActiveNav(2)}>
          <FontAwesomeIcon
            icon="compass"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link to="/third" className="nav-link" onClick={() => setActiveNav(3)}>
          <FontAwesomeIcon
            icon="plus"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link to="/fourth" className="nav-link" onClick={() => setActiveNav(4)}>
          <FontAwesomeIcon
            icon="medal"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link to="/fifth" className="nav-link" onClick={() => setActiveNav(5)}>
          <FontAwesomeIcon
            icon="user"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
```
- 현재 어떤 아이콘이 선택되었는지 상태관리할 activeNav를 선언한다.
각 아이콘 링크마다 onClick 이벤트로 선택될 때마다 activeNav를 바꾸어준다.
- activeNav와 각 아이콘의 번호가 같으면 className에 active를 추가한다.

#### BottomNav.css
``` css
/* 네비바 하단 고정 밑 세로 길이 설정 */
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
}

/* nav태그 아래의 자식들을 수평정렬하기 위한 설정 */
nav {
  overflow: hidden;
  border-top: 2px solid grey;
}
/* nav태그 아래의 div태그들을 수평정렬 및 세로길이 설정 */
nav > div {
  /* 수평정렬, 5개의 button을 각각 20% width만큼 할당 */
  float: left;
  width: 20%;
  text-align: center;

  /* 세로길이 설정 */
  height: 45px;
  line-height: 45px;
}

/* 하단 네비바의 메뉴를 눌렀을 때 색상 변경*/
.nav-item {
  color: grey;
}

/* 하단 네비바의 메뉴를 눌렀을 때 색상 변경*/
.active {
  color: #ef5c89;
}
```
- nav-item의 기본 컬러를 회색으로 설정하고 아이템이 클릭되었을 때 active 클래스의 색상을 설정한다.
![](https://images.velog.io/images/gym/post/ffb16a73-de20-4b60-bdcc-39496229d427/image.png)
- 선택된 아이콘의 색상이 변경된다.


## 시행착오
![](https://images.velog.io/images/gym/post/b1990ea5-b81e-4b68-ab11-d91f190cc4aa/image.png)
- 현재 아이콘에만 Link태그가 걸어져있어서 아이콘 밖의 화면을 클릭하면 본문이 바뀌지 않는다. Link태그를 각 네비게이션 아이템에 걸어주자.
``` jsx
import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <Link to="/first" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </div>
      </Link>
      <Link to="/second" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <FontAwesomeIcon
            icon="compass"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/third" className="nav-link" onClick={() => setActiveNav(3)}>
        <div>
          <FontAwesomeIcon
            icon="plus"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/fourth" className="nav-link" onClick={() => setActiveNav(4)}>
        <div>
          <FontAwesomeIcon
            icon="medal"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/fifth" className="nav-link" onClick={() => setActiveNav(5)}>
        <div>
          <FontAwesomeIcon
            icon="user"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
```
![](https://images.velog.io/images/gym/post/a25a42e2-4956-4eb9-90cd-e3c50b5d6dda/image.png)
- 클릭할 수 있는 범위가 넓어졌지만 수평정렬을 위한 css 수정이 필요하다.

#### BottomNav.css
``` css
/* 네비바 하단 고정 밑 세로 길이 설정 */
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
}

/* nav태그 아래의 자식들을 수평정렬하기 위한 설정 */
nav {
  overflow: hidden;
  border-top: 2px solid grey;
}
/* nav태그 아래의 div태그들을 수평정렬 및 세로길이 설정 */
.nav-link {
  /* 수평정렬, 5개의 button을 각각 20% width만큼 할당 */
  float: left;
  width: 20%;
  text-align: center;

  /* 세로길이 설정 */
  height: 45px;
  line-height: 45px;
}

/* 하단 네비바의 메뉴를 눌렀을 때 색상 변경*/
.nav-item {
  color: grey;
}

/* 하단 네비바의 메뉴를 눌렀을 때 색상 변경*/
.active {
  color: #ef5c89;
}
```
- 기존의 nav > div를 .nav-link에 적용되도록 바꾸었다.
![](https://images.velog.io/images/gym/post/1aefae74-9622-4dd1-9867-a0ed05461588/image.png)
- 네비게이션 아이템을 누르면 링크가 적용되도록 수정했다.

## 느낀 점
네비게이션 바를 고정하기 위해 index.js에서 컴포넌트를 호출해야한 다는 것을 배웠다. 또한 Link를 네비게이션 아이콘이 아닌 네비게이션 아이템인 <div\>태그 상위에 걸어줌으로써 넓은 범위를 클릭하더라도 본문이 바뀌도록 수정했다.

각 아이템들이 5번 반복되는데 map함수를 써서 리팩토링 할 수 있을 것 같다.

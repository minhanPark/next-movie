# Next-Movie-App

## 완성한 모습

### 처음화면

![첫화면](https://user-images.githubusercontent.com/29043491/112998323-e22c0100-91a8-11eb-8d9e-0af065b8526b.png)

### 영화리스트 화면

![영화 리스트](https://user-images.githubusercontent.com/29043491/112998346-ebb56900-91a8-11eb-8da8-bbd008a6a109.png)

### 영화 디테일 화면

![영화 디테일](https://user-images.githubusercontent.com/29043491/112998359-ee17c300-91a8-11eb-816b-ce8aa0f60793.png)

### 영화 검색 화면

![검색 화면](https://user-images.githubusercontent.com/29043491/112998328-e526f180-91a8-11eb-9187-b8ce58da33e8.png)

## 사용한 모듈

> 1. Next.js
> 2. Axios
> 3. react-slick
> 4. tailwindcss

## tailwindcss 장점 및 한계점

tailwindcss를 적용해본 것은 장점만 생각했기 때문이다. 개발환경에서는 많은 용량을 가졌지만, 빌드 후엔 필요한 부분만 남겨두고 삭제하기 때문에 부담없이 많은 기능을 쓸 수 있었고, 기본적으로 Next.js에서 tailwindcss를 사용하라고 공식 문서까지 친절하게 남겨뒀기 때문에 따라하면서 쉽게 적용할 수도 있었다.  
모바일 화면을 기준으로 삼고, 다른 기기들을 생각하면 되었고, 쉽게 반응형도 적용할 수 있을 것 같다.

단점의 경우 쓰려고 css를 적용할 때 쓰고 싶었던 몇가지 기능들이 없었다는 것이 큰 단점이었다. 가령 hover나 focus 같은 수도 클래스는 아주 적용하기 편할 만큼 쉬웠지만, before나 after같은 많이 사용하지 않는 수도 클래스의 경우엔 없었고, css 효과들 중에서도 내가 사용하려는 몇몇 기능들이 없었다는 것이 아쉬웠다.

## 리액트 애니메이션

react-slick을 통해서 슬릭 슬라이더를 처음 만들어봤다. 적용도 쉽고, 해당 애니메이션 모듈뿐만 아니라 사용하고 싶은 여러 애니메이션 모듈이 생겼다.  
리액트의 경우엔 생태계가 넓기 때문에 여러 유용한 라이브러리들이 아주 많구나 하는 것을 느낄 수 있었다.

## Next.js

서버사이드 렌더링의 장점은 역시나 여타 spa와는 다르게 seo에 유리하다는 것이다. 회사의 프로젝트도 Next로 진행을 하고 있고, 혼자 공부한다는 생각으로 영화웹앱을 만들어보면서 너무나 많은 것들을 다시금 배우게 된 것같다.  
Next.js로 프로젝트를 진행하면서 깨달은 것들도 블로그에 적어갈 생각이다.  
Next로 느껴본 서버사이드 렌더링의 가장 큰 특징은 특정 구조를 지닌다는 것이다.

> [Next app의 기본 구조](https://minhanpark.github.io/today-i-learned/nextjs-scaffold/)

기본적으로 갖춰야할 폴더는 블로그 포스팅을 통해 정리했다.

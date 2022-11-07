export default class SearchInput {
  constructor(target, setApiData) {
    this.target = target; //app.js 연결
    this.form = document.createElement("form"); //form 태그 생성
    this.form.className = "SearchInput"; //form 태그 클래스네임 지정
    this.render(); // 렌더링
    this.input = this.form.firstElementChild; //렌더링 된 인풋태그 접근
    
    this.setApiData = setApiData; //통신을 통한 데이터 저장

    // input 이벤트 발생 시 api 요청 및 상태 저장
    this.input.addEventListener("input", (e) => {
      this.dataFetch(e.target.value).then((data) => {
        this.setApiData(data);
      });
    });
    this.form.addEventListener("submit", (e) => e.preventDefault());
    this.target.appendChild(this.form);
  }

  render() {
    this.form.innerHTML = `
            <input class="SearchInput__input" type="text"
				placeholder="프로그램 언어를 입력하세요." value=""/>
        `;
  }

  async dataFetch(str) {
    const response = await fetch(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=+${str}`, {
      method: "GET",
    });
    // await로 백엔드에서 리턴을 받은 후 다음 라인이 실행
    if (response.status == 200) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
    //   console.log(response);
      return response;
    }
  }
}

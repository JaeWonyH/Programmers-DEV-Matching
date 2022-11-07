import SearchInput from "./src/components/SearchInput.js";
import Suggestion from "./src/components/Suggestion.js";
import SelectedLanguage from "./src/components/SelectedLanguage.js";

class App{
    root = document.querySelector('.App');
    

    constructor(){
		//컴토넌트 로딩
        this.selectedLanguage = new SelectedLanguage(this.root);
        this.searchInput = new SearchInput(this.root, this.setApiData);
        this.suggestion = new Suggestion(this.root, this.setLanguage);

        window.addEventListener('keydown',(e)=>{
            if(e.key==='ArrowDown'){
                this.setKey(this.suggestion.key+=1);
            }
            else if(e.key==='ArrowUp'){
                this.setKey(this.suggestion.key-=1);
            }
            else if(e.key==='Enter'){
                this.setLanguage(this.suggestion.key);
            }
        })

    }

    // 화살표함수를 통해 클래스 내부의 this(멤버변수)에 접근할 수 있다.
    // 화살표가 아니면 오류가 발생한다.

	// key입력시 커서 변경하여 렌더링
    setKey=(key)=>{
        const realkey = key<0?4:key%5;
        this.suggestion.key = realkey;
        this.searchInput.input.value =this.suggestion.apiData[realkey]
        this.suggestion.render();
    }
    
	// this.searchInput 컴포넌트에 전달할 setState함수. 
    // input change가 발생할 때마다 api데이터를 요청한다.
    setApiData=(data)=>{
        this.suggestion.apiData = data;
        this.suggestion.render();
    }
    
    // this.suggestion 컴포넌트에 전달할 setState함수.
    // 검색창에 나타난 데이터를 골라 selectedLanguages에 저장한 후 리렌더링한다.
    setLanguage=(key)=>{
        window.alert(this.suggestion.apiData[key]);
        if(this.selectedLanguage.languages.length>=5){
            this.selectedLanguage.languages.splice(0,1);
        }
        this.selectedLanguage.languages.push(this.suggestion.apiData[key]);
        this.selectedLanguage.render();
    }
    
};

const app = new App();

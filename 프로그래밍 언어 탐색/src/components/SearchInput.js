export default function SearchInput(target){

    this.element = document.createElement('form');
    this.element.className = "SearchInput";

    this.render = () => {
        this.element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">`;
    }

    this.render();
    target.appendChild(this.element);
}
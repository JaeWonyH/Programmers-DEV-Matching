export default class SelectedLanguage{

    constructor(target){
        this.target = target;
        this.div = document.createElement('div');
        this.div.className = "SelectedLanguage";
        this.languages = [];
        this.target.appendChild(this.div);

    }

    render(){
        this.div.innerHTML = `
            <ul>
                ${this.languages.map(datum=>`<li>${datum}</li>`).join("")}
            </ul>
        `
    }

}

export default class Suggestion{


    constructor(target, setLanguage){
        this.target = target;
        this.div = document.createElement('div');
        this.div.className = "Suggestion";
        this.target.appendChild(this.div);
        this.apiData = [];
        this.key = 0;
        this.setLanguage = setLanguage;
        this.render();
    }

    render(){
        if(this.apiData.length){
            this.div.hidden = false;
            this.div.innerHTML =`
                	<ul>
                    ${this.apiData.map((datum,index)=>index===this.key?
                        `<li class ="Suggestion__item--selected" value=${index}>
							${datum}
							<span class="Suggestion__item--matched">
                            	Script
                            </span>
						 </li>`
                        :
                        `<li value=${index}>
                            ${datum}<span class="Suggestion__item--matched">
                            	Script
                            </span>
                         </li>`).join("")}
                	</ul>
            	`;
            this.div.firstElementChild.childNodes.forEach((node, index)=>{
                node.addEventListener('click',(e)=>{
                    this.setLanguage(index-1);
                    console.log(index-1);
                });
            })
        }else{
            this.div.hidden = true;
        }
    }
}

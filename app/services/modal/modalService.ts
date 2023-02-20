function openModal(id = null): void {

        const tempelate = "<div>MyModal</div>";
        const modal = new Modal(id);
        modal.open(tempelate);
        
};

function removeModal(): void { 
        Modal.removeById(); 
};

function openModalSecond(id = null): void {
        const tempelate = "<div>MyModal 2</div>";
        const modal = new Modal(id);
        modal.open(tempelate);
};

class Modal{
    private readonly id: string ; 

    public static modals: any[] = []; 

    constructor(id = null) {

        const findModal = Modal.modals.find(x => x.id === id); 
        if(findModal){ 
            Modal.removeById(id);
        }  

        Modal.modals.push(this); 
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length);
    }

    public open(tempelate: string): void{ 

        const divWrap = document.createElement("div"); 
        divWrap.innerHTML = tempelate;  
        divWrap.id = this.id; 
        divWrap.setAttribute('modal-id', this.id); 
        divWrap.classList.add('modal.element'); 
        document.body.appendChild(divWrap); 
    }

    public remove(): void{ 
        const modalEl = document.getElementById(this.id); 
        modalEl?.parentNode?.removeChild(modalEl);
    }
    public static removeById(id: string | null = null): void{ 
        let modalId = id;

        const findEl = Modal.modals.find(x => x.id === modalId);  

        if(findEl){
            findEl.remove(); 
            Modal.modals = Modal.modals.filter((el) => el.id !== modalId); 
        } else { 
            if (Array.isArray(Modal.modals)){
                const lastEl = Modal.modals.pop(); 
                if(lastEl){
                    lastEl.remove(); 
                }
            }
        }   
        
    }
   
}

const modal = new Modal();
"use strict";
function openModal(id = null) {
    const tempelate = "<div>MyModal</div>";
    const modal = new Modal(id);
    modal.open(tempelate);
}
;
function removeModal() {
    Modal.removeById();
}
;
function openModalSecond(id = null) {
    const tempelate = "<div>MyModal 2</div>";
    const modal = new Modal(id);
    modal.open(tempelate);
}
;
class Modal {
    constructor(id = null) {
        const findModal = Modal.modals.find(x => x.id === id);
        if (findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length);
    }
    open(tempelate) {
        const divWrap = document.createElement("div");
        divWrap.innerHTML = tempelate;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add('modal.element');
        document.body.appendChild(divWrap);
    }
    remove() {
        var _a;
        const modalEl = document.getElementById(this.id);
        (_a = modalEl === null || modalEl === void 0 ? void 0 : modalEl.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(modalEl);
    }
    static removeById(id = null) {
        let modalId = id;
        const findEl = Modal.modals.find(x => x.id === modalId);
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => el.id !== modalId);
        }
        else {
            if (Array.isArray(Modal.modals)) {
                const lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    }
}
Modal.modals = [];
const modal = new Modal();
//# sourceMappingURL=modalService.js.map
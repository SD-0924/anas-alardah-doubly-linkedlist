class Node {
    
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
    
    setNext(node){
        this.next = node;
    }
    
    getNext(node){
        return this.next;
    }
    
    setPrev(node){
        this.prev = node;
    }
    
    getPrev(){
        return this.prev;
    }
    

    print() {
        const next = this.next ? ", Node.next: " + this.next.val : ", Node.next: null";
        const prev = this.prev ? ", Node.prev: " + this.prev.val : ", Node.prev: null";
        const str = `Node.val: ${this.val}  ${next}  ${prev}`;
        console.log(str);
    }
    
}

export { Node };

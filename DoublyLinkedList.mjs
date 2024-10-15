import {Node} from "./Node.mjs";

class DoublyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    push(value){
        const newNode = new Node(value);
        
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
    }
    
    pop() {
        
    if (!this.tail) return undefined;
    
    let poppedNode = this.tail;
    
    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        poppedNode.prev = null;
    }
    
    return poppedNode.val;
}
    
    shift(){
        
        if(this.head === null){
            return;
        } else if(this.head.next === null){
            this.pop();
            return;
        }
        
        this.head = this.head.next;
        this.head.prev.next = null;
        this.head.prev = null;
    }
    
    unshift(val){
        if(this.head === null){
            this.push(val);
            return;
        }
        
        const newNode = new Node(val);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = this.head.prev;
    }
    
    // ZERO INDEXED (STARTS FROM 0)
    get(index){
        let pointer = this.head;
        let c = 0;
        
        while(pointer && c !== index){
            pointer = pointer.next;
            c+=1;
        }
        
        return pointer !== null ? pointer.val : "Index out of bound";
    }
    
    set(index, val){
        let pointer = this.head;
        let c = 0;
        
        while(pointer && c !== index){
            pointer = pointer.next;
            c+=1;
        }
        
        if(pointer === null){
            console.log("Index out of bound");
            return;
        } 
        
        const oldValue = pointer.val;
        pointer.val = val;
        
        const str = `Node at index ${index} had the value of ${oldValue} now became ${pointer.val}`;
        console.log(str);
    }
    
    insert(index, val){
        
        if(index === 0){
            this.unshift(val);
            console.log("Node inserted");
            return true;
        }
        
        let pointer = this.head;
        let c = 0;
        
        while(pointer && c !== index - 1){
            pointer = pointer.next;
            c+=1;
        }
        
        if(pointer === null){
            console.log("Index out of bound");
            return false;
        } else if (pointer.next === null){
            this.push(val);
            return true;
        }
    
        const newNode = new Node(val);
        newNode.next = pointer.next;
        newNode.next.prev = newNode;
        newNode.prev = pointer;
        pointer.next = newNode;
        
        console.log("Node inserted");
        return true;
    }
    
    remove(index){
        
        if(index === 0){
            console.log(`Node at index ${index} removed`);
            this.shift();
            return true;
        }
        
        let pointer = this.head;
        let c = 0;
        
        while(pointer && c !== index - 1){
            pointer = pointer.next;
            c+=1;
        }
        
        if(pointer === null){
            console.log("Index out of bound");
            return false;
        } else if(pointer.next.next === null){
            console.log(`Node at index ${index} removed`);
            this.pop();
            return true;
        }
        
        pointer.print();
        
        let pointerNext = pointer.next;
        pointer.next = pointerNext.next;
        pointerNext.next.prev = pointer;
        pointer = null;
        
        console.log(`Node at index ${index} removed`);
        return true;
    }
    

    print(){
        
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        
        let head = this.head;
        while(head){
            head.print();
            head = head.next;
        }
        console.log("List printed");
    }
    
    
}

export {DoublyLinkedList};
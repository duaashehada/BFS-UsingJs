// Import stylesheets
import './style.css';

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    console.log(this.adj);
  }

  BFS(s, v) {
    let visited = [];
    for (let i = 0; i < v; i++) {
      visited[i] = false;
    }

    let qeue = new Queue();

    qeue.enqueue(s);
    visited[s] = true;

    while (qeue.lenght != 0) {
      console.log(qeue.peek());
      s = qeue.peek();
      qeue.dequeue();
      // queu.pop();

      if (this.adj[s]) {
        this.adj[s].forEach((el) => {
          if (!visited[el]) {
            visited[el] = true;
            qeue.enqueue(el);
          }
        });
      }
    }
  }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.BFS(2, 4);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

"use strict";
/* 타입스크립트 연습하기
  // 터미널에 tsc 명령어를 입력하면 에러 확인

  let count = 0; // 숫자
  count += 1;
  // count = "갑자기 분위기 문자열"; // 에러 발생

  const message: string = "hello world"; // 문자열

  const done: boolean = true;

  const number: number[] = [1, 2, 3]; // 숫자 배열
  const messages: string[] = ["hello", "world"];

  // message.push(1); // 숫자를 넣으려고 하면 동작하지 않는다

  let mightBeUndefined: string | undefined = undefined; // string or undefined 타입
  let nullableNumber: number | null = null; // number or null 타입

  let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
  color = "yellow";
  // color = "green";  // 에러 발생: 정의되지 않은 색상
*/
/* 함수에서 타입 정의하기
  function sum(x: number, y: number): number {
    return x + y;
  }
  sum(1, 2);

  function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  const total = sumArray([1, 2, 3, 4, 5]);

  function returnNohting(): void {
    console.log("I am just saying hello world");
  }
 */
/* interface 사용해보기
  // Shape라는 interface 선언
  interface Shape {
    getArea(): number; // Shape interface는 getArea 함수가 꼭 있어야 하며, 해당 함수의 반환값은 숫자
  }

  class Circle implements Shape {
    // `implements` 키워드를 사용해서 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    radius: number; // 멤버 변수 radius 값을 설정
    
    constructor(radius: number) {
      this.radius = radius;
    }
    
    // 너비를 가져오는 함수 구현
    getArea() {
      return this.radius * this.radius * Math.PI;
    }
  }

  class Rectangle implements Shape {
    // public or private 사용 이전
    // // 멤버 변수 선언: width, height
    // width: number;
    // height: number;
    
    // // 구성자 설정
    // constructor(width: number, height: number) {
    //   this.width = width;
    //   this.height = height;
    // }
  
    // public or private를 입력하면 constructor에서 직접 타입을 설정하는 과정 생략 가능
    constructor(private width: number, private height: number) {
      this.width = width;
      this.height = height;
    }
    
    // 반환값 설정
    getArea() {
      return this.width * this.height;
    }
  }

  const circle = new Circle(5);
  const rectangle = new Rectangle(10, 5);

  console.log(circle.radius);
  // console.log(rectangle.width);  // private으로 인해 에러 발생

  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

  shapes.forEach((shape) => {
    console.log(shape.getArea());
  });

  // 78.53981633974483: 5 * 5 * Math.PI
  // 50: 10 * 5
*/
/* 일반 객체를 interface로 타입 설정하기
  interface Person {
    name: string;
    age?: number; // ?: 설정해도 되고, 하지 않아도 되는 값을 의미
  }
  interface Developer {
    name: string;
    age?: number;
    skills: string[];
  }

  const person: Person = {
    name: "Jayden",
    age: 20,
  };
  const expert: Developer = {
    name: "velopert",
    skills: ["javascript", "typescript", "react"],
  };

  // interface를 선언할 때 다른 interface를 extends 키워드를 사용해서 상속받을 수 있다
  const people: Person[] = [person, expert];
*/
/* Type Alias 사용하기
  // type은 특정 타입에 별칭을 붙이는 용도로 사용
  type Person = {
    name: string;
    age?: number;
  };

  // &: Intersection, 두 개 이상의 타입들을 합쳐준다
  type Developer = Person & {
    skills: string[];
  };

  const person: Person = {
    name: "Jayden",
  };

  const expert: Developer = {
    name: "velopert",
    skills: ["javascript", "typescript", "react"],
  };

  type People = Person[]; // Person[]을 앞으로 People이라는 타입으로 사용할 수 있도록 함
  const people: People = [person, expert];

  type Color = "red" | "orange" | "yellow";
  const color: Color = "red";
  const colors: Color[] = ["red", "yellow"];
*/
/* Generics: 타입스크립트에서 함수, 클래스, interface, type alias를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
  // // any: 어떤 타입이 올지 모르는 상황
  // function merge(a: any, b: any): any {
  //   return {
  //     ...a,
  //     ...b,
  //   };
  // }
  // const merged = merge({ foo: 1 }, { bar: 1 });

  // Generics를 사용 가능, 예시 1
  function merge<A, B>(a: A, b: B): A & B {
    return {
      ...a,
      ...b,
    };
  }
  const merged = merge({ foo: 1 }, { bar: 1 });

  // Generics를 사용 가능, 예시 2
  function wrap<T>(param: T) {
    return {
      param,
    };
  }
  const wrapped = wrap(10);
*/
/* type에서 Generics 사용
  type Items<T> = {
    list: T[];
  };

  const items: Items<string> = {
    list: ["a", "b", "c"],
  };
*/
/* 클래스에서 Generics 사용하기 */
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        // shift: 배열에서 첫 번째 요소를 제거하고 반환
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

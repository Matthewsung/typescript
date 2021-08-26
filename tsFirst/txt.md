- 프로그래밍 언어로 compiled 언어(컴파일러가 필요하고 컴피일하는 시점이 필요)
- 자바스크립트를 기반으로 한 언어

# 특징

### 1. 변수에 데이터 타입 지정

```jsx
function add (a, b) {
	return a+b;
}
console.log(add('3','5')) -> 8 값이 나옴
function add (a :number , b: number) {
	return a+b;
}
console.log(add('3','5')) -> 오류 : 데이터 타입이 string이기때문에 안됨
```

### 2. 객체 지향적

### 3. 컴파일 타임 오류

- typescript로 만든 파일을 js 파일로 변경 필요

# 사용법

### npm i -g typescript 설치

- .ts 파일로 만들어 사용
- 처음 오류가 나면  tsc —init으로 기본 세팅완료

### tsc -w

- 매번 compile하기 힘들기때문에 변화가 있을때 자동으로 compile해줌

# 타입 추론 Type Inference

- 타입을 작성하지 않으면 추론해서 자기가 할당

# 타입 명시

- 변수를 선언할때 타입을 명시 함으로써 변수의 타입을 지정

```jsx
let x : string = 'kim'; 
let y : number = 123;
let z : boolean = true;

function abc (num :number) { }
function abc (num :number) :void { } 
	-> void는 이 함수는 아무것도 반환하지 않음을 뜻함
function abc (num :number) :numbrt { return num * 2} 
	-> 뒤의 :number는 반환하는 값이 숫자임을 뜻함
function abc (num :number) :{
	studentId : number,
	studentName: string,
}{ return null} 
	-> object의 경우 :object로 작성 하여도 되지만 더 자세히 적어주는 것이 좋다
```

# 인터페이스

```tsx
function abc (num :number) :{
	studentId : number,
	studentName: string,
}{ return null} 
	
interface Student {
	studentId : number,
	studentName: string,
	age?:number
	addComment?:(comment:string) => string;             
		-> method 사용법(comment라는 매개변수는 string 결과값은 string으로 나온다는 의미
}
	*interface의 이름은 대문자로 시작

function abc (num :number) :Student {
	 return {
		studentId : 1234,
		studentName: 'kim',
	}} 
	-> 만들어둔 Student라는 interface를 타입에 설정 가능하다
	-> interface에 ?을 표시하면 return 값으로 생략이 가능하다
	-> return 값도 interface와 반드시 동일해야 한다
```

# Readonly

- 읽기 전용 property로 객체 생성시 할당된 property 값을 바꿀수 없다

```tsx
interface Student {
	readonly studentId : number,
}
	-> readyonly를 붙이면 읽기만 가능
```

# Enum (열거형)

- 연관된 아이템을 함께 묶어서 표현할수 있는 수단
- compile 후에 js파일에 표현됨(interface 는 생략)(배열형태로 들어간다)

```tsx
enum abc {
	male,
	femaile
}

interface Student {
	studentId : number,
	studentName: string,
	age?:number
	addComment?:(comment:string) => string;             
	gender : abc
}

function abc (num :number) :Student {
	 return {
		studentId : 1234,
		studentName: 'kim',
		gender : abc.male
	}} 
```

# 리터럴 타입

- | 를 이용해서 표시

```tsx
interface Student {            
	gender : 'male' | 'female'
}

function student (){
	gender : 'male'	
}
```

# 타입 종류

## Any

- 어떤 타입이든 가능하다

```tsx
let value : any  = 5;
value = 'hello'; 
-> 어떤 타입이든 가능(typescript의 특성상 최소한으로 사용하는것이 좋다)
```

### 유니언 타입

- 어떤 타입인지 모르겠지만 다음중 하나를 사용할수 있게 한다

```tsx
let value :number | string
```

### Type aliases

- 반복되는 타입을 지정하고 사용

```tsx
type Abc = number | string

let orderId :Abc;

```

# 함수

- 반환값이 없을때 :void 사용
- default 값 할당 가능

```tsx
function abc (msg :string , name ='KIM' ):void{
	console.log(msg + name);
}
* default값은 뒤에 ='abc' 적어준다
```

# Class(객체)

- 연관된 변수와 함수들을 한 덩어리로 묶어 구조화하여 표현하는 방식

```tsx
let fullName:string;
let age:number;
let jobTitle:string

let print = (fullName:string, age:number, jobTitle:string ):void =>{
	console.log(`${fullName}의 직업은 ${jobTitle} 이고 나이는 ${age}입니다 `)
}

------- class 방법 --------------------------------------------------------------
class Employee{
 fullName:string;
 age:number;
 jobTitle:string;
	print = ():void =>{
		console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 나이는 ${this.age}입니다 `)
	}
}

----객체로 만드는 방법 -----------------------------------------------------------
let employee1 = new Employee();
employ1.fullName = '철수';
employ1.age = 20;
employ1.jobTitle='학생';
employ1.print();
```

# 객체의 getter / setter

```tsx
class Employee{
	fullName:string;
	age:number;
	jobTitle:string;
	constructor(fullName:string,	age:number,	jobTitle:string){
		this.fullName = fullName;
		this.age = age;
		this.jobTitle = jobTitle
	}
	print = ():void =>{
		console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 나이는 ${this.age}입니다 `)
	}
}
------- 객체 사용------------------------------------------------------------------
let employee1 = new Employee('철수' , 20, '학생');

```

- 접근방법으로는 public / private / protected 가 있다
- public : class 외부에서 접근 가능
- private : class 내부에서만 접근 가능
- protected : class 내부 혹은 자식 class에서 접근 가능

```tsx
class Employee{
	private _fullName:string;               -> private를 붙여 사용(보통_를 앞에 붙여줌) / public은 기본값으로 들어감
	age:number;
	jobTitle:string;
	constructor(fullName:string,	age:number,	jobTitle:string){
		this._fullName = fullName;
		this.age = age;
		this.jobTitle = jobTitle
	}
	get fullName(){return this._fullName;}     -> getter를 사용하기위해 만듬
	set fullName(value:string){               -> setter를 사용하기 위해 만듬
		this._fullName = value;
	}
	print = ():void =>{
		console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 나이는 ${this.age}입니다 `)
	}
}
------------------
let employee1 = new Employee('철수' , 20, '학생');
----------------------
employee1.fullName='민수'
console.log(employee1.fullName)
```

```tsx
class Employee{
	constructor(
		private fullName:string,	
		age:number,	
		jobTitle:string){
	}

	get fullName(){return this._fullName;}     -> getter를 사용하기위해 만듬
	set fullName(value:string){               -> setter를 사용하기 위해 만듬
		this._fullName = value;
	}
	print = ():void =>{
		console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 나이는 ${this.age}입니다 `)
	}
}
------------------
let employee1 = new Employee('철수' , 20, '학생');
----------------------
employee1.fullName='민수'
console.log(employee1.fullName)
```

- constructor를 이용하여 변수의 선언을 줄일 수 있다

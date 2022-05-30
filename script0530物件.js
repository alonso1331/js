//建立物件object
function Person(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.sayHello = function(){
        return "您好，我是" + name +"，今年" + age + "歲，身高" + height +"公分，體重" + weight + "公斤。";
    }    
};
person1 = new Person("Pepe", 25, 75, 170);
person2 = new Person("Don", 29, 60, 169);
person3 = new Person("Juan", 36, 80, 175);
document.write(person1.sayHello()+"</br>")
document.write(person2.sayHello() + "</br>" + person3.sayHello())

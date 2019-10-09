import "reflect-metadata"
const metadataKey="username"
const metadataValue ="dalong"
/**
 * Class C for metadata demo
 */
class C {
    @Reflect.metadata(metadataKey, metadataValue)
    method() {
    }
}


/**
 * 
 * Class D with code meta
 */
class D {

    method(){

    }
}

Reflect.defineMetadata(metadataKey, metadataValue, D.prototype, "method");


let  c =new  C();

let value = Reflect.getMetadata(metadataKey, c, "method");

console.log(value)


let  d =new  D();

let value2 = Reflect.getMetadata(metadataKey, d, "method");

console.log(value2)

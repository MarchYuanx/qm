// 'use strict';
var Book = function(isbn,title,author){
    // console.log(this);

    if(!this.checkIsbn(isbn))
        throw new Error('Book: Invalid ISBN.');  



    this.isbn = isbn;
    this.title = title || 'No-title';
    this.author = author || 'No-author';;
}

Book.prototype = {
    //返回值 bool
    checkIsbn:function(isbn){
        if(isbn == undefined || typeof isbn !== 'string'){
            return false;
        }

        if(isbn.length != 10 && isbn.length != 13){
            return false;
        }

        if(isbn.indexOf('x') == -1){
            return false;
        }



        return true;
    },
    getIsbn:function(){
        return this.isbn;
    },
    setIsbn:function(isbn){
        
        console.log('无权限');
    },
    getTitle:function(){
        return this.title;
    },
    setTitle:function(title){
        this.title = title;
    },
    getAuthor:function(){
        return this.author;
    },
    setAuthor:function(author){
        this.author = author;
    }
}


// 函数的执行方式，决定this的指向
// 1. 作为普通函数 this指向全局，浏览器window node后端 global
// 当启用严格模式后 undefined

// 2.作为对象的方法
let book = new Book('123450x322','JS');   
console.log(book.getIsbn(), book.title, book.author);

console.log(book instanceof Book);

book.setAuthor('yuanx');
book.title = '竜神の剣を喰らえ ';
console.log(book.getIsbn(), book.title, book.author);
console.log(book);
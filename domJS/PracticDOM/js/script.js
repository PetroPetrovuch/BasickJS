/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const adv = document.querySelectorAll(".promo__adv img"),
     poster = document.querySelector(".promo__bg"),
     genre = poster.querySelector(".promo__genre"),
     meny = document.querySelector(".promo__interactive-list");

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//1)

adv.forEach(item=>{
    item.remove();
});

//2)
genre.textContent="драма";

//3)

poster.style.backgroundImage="url('img/bg.jpg')";


//4)
movieDB.movies.sort();
console.log(movieDB.movies);

meny.innerHTML="";

movieDB.movies.forEach((item,index)=>{
    meny.innerHTML+=`<li class="promo__interactive-item">${index+1} - ${item}
        <div class="delete"></div>
    </li>`;
});

const addFilm=document.querySelector(".promo__interactive .add button");

       
      addFilm.addEventListener("click",(btn)=>{
        btn.preventDefault(); 
        console.log(typeof(document.querySelector(".promo__interactive input").value));
        //console.log("Click button");
        //console.log(btn);
       // console.log(document.querySelector(".promo__interactive input").value);
       if(typeof(document.querySelector(".promo__interactive input").value)!="string" || document.querySelector(".promo__interactive input").value=="")
       {
        console.log("Данні введені не коректно");
       }
       else{
        movieDB.movies.push(document.querySelector(".promo__interactive input").value);
       }
        console.log(movieDB.movies);
      });
    







// let numberOfFilms = +prompt("Qancha film ko'rgansiz?");
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// let a = prompt("Oxirgi ko'rgan filmlaringizdan biri?"),
//     b = +prompt("Uni qancha baholagan bo'lardingiz?");
//
//
// personalMovieDB.movies[a] = b;
// console.log(personalMovieDB);
// Dars uchun vazifa:
//
// 1) Loop yordamida filmlar haqidagi foydalanuvchi savollarini avtomatlashtirish..
//
// 2) Agar foydalanuvchi javobni bo'sh qator sifatida qoldirsa,
// javobni bekor qilsa yoki kiritgan film nomi 50 belgidan uzunroq bo'lsa, savollar qayta so'ralsin.
//
// 3) If dan foydalanib personalMovieDB.count ni tekshiring  agar u 10 dan kam bo'lsa -
// "Ko'rilgan filmlar soni kam", agar 10 dan 30 gacha bo'lsa - "Siz klassik tomoshabinsiz" va agar 30 dan ko'p bo'lsa -
// — "Siz kino ishqibozisiz" so'zlari consolga chiqarilisin. Agar variantlardan hech biri mos kelmasa, "Xatolik yuz berdi" so'zi consolga chiqsin.
//
// 4) Mashq qiling va siklni yana ikkita usulda qayta yozing

let numberOfFilms,
    personalMoviesDB = {
    counr: numberOfFilms,
    actors: {},
    genders:{},
    privat: false
};

for (let i = 0; i<1; i++)
{
    let numberOfFilms = +prompt("Qancha film ko'rgansiz?");

    if (numberOfFilms != 0){

        let nameOfFilms = prompt("Oxirgi ko'rgan filmlaringizdan biri?"),
            ballOfFilms = +prompt("Uni qancha baholagan bo'lardingiz?");

        if (numberOfFilms != "" &&  numberOfFilms != null && nameOfFilms != "" && nameOfFilms != null && ballOfFilms != "" && ballOfFilms != null ) {

            if (numberOfFilms <=10){
                console.log("Ko'rilgan kinolar soni kam!")
            } else if (numberOfFilms > 10 && numberOfFilms <= 30){
                console.log("Siz klassik tomoshabinsiz!")
            } else if (numberOfFilms > 30){
                console.log("Siz kino ishqibozisiz!")
            }

            personalMoviesDB.genders = numberOfFilms;
            personalMoviesDB.actors[nameOfFilms]= ballOfFilms;
            console.log(personalMoviesDB);
        }
    } else {
        // i--;
      console.log("Xatolik yuz berdi!")
    }
};
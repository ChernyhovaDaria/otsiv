const reviews = [
    {
    id: 0,
    photo: 'https://avatarko.ru/img/kartinka/22/sova_21234.jpg',
    NAME: 'Иван',
    JOB : 'Работник',
    REVIEW: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия. Задача организации, в особенности же дальнейшее развитие различных форм деятельности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.'
    },
    {
    id: 1,
    photo: 'https://abrakadabra.fun/uploads/posts/2021-12/1640731802_1-abrakadabra-fun-p-anime-avi-obrabotannie-milie-1.jpg',
    NAME: 'Маша',
    JOB : 'Стажер',
    REVIEW: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же рамки и место обучения кадров влечет за собой процесс внедрения и модернизации соответствующий условий активизации.'
    },
    {
    id: 2,
    photo: 'https://mixmag.io/wp-content/pics/60030/image197-28-427x720.jpg',
    NAME: 'Оля',
    JOB : 'HR',
    REVIEW: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют определения и уточнения существенных финансовых и административных условий.'
    }
]

let index = 0

function renderReviews() {

    const blocReview = document.getElementById("review")

    let review = reviews.at(index)

    blocReview.innerHTML = ""

    blocReview.innerHTML =
    `
        <img src="${review.photo}" alt="" class= "photoUser rounded-full">
        <p class="font-bold">${review.NAME}</p>
        <p >${review.JOB}</p>
        <p>${review.REVIEW}</p>
        <!-- Отзыв -->
    `
    }
    
const btnBack = document.getElementById("Back");
const btnForward = document.getElementById("Forward");
const btnRandom = document.getElementById("Random");

btnBack.addEventListener('click', changeReviewBack);
btnForward.addEventListener('click', changeReviewForward);
btnRandom.addEventListener('click', changeReviewRandom);

//Мне кажется, что я накостылила

function changeReviewBack (){
    index -=1

    const maxIndex = reviews.length

    if (index < 0){
        index = maxIndex-1
    }

    renderReviews()
}

function changeReviewForward (){
    index +=1

    const maxIndex = reviews.length

    if (index >= maxIndex){
        index = 0
    }

    renderReviews()

}

function changeReviewRandom(){
    let rand = Math.floor(Math.random()*reviews.length);

//Я пыталась не допустить появление случаного значения идентичного текщему но не вышло.

if (rand === index){
     rand = Math.floor(Math.random()*reviews.length)   
     index = rand
     renderReviews()
   }
   else{
    index = rand
    renderReviews()
    } 

     index = rand
     renderReviews()
}

renderReviews()
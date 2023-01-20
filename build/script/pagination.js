const btnPrev = document.querySelector('button#previous'),
    btnNext = document.querySelector('button#next'),
    BASE_URL = `./assets/characters`;

const photoProfile = document.querySelector('#photo-profile'),
    nameUser = document.querySelector('#name'),
    jobUser = document.querySelector('#job'),
    feedbackUser = document.querySelector('#testimony');

const pagination = [
    document.querySelector('.page.pg1'),
    document.querySelector('.page.pg2'),
    document.querySelector('.page.pg3'),
    document.querySelector('.page.pg4'),
    document.querySelector('.page.pg5'),
    document.querySelector('.page.pg6'),
]

const btnMenu = document.querySelector('button#btn-menu')
const contMenu = document.querySelector('nav#navbar-container')
let cond = true

btnMenu.addEventListener('click', () => {
    if (cond) {
        contMenu.style.display = 'block'
        cond = false
    } else {
        contMenu.style.display = 'none'
        cond = true
    }
})

const testimony  = [
    [
        `<img src="${BASE_URL}/male/char-01.png" alt="photo profile" width="55px" height="55px">`,
        'Andrei Grigory',
        'Teacher',
        'Very fast service and guaranteed security of borrowing money. Certainly has little interest. Frivo one of the best service services. And reliable when you need sudden money.'
    ],
    [
        `<img src="${BASE_URL}/female/char-01.png" alt="photo profile" width="55px" height="55px">`,
        'Kamalani Malie',
        'Farmer',
        'Very fast service and guaranteed security. frivo is one that I can rely on when I need sudden money'
    ],
    [
        `<img src="${BASE_URL}/female/char-02.png" alt="photo profile" width="55px" height="55px">`,
        'Min-Seo Jae',
        'Writer',
        'The giving of money does not pass through the bank or any intermediary but comes directly to the office. Because it is intended to validate the file filed on registration.'
    ],
    [
        `<img src="${BASE_URL}/male/char-02.png" alt="photo profile" width="55px" height="55px">`,
        'Saiful Akbar',
        'Electrical Engineer',
        'The strict data security system makes borrowers not afraid to register online.'
    ],
    [
        `<img src="${BASE_URL}/female/char-03.png" alt="photo profile" width="55px" height="55px">`,
        'Angela Gerlinde',
        'Designer',
        'Although this is a money lending service, it still pays attention to the user interface that is comfortable to look at for its users.'
    ],
    [
        `<img src="${BASE_URL}/male/char-03.png" alt="photo profile" width="55px" height="55px">`,
        'Ebuka Izem',
        'Computer Operator',
        'I am convinced to borrow money with minimal interest and risk.'
    ],
]

const size = '8px', 
    widthActive = '25px',
    color = '#C6C6C6',
    colorActive = '#096ECC'

let tab = 0

const styling = () => {
    for (let i = 0; i < pagination.length; i++) {
        pagination[i].style.width = size 
        pagination[i].style.height = size
        pagination[i].style.backgroundColor = color
        
    }

    pagination[tab].style.width = widthActive
    pagination[tab].style.backgroundColor = colorActive
    
    photoProfile.innerHTML = testimony[tab][0]
    nameUser.innerText = testimony[tab][1]
    jobUser.innerText = testimony[tab][2]
    feedbackUser.innerText = testimony[tab][3]

    if (tab == 0) {
        btnPrev.style.opacity = 0.4
    } else {
        btnPrev.style.opacity = 1
    }

    if (tab == 5) {
        btnNext.style.opacity = 0.4
    } else {
        btnNext.style.opacity = 1
    }
}

styling()

btnNext.addEventListener('click', () => {
    tab+=1
    if (tab > 5) {
        tab = 0
    }
    styling()

})

btnPrev.addEventListener('click', () => {
    tab-=1
    if (tab < 0) {
        tab = 5
    }
    styling()
})

pagination[0].addEventListener('click', () => {
    tab = 0
    styling()
})
pagination[1].addEventListener('click', () => {
    tab = 1
    styling()
})
pagination[2].addEventListener('click', () => {
    tab = 2
    styling()
})
pagination[3].addEventListener('click', () => {
    tab = 3
    styling()
})
pagination[4].addEventListener('click', () => {
    tab = 4
    styling()
})
pagination[5].addEventListener('click', () => {
    tab = 5
    styling()
})

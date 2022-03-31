const btnMobile = document.getElementById('mobile-menu')

const navP = document.getElementById('product-nav')
const navC = document.getElementById('company-nav')
const navCn = document.getElementById('connect-nav')

function toggleMenu() {
const navM = document.getElementById('nav')

    navM.classList.toggle('active')
}

function toggleProduct() {
    navP.classList.toggle('active')
    navC.classList.remove('active')
    navCn.classList.remove('active')
}

function toggleCompany() {
    navC.classList.toggle('active')
    navP.classList.remove('active')
    navCn.classList.remove('active')
}

function toggleConnect() {
    navCn.classList.toggle('active')
    navP.classList.remove('active')
    navC.classList.remove('active')
}


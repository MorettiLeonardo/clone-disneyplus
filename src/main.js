document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')
    
    const heroSection = document.querySelector('.hero')
    const heightHero = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY

        if (currentPosition <= heightHero) {
            hideHeaderElements()
        } else {
            showHeaderElements()
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer)
    }
    
    // Seção FAQ, accordion
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            
            hideAllTabs()
            tab.classList.add('shows__list--is-active')
            
            hideAllButton()
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function hideAllButton() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0;i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function openOrCloseAnswer(element) {
    const classOpened = 'faq__questions__item--is-open'
    const elementFather = element.target.parentNode
    
    elementFather.classList.toggle(classOpened)
}

function hideHeaderElements() {
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function showHeaderElements() {
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}
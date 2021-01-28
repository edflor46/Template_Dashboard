/* -------------------------------------------------------------------------- */
/*                   Expandir / contraer Dashboard                            */
/* -------------------------------------------------------------------------- */
const dashboard = document.getElementById('panel-navbar')
const btn_toggle = document.getElementById('nav_btn')
const push_body = document.getElementById('push_body')

if (dashboard && btn_toggle) btn_toggle.addEventListener('click', () => {
    dashboard.classList.toggle('expandir')
    push_body.classList.toggle('push')

})

/* -------------------------------------------------------------------------- */
/*                                 Link Active                                */
/* -------------------------------------------------------------------------- */
const links = document.querySelectorAll('.link')

function linkActivo() {
    links.forEach(link => link.classList.remove('active'))
    this.classList.add('active')
}

links.forEach(link => link.addEventListener('click', linkActivo))

/* -------------------------------------------------------------------------- */
/*                              Collapse submenu                              */
/* -------------------------------------------------------------------------- */

const click_collapse = document.getElementsByClassName('collapse_link')

for (let i = 0; i < click_collapse.length; i++) {
    click_collapse[i].addEventListener('click', function () {
        const collapse_menu = this.nextElementSibling
        collapse_menu.classList.toggle('showCollapse')

        const rotar = collapse_menu.previousElementSibling
        rotar.classList.toggle('rotar')
    })
}

